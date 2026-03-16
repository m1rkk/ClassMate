<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pieraksts;
use App\Models\Piezimes;
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

        try {

            $user = Lietotajs::create([                           //sozdanie polzovatela
                'Vards' => $data['Vards'],
                'Uzvards' => $data['Uzvards'],
                'Epasts' => $data['Epasts'],
                'AtrasanasVieta' => $data['AtrasanasVieta'] ?? null,
                'Parole' => Hash::make($data['Parole']),
                //role ne ukazan potomu chto on nuzen chisto dla kajfa
            ]);



            if($data['role'] == 'student') { //vot dla etogo i nuzen role budet srazu sozdana relacija v nuznoj tablice
                $student = Studenti::create([
                    'LietotajaId' => $user->LietotajaId,
                ]);
                \Log::info('Student created:', ['id' => $student->StudentuId]);
            }
            else{
               $teacher = Skolotajs::create([
                   'LietotajaId' => $user->LietotajaId,
               ]);

            }

            return response()->json([
                'message' => 'User created successfully',
                'user' => $user,
                'lietotaja_id' => $user->LietotajaId
            ], 201); //esli vse chotko
        } catch (\Exception $e) {
            \Log::error('Registration error:', ['error' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
            return response()->json([
                'message' => 'Registration failed',
                'error' => $e->getMessage()
            ], 500);
        }

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
        $token = $user->createToken('auth-token')->plainTextToken;  // esli proshel validaciju sozdaetsa token pod polzovatela
        return response()->json([               //esli vse ok
            'message' => 'LoginPage successful',
            'user' => $user,
            'token' => $token,
        ]);
    }
    public function me(Request $request){    //poka chto zatichka budet rabotat kogda podkluchu Sanctum
        return response()->json($request->user());
    }

    public function allTeachers()
    {
        return Skolotajs::all();
    }

    public function makeAppointment(Request $request)
    {
        $data = $request->validate([
            'Maksa' => 'required|string|max:255',
            'Datums' => 'required|date',
            'Laiks' => 'required|date_format:H:i',
            'Tema' => 'nullable|string|max:255',
            'SkolotajaId' => 'required|exists:skolotajs,SkolotajaId',
            'StudentuId' => 'required|exists:students,StudentuId',
        ]);
        try {
            $appointment = Pieraksts::create($data);
            return response()->json($appointment, 201);
        }
        catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }

    public function getAppointmentById(Pieraksts $appointment)
    {
        return response()->json($appointment);
    }

    public function getAppointmentByStudentId(Studenti $student)
    {
        return $student->pieraksti()->get();
    }

    public function getAppointmentByTeacherId(Skolotajs $teacher)
    {
        return $teacher->pieraksti()->get();
    }

    public function getAppointments()
    {
        return response()->json(Pieraksts::all());
    }

    public function deleteAppointment(Pieraksts $appointment)
    {
        return response()->json($appointment->delete());
    }

    public function createNote(request $request)
    {
        $data = $request->validate([
            'Teksts' => 'required|string',
            'Datums' => 'required|date',
            'SkolotajaId' => 'required|exists:skolotajs,SkolotajaId',
            'StudentuId' => 'required|exists:students,StudentuId',
        ]);
        try {
            $note = Piezimes::create($data);
            return response()->json($note, 201);
        }
        catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getNotesByStudentId(Studenti $student)
    {
        return $student->piezimes()->get();
    }

    public function deleteNote(Pieraksts $note)
    {
        return response()->json($note->delete());
    }


}
