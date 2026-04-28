<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Atsauksme;
use App\Models\Lietotajs;
use App\Models\Pieraksts;
use App\Models\Piezimes;
use App\Models\Skolotajs;
use App\Models\Studenti;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function allTeachers()
    {
        return response()->json(
            Skolotajs::with('lietotajs')->get()
        );
    }

    public function makeAppointment(Request $request)
    {
        $data = $request->validate([
            'Maksa' => 'required|string|max:255',
            'Datums' => 'required|date',
            'Laiks' => 'required|date_format:H:i',
            'Tema' => 'nullable|string|max:100',
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

    public function getNotesByStudentAndTeacher(Studenti $student, Skolotajs $teacher)
    {
        return $student->piezimes()->where("SkolotajaId",$teacher->SkolotajaId)->get();
    }

    public function deleteNote(Pieraksts $note)
    {
        return response()->json($note->delete());
    }

    public function getReviewsByTeacher(Skolotajs $teacher)
    {
        return $teacher->atsauksmes()->get();
    }

    public function getReviewsByStudentId(Studenti $student)
    {
        return $student->atsauksmes()->get();
    }

    public function createReview(Request $request)
    {
        $data = $request->validate([
            'Teksts' => 'required|string',
            'ZvaigznuSkaits' => 'required|integer|min:1|max:5',
            'Datums' => 'required|date',
            'SkolotajaId' => 'required|exists:skolotajs,SkolotajaId',
            'StudentuId' => 'required|exists:students,StudentuId',
        ]);
        try {
            $atsauksme = Atsauksme::create($data);
            return response()->json($atsauksme, 201);
        }catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function deleteReview(Atsauksme $review)
    {
        return response()->json($review->delete());
    }

    public function getPerson(Lietotajs $person)
    {
        return response()->json($person);
    }
    public function getStudentByPerson(Lietotajs $person)
    {
        return response()->json($person->students()->first());
    }

    public function getStudentAppointmentsByWeek(Studenti $student)
    {
        return response()->json($student->pieraksti()->whereDate('Datums', '>=', now()->startOfWeek())->whereDate('Datums', '<=', now()->endOfWeek())->get());
    }

    public function getStudentAppointmentsByMonth(Studenti $student)
    {
        return response()->json($student->pieraksti()->whereMonth('Datums', now()->month)->whereYear('Datums', now()->year)->get());
    }

    public function getStudentAppointmentsByDay(Studenti $student)
    {
        return response()->json($student->pieraksti()->whereDate('Datums', now()->toDateString())->get());
    }

    public function getStudentAppointmentsByThreeDays(Studenti $student)
    {
        return response()->json(
            $student->pieraksti()
                ->whereDate('Datums', '>=', now()->toDateString())
                ->whereDate('Datums', '<=', now()->addDays(3)->toDateString())
                ->get()
        );
    }
    public function getTeacherAppointmentsByWeek(Skolotajs $teacher)
    {
        return response()->json($teacher->pieraksti()->whereDate('Datums', '>=', now()->startOfWeek())->whereDate('Datums', '<=', now()->endOfWeek())->get());
    }

    public function getTeacherAppointmentsByMonth(Skolotajs $teacher)
    {
        return response()->json($teacher->pieraksti()->whereMonth('Datums', now()->month)->whereYear('Datums', now()->year)->get());
    }

    public function getTeacherAppointmentsByDay(Skolotajs $teacher)
    {
        return response()->json($teacher->pieraksti()->whereDate('Datums', now()->toDateString())->get());
    }

    public function getTeacherAppointmentsByThreeDays(Skolotajs $teacher)
    {
        return response()->json(
            $teacher->pieraksti()
                ->whereDate('Datums', '>=', now()->toDateString())
                ->whereDate('Datums', '<=', now()->addDays(3)->toDateString())
                ->get()
        );
    }

    public function getRoleByPerson(Lietotajs $person)
    {
        $isStudent = $person->students()->exists();

        return response()->json($isStudent ? 'student' : 'teacher');
    }

    public function deletePerson(Lietotajs $person)
    {
        return response()->json($person->delete());
    }

    public function teacherByPerson(Lietotajs $person)
    {
        return response()->json($person->skolotajs()->first());
    }

    public function teacherSearch(string $searchTerm)
    {
        return response()->json(
            Skolotajs::with('lietotajs')
                ->whereHas('lietotajs', function ($query) use ($searchTerm) {
                    $query->where('Vards', 'like', "%{$searchTerm}%")
                        ->orWhere('Uzvards', 'like', "%{$searchTerm}%")
                        ->orWhere('AtrasanasVieta', 'like', "%{$searchTerm}%");
                })
                ->get()
        );
    }

    public function allStudentsOfTeacher(Skolotajs $teacher)
    {
        return response()->json(
            $teacher->students()
                ->with('lietotajs')
                ->get()
        );
    }

    public function studentSearch(Skolotajs $teacher,string $searchTerm)
    {
        return response()->json(
            $teacher->students()
                ->with('lietotajs')->whereHas('lietotajs', function ($query) use ($searchTerm) {
                    $query->where('Vards', 'like', "%{$searchTerm}%")
                        ->orWhere('Uzvards', 'like', "%{$searchTerm}%")
                        ->orWhere('AtrasanasVieta', 'like', "%{$searchTerm}%");
                })
                ->get()
        );
    }

    public function updateAppointment(Pieraksts $appointment)
    {
        $data = request()->validate([
            "Tema" => "sometimes|string|max:100",
            "Datums" => "sometimes|date",
            "Laiks" => "sometimes|date_format:H:i",
        ]);
        $appointment->update($data);
        return response()->json($appointment);
    }

}
