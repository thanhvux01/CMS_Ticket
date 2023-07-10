<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\TicketController;
use \App\Http\Controllers\PackageController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//For Ticket

Route::get('ticket',[TicketController::class,'index']);
Route::get('ticket/{id}',[TicketController::class,'Search']);
Route::post('ticket',[TicketController::class,'Sort']);
Route::post('ticket/chart/',[TicketController::class,'Chart']);
Route::post('ticket/for-control',[TicketController::class,'ForControl']);

//For Package

Route::get('package',[PackageController::class,'index']);
Route::post('package',[PackageController::class,'createPackage']);
Route::put('package',[PackageController::class,'updatePackage']);
