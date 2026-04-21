import {getStudentLessonsCountToday,getStudentLessonsCountThisWeek,getTeacherLessonsCountThisWeek,getTeacherLessonsCountToday} from "@/shared/Api";
import {useEffect, useState} from "react";

export default function LessonsCounter({timePeriod}) {
    const [isLoading, setIsLoading] = useState(true);
    const [lessonsCountToday, setLessonsCountToday] = useState(0);
    const [lessonsCountThisWeek, setLessonsCountThisWeek] = useState(0);
    const [error, setError] = useState("");
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
                        setError("Failed to load lessons count");
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
                        setError("Failed to load lessons count");
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
    }, []);

    if(timePeriod === "today"){
        return(
            <div className="flex flex-row items-center justify-center w-1/5 gap-[50%] pb-5 pt-5 bg-white rounded-2xl">
                <p className={`text-3xl w-1/4`}>Lessons today</p>
                <div className={`text-6xl font-[Orbitron] min-w-18 flex justify-center`}>
                    {isLoading && (
                        <div className="h-12 w-16 rounded-md bg-[#2A2A2A] animate-pulse" />)}
                    {!isLoading && error && <p className="text-red-300">{error}</p>}
                    {!isLoading && lessonsCountToday}
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="flex flex-row items-center justify-center w-1/5 gap-[40%] pb-6 pt-6 bg-white rounded-2xl">
                <p className={`text-3xl  w-1/3`}>Lessons this week</p>
                <div className={`text-6xl font-[Orbitron] min-w-18 flex justify-center`}>
                    {isLoading && (
                        <div className="h-12 w-16 rounded-md bg-[#2A2A2A] animate-pulse" />)}
                    {!isLoading && error && <p className="text-red-300">{error}</p>}
                    {!isLoading && lessonsCountThisWeek}
                </div>
            </div>
        )
    }
}