import { useState, useEffect } from "react";
import {getNotes} from "@/shared/Api";
import * as React from "react";

export default function StudentNotes({studentId}) {
    const [notes, setNotes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const teacherId = localStorage.getItem("teacherId");

    useEffect(() => {
        let isMounted = true;
        const fetchNotes = async () => {

            try {
                setLoading(true);
                setError("");

                const data = await getNotes(studentId, teacherId);
                if (isMounted) {
                    setNotes(data);
                    setLoading(false);
                }
            }
            catch (e) {
                if (isMounted) {
                    setError(e.message);
                    setLoading(false);
                }
            }
            finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }
        fetchNotes();
        return () => {
            isMounted = false;
        }
    },[])

    return (
        <div className="flex h-[60%] w-full flex-col items-start justify-start gap-4 bg-transparent text-white max-md:h-[22rem]">
            Piezīmes:
            <div className={`flex flex-col items-start justify-start w-full h-full gap-4 bg-transparent text-white overflow-y-auto`}>
                {isLoading && (
                    <div className="w-full flex flex-col gap-3">
                        {[...Array(4)].map((_, idx) => (
                            <div key={idx} className="h-12 w-full rounded-2xl bg-white/20 animate-pulse" />
                        ))}
                    </div>
                )}
                {!isLoading &&
                    notes.map((note)=>(
                        <div key={`${note.Datums}-${note.Teksts}`} className={`flex h-[14%] w-[95%] items-center justify-between rounded-lg bg-white p-2 max-md:h-auto max-md:flex-col max-md:items-start max-md:gap-1`}>
                            <p className={`text-black`}>{note.Teksts}</p>
                            <p className={`text-black`}>{note.Datums}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
