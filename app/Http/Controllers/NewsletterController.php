<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Facades\Entry;
use Carbon\Carbon;
use Statamic\Facades\Form;
use Illuminate\Support\Facades\Validator;


class NewsletterController extends Controller
{
    /**
     * Handle newsletter subscription.
     * Validates email, checks for duplicates, and saves new submissions.
     */
    public function newsLetter(Request $request)
    {
    // Get request data
        $data = $request->only(['email', 'privacy_policy']);

    // Validate both fields
        $validator = Validator::make($data, [
            'email' => 'required|email',
        'privacy_policy' => 'accepted', // accepted: must be true/on/1
    ], [
        'email.required' => 'Email is required.',
        'email.email' => 'Please enter a valid email address.',
        'privacy_policy.accepted' => 'You must accept the privacy policy.',
    ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $email = $data['email'];
        $form = Form::find('newsletter');

    // Check for existing subscription
        $existing = $form->submissions()->firstWhere('email', $email);

        if ($existing) {
            return response()->json([
                'status' => false,
                'message' => 'You are already subscribed.',
            ]);
        }

    // Save new submission
        $form->makeSubmission()->data([
            'email' => $email,
            'privacy_policy' => $data['privacy_policy'],
        ])->save();

        return response()->json([
            'status' => true,
            'message' => 'Thank you for subscribing!',
        ]);
    }
}
