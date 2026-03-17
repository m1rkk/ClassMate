<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Pieraksts;
use App\Models\Piezimes;
use App\Models\Skolotajs;
use App\Models\Studenti;
use Illuminate\Http\Request;

class DataController extends Controller
{
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
