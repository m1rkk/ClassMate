import { useEffect, useState } from "react";
import { deleteLesson, getStudentLessons, getStudentLessonsWithFilter, getTeachersLessons, getTeacherLessonsWithFilter,updateLesson } from "@/shared/Api";
import Lesson from "@/shared/ui/Lesson";
import DashboardFilter from "@/shared/ui/DashboardFilter";
import Calendar from "@/shared/ui/Calendar";
import TimePicker from "@/shared/ui/TimePicker";
import ThemePicker from "@/shared/ui/ThemePicker";
import BookBtn from "@/shared/ui/BookBtn";
import * as React from "react";
import CloseBtn from "@/shared/ui/CloseBtn";
import { ChevronDown } from "lucide-react";

const FILTER_OPTIONS = [
    { value: "month", label: "mēnesis" },
    { value: "inThreeDays", label: "3 dienas" },
    { value: "week", label: "nedēļa" },
    { value: "today", label: "šodien" },
    { value: "all", label: "visas" },
];

export default function LessonsContainer({onLessonUpdate}) {
    const [lessons, setLessons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [deletingIds, setDeletingIds] = useState([]);
    const [filter, setFilter] = useState('all');
    const [isUpdateExpanded, setIsUpdateExpanded] = useState(false);

    const now = new Date();
    const [month, setMonth] = useState(now.getMonth());
    const[year, setYear] = useState(now.getFullYear());
    const [day, setDay] = useState(now.getDate());
    const selectedDate = new Date(year, month, day);
    const formattedDate =
        selectedDate.getFullYear() +
        "-" +
        String(selectedDate.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(selectedDate.getDate()).padStart(2, "0");

    const [time, setTime] = useState("");
    const [theme, setTheme] = useState("");

    const [lessonId, setLessonId] = useState(null);
    const [isEdited, setIsEdited] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);


    useEffect(() => {
        let isMounted = true;
        if(localStorage.getItem("role") === "student"){
            const loadLessons = async () => {
                try {
                    setIsLoading(true);
                    setError("");

                    const studentId = localStorage.getItem('studentId');

                    if (filter === 'all') {
                        const data = await getStudentLessons(studentId);
                        if (isMounted) {
                            setLessons(Array.isArray(data) ? data : []);
                        }
                    }
                    else if (filter === 'month') {
                        const data = await getStudentLessonsWithFilter(studentId,"month");
                        if (isMounted) {
                            setLessons(Array.isArray(data) ? data : []);
                        }
                    }
                    else if (filter === 'week') {
                        const data = await getStudentLessonsWithFilter(studentId,'week');
                        if (isMounted) {
                            setLessons(Array.isArray(data) ? data : []);
                        }
                    }
                    else if (filter === 'inThreeDays') {
                        const data = await getStudentLessonsWithFilter(studentId,'inThreeDays');
                        if (isMounted) {
                            setLessons(Array.isArray(data) ? data : []);
                        }
                    }
                    else if (filter === 'today') {
                        const data = await getStudentLessonsWithFilter(studentId,"day");
                        if (isMounted) {
                            setLessons(Array.isArray(data) ? data : []);
                        }
                    }
                    else {
                        throw new Error("Nederīgs filtrs");
                    }
                } catch (e) {
                    if (isMounted) {
                        setError("Neizdevās ielādēt stundas");
                        setLessons([]);
                    }
                } finally {
                    if (isMounted) {
                        setIsLoading(false);
                    }
                }
            };

            loadLessons();
        }else {
            const loadLessons = async () => {
                try {
                    setIsLoading(true);
                    setError("");

                    const teacherId = localStorage.getItem('teacherId');

                    if (filter === 'all') {
                        const data = await getTeachersLessons(teacherId);
                        if (isMounted) {
                            setLessons(Array.isArray(data) ? data : []);
                        }
                    }
                    else if (filter === 'month') {
                        const data = await getTeacherLessonsWithFilter(teacherId,"month");
                        if (isMounted) {
                            setLessons(Array.isArray(data) ? data : []);
                        }
                    }
                    else if (filter === 'week') {
                        const data = await getTeacherLessonsWithFilter(teacherId,'week');
                        if (isMounted) {
                            setLessons(Array.isArray(data) ? data : []);
                        }
                    }
                    else if (filter === 'inThreeDays') {
                        const data = await getTeacherLessonsWithFilter(teacherId,'inThreeDays');
                        if (isMounted) {
                            setLessons(Array.isArray(data) ? data : []);
                        }
                    }
                    else if (filter === 'today') {
                        const data = await getTeacherLessonsWithFilter(teacherId,"day");
                        if (isMounted) {
                            setLessons(Array.isArray(data) ? data : []);
                        }
                    }
                    else {
                        throw new Error("Nederīgs filtrs");
                    }
                } catch (e) {
                    if (isMounted) {
                        setError("Neizdevās ielādēt stundas");
                        setLessons([]);
                    }
                } finally {
                    if (isMounted) {
                        setIsLoading(false);
                    }
                }
            };

            loadLessons();
        }

        return () => {
            isMounted = false;
        };
    }, [filter]);

    const handleDelete = async (lessonId) => {
        const prevLessons = lessons;

        setDeletingIds((prev) => [...prev, lessonId]);
        setLessons((prev) => prev.filter((lesson) => lesson.PierakstaId !== lessonId));
        try {
            await deleteLesson(lessonId);
        } catch (e) {
            setLessons(prevLessons);
            setError("Neizdevās dzēst stundu");
        } finally {
            setDeletingIds((prev) => prev.filter((id) => id !== lessonId));
        }
    };
    const handleUpdate = async (lessonId, text, date, time) => {
        try {
            setIsUpdating(true);
            setIsEdited(false);
            await updateLesson(lessonId, text, date, time);
            setLessons((prev) => prev.map((lesson) => lesson.PierakstaId === lessonId ? { ...lesson, Tema: text, Datums: date, Laiks: time } : lesson));
            setIsEdited(true);
            onLessonUpdate?.();
            setTimeout(() => {
                setIsUpdateExpanded(false);
                setIsEdited(false);
            }, 1500);
        } catch (e) {
            setError("Neizdevās atjaunināt stundu");
        } finally {
            setIsUpdating(false);
        }
    }

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    }

    return(
        <div className="flex h-full w-full flex-col gap-4 p-3 sm:p-4 xl:flex-row xl:items-start xl:justify-around">
            <div className="order-2 flex min-h-0 w-full flex-1 flex-col items-start justify-start gap-3 overflow-y-auto pr-1 xl:order-1 xl:h-full xl:w-[70%] xl:flex-none xl:gap-[2%]">
                {isLoading && (
                    <div className="w-full flex flex-col gap-3">
                        {[...Array(4)].map((_, idx) => (
                            <div key={idx} className="h-16 w-full rounded-2xl bg-white/20 animate-pulse" />
                        ))}
                    </div>
                )}

                {!isLoading && error && <p className="text-red-300">{error}</p>}

                {!isLoading && !error && lessons.length === 0 && (
                    <p className="text-white/80">Vēl nav stundu</p>
                )}

                {!isLoading && !isUpdateExpanded && lessons.map((lesson)=>(
                    <Lesson
                        key={lesson.PierakstaId}
                        id={lesson.PierakstaId}
                        price={lesson.Maksa}
                        date={lesson.Datums}
                        time={lesson.Laiks}
                        theme={lesson.Tema}
                        setIsUpdateExpanded={setIsUpdateExpanded}
                        setLessonId={setLessonId}
                        onDelete={handleDelete}
                        isDeleting={deletingIds.includes(lesson.PierakstaId)}
                    />
                ))}
                {isUpdateExpanded && (
                    <div className="relative mt-8 flex h-full w-full flex-col items-center justify-start gap-4 xl:w-[80%]">
                        <CloseBtn OnClick={() => setIsUpdateExpanded(false)}/>
                        <Calendar month={month} year={year} day={day} setMonth={setMonth} setYear={setYear} setDay={setDay}/>
                        <p className="mt-2 text-center text-sm text-white">Izvēlētais datums: {selectedDate.toLocaleDateString("lv-LV")}</p>
                        <TimePicker time={time} setTime={setTime}/>
                        <ThemePicker theme={theme} setTheme={setTheme}/>
                        <button
                            className={`flex w-full items-center justify-center rounded-lg bg-white pt-2 pb-2 text-base hover:bg-gray-200 sm:w-[60%] sm:text-lg xl:w-[50%] ${isUpdating ? 'cursor-not-allowed opacity-70' : ''}`}
                            onClick={() => handleUpdate(lessonId, theme, formattedDate, time)}
                            disabled={isUpdating}
                        >
                            {isUpdating ? (
                                <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                            ) : isEdited ? (
                                "Stunda rediģēta"
                            ) : (
                                "Rediģēt stundu"
                            )}
                        </button>
                    </div>
                )}
            </div>
            <div className="order-1 flex w-full flex-col items-stretch justify-start gap-3 text-base xl:order-2 xl:h-full xl:w-[30%]">
                <div className="relative w-full md:hidden">
                    <select
                        aria-label="Filtrēt stundas"
                        value={filter}
                        onChange={(event) => handleFilterChange(event.target.value)}
                        className="w-full appearance-none rounded-full border-none bg-white px-5 py-3 pr-11 text-base text-black outline-none"
                    >
                        {FILTER_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown
                        aria-hidden="true"
                        className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-black"
                    />
                </div>
                <div className="hidden w-full flex-col items-stretch justify-start gap-3 md:flex md:flex-row md:flex-wrap md:items-center xl:h-full xl:flex-col xl:items-center xl:gap-[2%]">
                    <DashboardFilter
                        period="mēnesis"
                        onClick={() => handleFilterChange('month')}
                        width="90%"
                        active={filter === 'month'}
                    />
                    <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap xl:gap-[2%]">
                        <DashboardFilter
                            period="3 dienas"
                            onClick={() => handleFilterChange('inThreeDays')}
                            width="25%"
                            active={filter === 'inThreeDays'}
                        />
                        <DashboardFilter
                            period="nedēļa"
                            onClick={() => handleFilterChange('week')}
                            width="35%"
                            active={filter === 'week'}
                        />
                        <DashboardFilter
                            period="šodien"
                            onClick={() => handleFilterChange('today')}
                            width="15%"
                            active={filter === 'today'}
                        />
                    </div>
                    <DashboardFilter
                        period="visas"
                        onClick={() => handleFilterChange('all')}
                        width="20%"
                        active={filter === 'all'}
                    />
                </div>
            </div>
        </div>
    )
}
