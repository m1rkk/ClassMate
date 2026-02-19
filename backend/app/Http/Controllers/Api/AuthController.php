<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Lietotajs;
use App\Models\Studenti;
use App\Models\Skolotajs;
use function Laravel\Prompts\password;

class AuthController extends Controller
{
    public function register(Request $request){
        $data = $request->validate([         // poverka dannih esli oshibka kod:422
           'Vards' => 'required|string|max:50',
           'Uzvards' => 'required|string|max:50',
            'Epasts' => 'required|email|unique:lietotajs,Epasts',
            /*SELECT COUNT(*)
            FROM lietotajs
            WHERE Epasts = 'введённый_email'*/
            'AtrasanasVieta' => 'nullable|string|max:100',
            'Parole' => 'required|min:6',
            'role' => 'required|in:student,teacher',
        ]);
        $user = Lietotajs::create([                           //sozdanie polzovatela
            'Vards' => $data['Vards'],
            'Uzvards' => $data['Uzvards'],
            'Epasts' => $data['Epasts'],
            'AtrasanasVieta' => $data['AtrasanasVieta'] ?? null,
            'Parole' => Hash::make($data['Parole']),
            //role ne ukazan potomu chto on nuzen chisto dla kajfa
        ]);
        if($data['role'] == 'student') { //vot dla etogo i nuzen role budet srazu sozdana relacija v nuznoj tablice
            Studenti::create([
                'LietotajaId' => $user->LietotajaId,
            ]);
        }
        else{
           Skolotajs::create([
               'LietotajaId' => $user->LietotajaId,
           ]);
        }
        return response()->json([
            'message' => 'User created successfully'
        ], 201); //esli vse chotko

    }
    public function login(Request $request){
        $data = $request->validate([
            'Epasts' => 'required|email',
            'Parole' => 'required'
        ]);
        $user = Lietotajs::where('Epasts', $data['Epasts'])->first(); // nahodim uzera esli on sushestvuet
        if (!$user || !Hash::check($data['Parole'], $user->Parole)) // esli hashirovanij parole ne sovpadaet vozvrashaem oshibku
        {
            return response()->json(['message' => 'Invalid credentials',
            ], 401);
        }

        return response()->json([               //esli vse ok
            'message' => 'Login successful',
            'user' => $user,
        ]);
    }
    public function me(Request $request){    //poka chto zatichka budet rabotat kogda podkluchu Sanctum
        return response()->json($request->user());
    }
}
