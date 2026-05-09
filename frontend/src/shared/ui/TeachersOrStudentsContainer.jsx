import { getAllTeachers, searchForTeacher, getTeachersStudents, studentSearch } from "@/shared/Api";
import { useState, useEffect } from "react";
import PersonCatalogObject from "@/shared/ui/PersonCatalogObject";
import GlassInput from "@/shared/ui/GlassInput";

export default function TeachersOrStudentsContainer() {
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPersonId, setSelectedPersonId] = useState(null);
    const isStudent = localStorage.getItem("role") === "student";

    useEffect(() => {
        if (isStudent) {
            let isMounted = true;
            const loadTeachers = async () => {
                try {
                    setLoading(true);
                    const term = searchTerm?.trim();
                    const fetchedTeachers = term ? await searchForTeacher(term) : await getAllTeachers();

                    if (isMounted) {
                        setTeachers(fetchedTeachers);
                        setSelectedPersonId(null);
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
        }

        let isMounted = true;
        const loadStudents = async () => {
            try {
                setLoading(true);
                const term = searchTerm?.trim();
                const fetchedStudents = term ? await studentSearch(term) : await getTeachersStudents();

                if (isMounted) {
                    setStudents(fetchedStudents);
                    setSelectedPersonId(null);
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
    }, [searchTerm, isStudent]);

    const cards = isStudent
        ? teachers.map((teacher) => ({
              id: teacher.SkolotajaId,
              rating: teacher.Reitings,
              name: teacher.lietotajs.Vards,
              surname: teacher.lietotajs.Uzvards,
              city: teacher.lietotajs.AtrasanasVieta,
          }))
        : students.map((student) => ({
              id: student.StudentuId,
              rating: 0,
              name: student.lietotajs.Vards,
              surname: student.lietotajs.Uzvards,
              city: student.lietotajs.AtrasanasVieta,
          }));

    const visibleCards = selectedPersonId === null ? cards : cards.filter((person) => person.id === selectedPersonId);

    return (
        <div className="flex h-full w-full flex-col items-center justify-start gap-8 max-md:h-auto max-md:gap-4">
            <div className="flex h-[6%] w-[85%] flex-row items-center justify-start max-md:h-12 max-md:w-full">
                <GlassInput
                    placeholder={isStudent ? "Meklēt skolotājus..." : "Meklēt savus skolēnus..."}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                    width={"60%"}
                    height={"100%"}
                    className="max-md:!h-12 max-md:!w-full"
                />
            </div>
            {loading && (
                <div className="grid h-full w-[85%] grid-cols-5 gap-[10%] max-md:h-auto max-md:w-full max-md:grid-cols-1 max-md:gap-4">
                    {[...Array(8)].map((_, idx) => (
                        <div key={idx} className="h-[90%] w-full animate-pulse rounded-2xl bg-white/20 max-md:h-[18rem]" />
                    ))}
                </div>
            )}
            {!loading && (
                <div
                    className={`h-full w-[85%] max-md:h-auto max-md:w-full ${
                        selectedPersonId === null
                            ? "grid grid-cols-5 gap-[10%] max-md:grid-cols-1 max-md:gap-4"
                            : "grid grid-cols-1 place-items-start max-md:place-items-stretch"
                    }`}
                >
                    {visibleCards.map((person) => (
                        <PersonCatalogObject
                            key={person.id}
                            personId={person.id}
                            rating={person.rating}
                            name={person.name}
                            surname={person.surname}
                            city={person.city}
                            isExpanded={selectedPersonId === person.id}
                            onView={(id) => {
                                setSelectedPersonId((prev) => (prev === id ? null : id));
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
