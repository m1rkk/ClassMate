<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

    Route::prefix('auth')->group(function () {
        Route::post('login', [AuthController::class, 'login']);  //login route kotorij svazivaetsa s login funkcijei v AuthController
        Route::post('register', [AuthController::class, 'register']); //register route kotorij svazivaetsa s register funkcijei v AuthController
        Route::get('me', [AuthController::class, 'me'])->middleware('auth:sanctum'); //me route kotorij svazivaetsa s me funkcijei v AuthController poka chto chisto zatichka
    })
?>
