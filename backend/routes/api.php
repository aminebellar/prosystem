<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::middleware(['api'])->group(function () {
    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('projects', \App\Http\Controllers\ProjectController::class);
    Route::apiResource('services', \App\Http\Controllers\ServiceController::class);

    // ✅ Correction ici :
    Route::post('/contact', [ContactController::class, 'send']);

    Route::get('/test-cors', function () {
        return response()->json(['message' => 'CORS fonctionne']);
    });
});
