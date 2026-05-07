import {getStudentLessonsCountToday,getStudentLessonsCountThisWeek,getTeacherLessonsCountThisWeek,getTeacherLessonsCountToday} from "@/shared/Api";
import {useEffect, useState} from "react";

export default function LessonsCounter({timePeriod, refreshTrigger}) {
    const [isLoading, setIsLoading] = useState(true);
    const [lessonsCountToday, setLessonsCountToday] = useState(0);
    const [lessonsCountThisWeek, setLessonsCountThisWeek] = useState(0);
    const [error, setError] = useState("");
    const isToday = timePeriod === "today";

    useEffect(() => {
        let isMounted = true;
        if(localStorage.getItem("role") === "student") {
            const loadLessonsCount = async () => {
                try {
                    setIsLoading(true);
                    const countToday = await getStudentLessonsCountToday();
                    const countThisWeek = await getStudentLessonsCountThisWeek();

                    if(isMounted){
                        setLessonsCountToday(countToday);
                        setLessonsCountThisWeek(countThisWeek);
                        setIsLoading(false);
                    }
                }catch (e) {
                    if (isMounted) {
                        setError("Neizdevās ielādēt stundu skaitu");
                    }
                } finally {
                    if (isMounted) {
                        setIsLoading(false);
                    }
                }
            }
            loadLessonsCount();
        }else {
            const loadLessonsCount = async () => {
                try {
                    setIsLoading(true);
                    const countToday = await getTeacherLessonsCountToday();
                    const countThisWeek = await getTeacherLessonsCountThisWeek();

                    if(isMounted){
                        setLessonsCountToday(countToday);
                        setLessonsCountThisWeek(countThisWeek);
                        setIsLoading(false);
                    }
                }catch (e) {
                    if (isMounted) {
                        setError("Neizdevās ielādēt stundu skaitu");
                    }
                } finally {
                    if (isMounted) {
                        setIsLoading(false);
                    }
                }
            }
            loadLessonsCount();
        }

        return () => {
            isMounted = false;
        }
    }, [refreshTrigger]);

    const label = isToday ? "Stundas šodien" : "Stundas šonedēļ";
    const count = isToday ? lessonsCountToday : lessonsCountThisWeek;
    const labelWidthClass = isToday ? "xl:w-1/4" : "xl:w-1/3";
    const desktopGapClass = isToday ? "xl:gap-[50%] xl:pb-5 xl:pt-5" : "xl:gap-[40%] xl:pb-6 xl:pt-6";

    return(
        <div className={`flex w-full flex-row items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4 sm:flex-row sm:items-center xl:w-1/5 xl:flex-row xl:items-center xl:justify-center ${desktopGapClass}`}>
            <p className={`w-full text-2xl sm:max-w-[12rem] xl:text-3xl ${labelWidthClass}`}>{label}</p>
            <div className="flex min-w-18 justify-center self-end text-5xl font-[Orbitron] sm:self-auto xl:text-6xl">
                {isLoading && (
                    <div className="h-12 w-16 rounded-md bg-[#2A2A2A] animate-pulse" />)}
                {!isLoading && error && <p className="text-right text-base text-red-300 xl:text-lg">{error}</p>}
                {!isLoading && !error && count}
            </div>
        </div>
    )
}
