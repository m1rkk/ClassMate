import { useEffect, useState } from "react";
import { deleteLesson, getStudentLessons, getStudentLessonsWithFilter, getTeachersLessons, getTeacherLessonsWithFilter } from "@/shared/Api";
import Lesson from "@/shared/ui/Lesson";
import DashboardFilter from "@/shared/ui/DashboardFilter";

export default function LessonsContainer() {
    const [lessons, setLessons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [deletingIds, setDeletingIds] = useState([]);
    const [filter, setFilter] = useState('all');

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

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    }

    return(
        <div className={`flex flex-row items-center justify-around w-full h-full p-4`}>
            <div className={`flex flex-col items-start justify-start gap-[2%] w-[70%] h-full overflow-y-scroll`}>
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

                {!isLoading && lessons.map((lesson)=>(
                    <Lesson
                        key={lesson.PierakstaId}
                        id={lesson.PierakstaId}
                        price={lesson.Maksa}
                        date={lesson.Datums}
                        time={lesson.Laiks}
                        theme={lesson.Tema}
                        onDelete={handleDelete}
                        isDeleting={deletingIds.includes(lesson.PierakstaId)}
                    />
                ))}
            </div>
            <div className={`flex flex-col items-center justify-start w-[20%] h-full gap-[2%] text-base`}>
                <DashboardFilter
                    period="mēnesis"
                    onClick={() => handleFilterChange('month')}
                    width="80%"
                    active={filter === 'month'}
                />
                <div className={`flex flex-row items-center justify-center w-full gap-[2%]`}>
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
    )
}
