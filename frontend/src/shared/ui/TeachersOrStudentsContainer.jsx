import {getAllTeachers, searchForTeacher,getTeachersStudents,studentSearch} from "@/shared/Api";
import {useState, useEffect} from "react";
import PersonCatalogObject from "@/shared/ui/PersonCatalogObject";
import GlassInput from "@/shared/ui/GlassInput";

export default function TeachersOrStudentsContainer() {
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const isStudent = localStorage.getItem("role") === "student";

    useEffect(() => {
        if (isStudent) {
            let isMounted = true;
            const loadTeachers = async () => {
                try {
                    setLoading(true);
                    const term = searchTerm?.trim();
                    console.log(term);
                    const teachers = term ? await searchForTeacher(term) : await getAllTeachers();

                    if (isMounted) {
                        setTeachers(teachers);
                    }
                } catch (e) {
                    if (isMounted) {
                        console.log(e);
                        setTeachers([]);
                    }
                } finally {
                    if (isMounted) {
                        setLoading(false);
                    }
                }
            };

            loadTeachers();
            return () => {
                isMounted = false;
            };
        }else {
            let isMounted = true;
            const loadStudents = async () => {
                try {
                    setLoading(true);
                    const term = searchTerm?.trim();
                    console.log(term);
                    const students = term ? await studentSearch(term) : await getTeachersStudents();

                    if (isMounted) {
                        setStudents(students);
                    }
                } catch (e) {
                    if (isMounted) {
                        console.log(e);
                        setStudents([]);
                    }
                } finally {
                    if (isMounted) {
                        setLoading(false);
                    }
                }
            };

            loadStudents();
            return () => {
                isMounted = false;
            };
        }


    }, [searchTerm, isStudent]);

    if (isStudent) {
        return (
            <div className="w-full flex flex-col items-center justify-start gap-8 h-full">
                <div className="flex flex-row items-center justify-start w-[85%] h-[6%]">
                    <GlassInput placeholder="Search teachers..." onChange={(e) => {setSearchTerm(e.target.value)}} width={"60%"} height={"100%"}/>
                </div>
                {loading && (
                    <div className={`w-[85%] h-full grid grid-cols-5 gap-[10%]`}>
                        {[...Array(8)].map((_, idx) => (
                            <div key={idx} className="w-full h-[90%] rounded-2xl bg-white/20 animate-pulse" />
                        ))}
                    </div>
                )}
                {!loading &&  (
                        <div className={`w-[85%] h-full grid grid-cols-5 gap-[10%]`}>
                            {
                                teachers.map((teacher) => (
                                    <PersonCatalogObject key={teacher.SkolotajaId} rating={teacher.Reitings} name={teacher.lietotajs.Vards} surname={teacher.lietotajs.Uzvards} city={teacher.lietotajs.AtrasanasVieta}/>
                                ))
                            }
                        </div>
                )}
            </div>
        )
    }else {
        return (
            <div className="w-full flex flex-col items-center justify-start gap-8 h-full">
                <div className="flex flex-row items-center justify-start w-[85%] h-[6%]">
                    <GlassInput placeholder="Search your students..." onChange={(e) => {setSearchTerm(e.target.value)}} width={"60%"} height={"100%"}/>
                </div>
                {loading && (
                    <div className={`w-[85%] h-full grid grid-cols-5 gap-[10%]`}>
                        {[...Array(8)].map((_, idx) => (
                            <div key={idx} className="w-full h-[90%] rounded-2xl bg-white/20 animate-pulse" />
                        ))}
                    </div>
                )}
                {!loading &&  (
                    <div className={`w-[85%] h-full grid grid-cols-5 gap-[10%]`}>
                        {
                            students.map((student) => (
                                <PersonCatalogObject key={student.StudentuId} name={student.lietotajs.Vards} surname={student.lietotajs.Uzvards} city={student.lietotajs.AtrasanasVieta}/>
                            ))
                        }
                    </div>

                )}
            </div>
        )
    }

    return null;
}
