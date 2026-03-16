<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

    Route::prefix('auth')->group(function () {
        Route::post('login', [AuthController::class, 'login']);  //login route kotorij svazivaetsa s login funkcijei v AuthController
        Route::post('register', [AuthController::class, 'register']); //register route kotorij svazivaetsa s register funkcijei v AuthController
        Route::get('me', [AuthController::class, 'me'])->middleware('auth:sanctum'); //me route kotorij svazivaetsa s me funkcijei v AuthController poka chto chisto zatichka
    });
   /* TODO: 1) Student - teacher relationship
                * Vse uchitelja (poze filtri)
                * Post zapis
                * Get zapis
                * Delete zapis
                * Statistika uchitelja
                * Post piezime ucheniku
                * Get piezime ucheniku
                * Delete piezime ucheniku
   */
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('allTeachers', [AuthController::class, 'allTeachers'])->middleware('auth:sanctum');

        Route::get('appointment/{appointment}', [AuthController::class, 'getAppointmentById'])->middleware('auth:sanctum');
        Route::get('appointment', [AuthController::class, 'getAppointments'])->middleware('auth:sanctum');
        Route::post('makeAppointment', [AuthController::class, 'makeAppointment'])->middleware('auth:sanctum');
        Route::delete('deleteAppointment/{appointment}', [AuthController::class, 'deleteAppointment'])->middleware('auth:sanctum');


    });
?>
