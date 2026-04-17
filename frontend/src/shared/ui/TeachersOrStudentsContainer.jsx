import { getAllTeachers } from "@/shared/Api";
import {useState, useEffect} from "react";
import PersonCatalogObject from "@/shared/ui/PersonCatalogObject";

export default function TeachersOrStudentsContainer() {
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    if (localStorage.getItem("role") === "student") {
        useEffect(() => {
            let isMounted = true;
            const loadTeachers = async () => {
                try {
                    setLoading(true);
                    const teachers = await getAllTeachers();
                    if(isMounted){
                        setTeachers(teachers);
                    }
                }catch (e) {
                    if(isMounted){
                        console.log(e);
                        setLoading(false);
                        setTeachers([])
                    }
                }finally {
                    if(isMounted){
                        setLoading(false);
                    }
                }
            }
            loadTeachers();
            return () => {
                isMounted = false;
            }
        },[])

        return (
            <div className="w-[60%] h-full">
                {loading && (
                    <div className={`w-full h-[50%] grid grid-cols-4`}>
                        {[...Array(8)].map((_, idx) => (
                            <div key={idx} className="w-[60%] h-[60%] rounded-2xl bg-white/20 animate-pulse" />
                        ))}
                    </div>
                )}
                {!loading &&  (
                    <div className={`w-full h-[62%] grid grid-cols-4`}>
                        {
                            teachers.map((teacher) => (
                                <PersonCatalogObject key={teacher.SkolotajaId} rating={teacher.Reitings} name={teacher.lietotajs.Vards} surname={teacher.lietotajs.Uzvards} city={teacher.lietotajs.AtrasanasVieta}/>
                            ))
                        }
                    </div>

                )}
            </div>
        )
    }

}
