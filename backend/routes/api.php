<?php
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Route;

    Route::get('/pong', function () {
        return response()->json(['message' => 'pong']);
    });
    Route::get('/me', function (Request $request) {
        return response()->json([
            'message' => 'ok',
            'user' => $request->user(),
        ]);
    })->middleware('auth:sanctum');
?>
