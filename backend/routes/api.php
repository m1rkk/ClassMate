<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DataController;

    Route::prefix('auth')->group(function () {
        Route::post('login', [AuthController::class, 'login']);  //login route kotorij svazivaetsa s login funkcijei v AuthController
        Route::post('register', [AuthController::class, 'register']); //register route kotorij svazivaetsa s register funkcijei v AuthController
        Route::get('me', [AuthController::class, 'me'])->middleware('auth:sanctum'); //me route kotorij svazivaetsa s me funkcijei v AuthController poka chto chisto zatichka
    });
   /* TODO: 1) Student - teacher relationship
                * Statistika uchitelja
   */
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('allTeachers', [DataController::class, 'allTeachers'])->middleware('auth:sanctum');
        Route::get('teacherByPerson/{person}', [DataController::class, 'teacherByPerson'])->middleware('auth:sanctum');
        Route::get('teacherSearch/{searchTerm}', [DataController::class, 'teacherSearch'])->middleware('auth:sanctum');

        Route::get('allStudentsOfTeacher/{teacher}', [DataController::class, 'allStudentsOfTeacher'])->middleware('auth:sanctum');
        Route::get('studentSearchByTeacher/{teacher}/{searchTerm}', [DataController::class, 'studentSearch'])->middleware('auth:sanctum');

        Route::get('getPerson/{person}', [DataController::class, 'getPerson'])->middleware('auth:sanctum');
        Route::get('getStudent/{person}', [DataController::class, 'getStudentByPerson'])->middleware('auth:sanctum');
        Route::get('getRole/{person}', [DataController::class, 'getRoleByPerson'])->middleware('auth:sanctum');
        Route::delete('deletePerson/{person}', [DataController::class, 'deletePerson'])->middleware('auth:sanctum');

        Route::get('appointment/{appointment}', [DataController::class, 'getAppointmentById'])->middleware('auth:sanctum');
        Route::get('appointments', [DataController::class, 'getAppointments'])->middleware('auth:sanctum');

        Route::get('appointment/{teacher}/byTeacher', [DataController::class, 'getAppointmentByTeacherId'])->middleware('auth:sanctum');
        Route::get('appointments/week/{teacher}/byTeacher', [DataController::class, 'getTeacherAppointmentsByWeek'])->middleware('auth:sanctum');
        Route::get('appointments/month/{teacher}/byTeacher', [DataController::class, 'getTeacherAppointmentsByMonth'])->middleware('auth:sanctum');
        Route::get('appointments/day/{teacher}/byTeacher', [DataController::class, 'getTeacherAppointmentsByDay'])->middleware('auth:sanctum');
        Route::get('appointments/inThreeDays/{teacher}/byTeacher', [DataController::class, 'getTeacherAppointmentsByThreeDays'])->middleware('auth:sanctum');

        Route::get('appointment/{student}/byStudent', [DataController::class, 'getAppointmentByStudentId'])->middleware('auth:sanctum');
        Route::get('appointments/week/{student}/byStudent', [DataController::class, 'getStudentAppointmentsByWeek'])->middleware('auth:sanctum');
        Route::get('appointments/month/{student}/byStudent', [DataController::class, 'getStudentAppointmentsByMonth'])->middleware('auth:sanctum');
        Route::get('appointments/day/{student}/byStudent', [DataController::class, 'getStudentAppointmentsByDay'])->middleware('auth:sanctum');
        Route::get('appointments/inThreeDays/{student}/byStudent', [DataController::class, 'getStudentAppointmentsByThreeDays'])->middleware('auth:sanctum');

        Route::post('appointment', [DataController::class, 'makeAppointment'])->middleware('auth:sanctum');
        Route::delete('appointment/{appointment}/delete', [DataController::class, 'deleteAppointment'])->middleware('auth:sanctum');


        Route::post('note/create', [DataController::class, 'createNote'])->middleware('auth:sanctum');
        Route::get('note/{student}/getNote', [DataController::class, 'getNotesByStudentId'])->middleware('auth:sanctum');
        Route::delete('note/{note}/deleteNote', [DataController::class, 'deleteNote'])->middleware('auth:sanctum');


        Route::get('reviews/{teacher}/byTeacher', [DataController::class, 'getReviewsByTeacher'])->middleware('auth:sanctum');
        Route::get('reviews/{student}/byStudent', [DataController::class, 'getReviewsByStudentId'])->middleware('auth:sanctum');
        Route::post('reviews/create', [DataController::class, 'createReview'])->middleware('auth:sanctum');
        Route::delete('reviews/{review}/delete', [DataController::class, 'deleteReview'])->middleware('auth:sanctum');
    });

