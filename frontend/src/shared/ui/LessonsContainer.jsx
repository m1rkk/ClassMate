import { useEffect, useState } from "react";
import { deleteLesson, getStudentByPerson, getStudentLessons, me } from "@/shared/Api";
import Lesson from "@/shared/ui/Lesson";


export default function LessonsContainer() {
    const [lessons, setLessons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [deletingIds, setDeletingIds] = useState([]); //useState hranenie dannih

    useEffect(() => {
        let isMounted = true;

        const loadLessons = async () => {
            try {
                setIsLoading(true);
                setError("");

                const user = await me();
                const userId = user?.LietotajaId;
                if (!userId) {
                    throw new Error("User id not found");
                }

                const student = await getStudentByPerson(userId);
                const studentId = student?.StudentuId;
                if (!studentId) {
                    throw new Error("Student id not found");
                }

                const data = await getStudentLessons(studentId);
                if (isMounted) {
                    setLessons(Array.isArray(data) ? data : []);
                }
            } catch (e) {
                if (isMounted) {
                    setError("Failed to load lessons");
                    setLessons([]);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadLessons();

        return () => {
            isMounted = false;
        };
    }, []);

    const handleDelete = async (lessonId) => {
        const prevLessons = lessons;

        setDeletingIds((prev) => [...prev, lessonId]);
        setLessons((prev) => prev.filter((lesson) => lesson.PierakstaId !== lessonId));  //prohodit filtrm po kazdomu lesson v lessons i uberaet tot gde sovpal lessonId
        try {
            await deleteLesson(lessonId);
        } catch (e) {
            setLessons(prevLessons); //esli oshibka t otkat na predidiushij lesson
            setError("Failed to delete lesson");
        } finally {
            setDeletingIds((prev) => prev.filter((id) => id !== lessonId));
        }
    };

    return(
        <div className={`flex flex-col items-start justify-start gap-[2%] w-[60%] h-full overflow-y-scroll`}>
            {isLoading && (
                <div className="w-full flex flex-col gap-3">
                    {[...Array(4)].map((_, idx) => (
                        <div key={idx} className="h-16 w-full rounded-2xl bg-white/20 animate-pulse" />
                    ))}
                </div>
            )}

            {!isLoading && error && <p className="text-red-300">{error}</p>}

            {!isLoading && !error && lessons.length === 0 && (
                <p className="text-white/80">No lessons yet</p>
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
    )
}