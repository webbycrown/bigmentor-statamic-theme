<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Facades\Entry;
use Illuminate\Support\Str;

class SearchController extends Controller
{
    public function careersInsightsSearch(Request $request)
    {
        // $query = strtolower($request->query('q', ''));

        // $results = Entry::query()
        //     ->whereIn('collection', ['our_services', 'our_insights'])
        //     ->get()
        //     ->filter(fn($entry) =>
        //         Str::contains(strtolower($entry->get('title') ?? ''), $query) ||
        //         Str::contains(strtolower($entry->get('content') ?? ''), $query) ||
        //         Str::contains(strtolower($entry->slug() ?? ''), $query)
        //     )
        //     ->take(10);

        //     // return response()->json($results->map(function ($entry) {
        //     //     return [
        //     //         'title' => $entry->get('title'),
        //     //         'url' => $entry->url(),
        //     //         'collection' => $entry->collection(),
        //     //     ];
        //     // })->values()->all());  // <-- add ->values()->all()
        //     return view('partials.search-results', [
        //         'query' => $query,
        //         'results' => $results,
        //     ]);
  

    $query = strtolower($request->query('q', ''));

    $blogs = Entry::query()
        ->whereIn('collection', ['our_services', 'our_insights'])
        ->get()
        ->filter(fn($entry) =>
            Str::contains(strtolower($entry->get('title') ?? ''), $query)
            || Str::contains(strtolower($entry->slug() ?? ''), $query)
        )
        ->take(5);

    $insights = Entry::query()
        ->whereIn('collection', ['our_insights', 'case_studies','industries'])
        ->get()
        ->filter(fn($entry) =>
            Str::contains(strtolower($entry->get('title') ?? ''), $query)
            || Str::contains(strtolower($entry->slug() ?? ''), $query)
        )
        ->take(3);

    return view('partials.search-results', [
        'blogs' => $blogs,
        'insights' => $insights
    ]);
    }

    public function page_result(Request $request)
    {
        $query = strtolower($request->query('q', ''));
    
        $collections = [
            'our_insights'   => 10,
            'case_studies'   => 10,
            'industries'     => 10,
            'our_consultant' => 10,
            'job_careers'    => 10,
        ];
    
        $results = [];
    
        foreach ($collections as $collection => $limit) {
            $entries = Entry::query()
                ->where('collection', $collection)
                ->get()
                ->filter(fn($entry) =>
                    Str::contains(strtolower($entry->get('title') ?? ''), $query) ||
                    Str::contains(strtolower($entry->slug() ?? ''), $query)
                )
                ->take($limit);
    
            $results[$collection] = $entries;
        }
    
        return view('search', $results);
    }
    

   
}


