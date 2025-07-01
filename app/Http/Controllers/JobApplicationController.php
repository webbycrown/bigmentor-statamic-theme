<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Statamic\Facades\Entry;
use Statamic\Facades\AssetContainer;

class JobApplicationController extends Controller
{
    public function submit(Request $request)
    {
        if (!$request->isMethod('post')) {
            return ['status' => 'error', 'message' => 'Invalid request'];
        }

        $validator = Validator::make($request->all(), [
            'first_name'        => 'required|string|max:255',
            'last_name'         => 'required|string|max:255',
            'email'             => 'required|email',
            'phone'             => 'required|string|max:20',
            'applied_position'  => 'required|string|max:255',
            'application_date'  => 'required|date',
            'about'             => 'required|string|max:1000',
            'file_upload'       => 'required|file|mimes:pdf,doc,docx|max:2048',
        ]);

        if ($validator->fails()) {
            return [
                'status' => 'validation',
                'errors' => $validator->errors()
            ];
        }

        // Check if the applicant has already applied with the same email or phone for the same position
        $existingApplication = Entry::query()
            ->where('collection', 'job_apply')
            ->where('email', $request->email)
            ->where('phone', $request->phone)
            // ->where('applied_position', $request->applied_position)
            ->where('applied_job', $request->applied_job)
            ->first();

        if ($existingApplication) {
            return [
                'status' => 'error',
                'message' => 'You Have Already Applied for This Position.',
            ];
        }

        // Find the related job_career entry
        $careerEntry = Entry::query()
            ->where('collection', 'job_careers')
            ->where('id', $request->applied_job)
            ->where('title', $request->applied_position)
            ->first();

        if (!$careerEntry) {
            return [
                'status' => 'error',
                'message' => 'Selected job position not found.',
            ];
        }

        // Upload file as asset
        $assetId = null;

        if ($request->hasFile('file_upload')) {
            $file = $request->file('file_upload');
            $container = AssetContainer::find('uploads');

            if (!$container) {
                return ['status' => 'error', 'message' => 'Uploads asset container not found.'];
            }

            $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
            $assetPath = "job-applications/{$filename}";

            $asset = $container->makeAsset($assetPath);
            $asset->upload($file)->save();

            $assetId = $asset->id();
        }

        // Save application entry with linked job_career entry ID
        $entry = Entry::make()
            ->collection('job_apply')
            ->data([
                'title'            => $request->first_name . ' ' . $request->last_name,
                'first_name'       => $request->first_name,
                'last_name'        => $request->last_name,
                'email'            => $request->email,
                'phone'            => $request->phone,
                // 'applied_position' => $request->applied_position,
                'applied_job'      => $careerEntry->id(), // relationship field
                'application_date' => $request->application_date,
                'message'          => $request->about,
                'resume'           => $assetId,
            ])
            ->save();

        return [
            'status'  => 'success',
            'message' => 'Your job application has been submitted successfully!',
        ];
    }
}

