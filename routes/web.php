<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobApplicationController;
use App\Http\Controllers\SearchController;

Route::post('/apply/submit', [JobApplicationController::class, 'submit'])->name('apply.submit');

Route::get('/ajax-search-careers-insights', [SearchController::class, 'careersInsightsSearch']);

Route::get('/search_page_results', [SearchController::class, 'page_result']);



