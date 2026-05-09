"use client"
import * as React from "react"
import GlassSurface from "@/components/ui/GlassSurface";
import profilePic from "@/assets/imgs/profilePic.png";
import Calendar from "@/shared/ui/Calendar";
import {useState} from "react";
import TimePicker from "@/shared/ui/TimePicker";
import ThemePicker from "@/shared/ui/ThemePicker";
import BookBtn from "@/shared/ui/BookBtn";
import StudentNotes from "@/shared/ui/StudentNotes";
import MakeNoteBtn from "@/shared/ui/MakeNoteBtn";
import CloseBtn from "@/shared/ui/CloseBtn";

export default function PersonCatalogObject({
    personId,
    name,
    surname,
    rating = 0,
    city,
    isExpanded = false,
    onView,
}) {
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
    const [addingExpand, setAddingExpand] = useState(false);
    const [noteText, setNoteText] = useState("");
    const role = localStorage.getItem("role");

    const closeExpand = () => {
        onView?.(null);
    }
    return (
        <GlassSurface
            displace={1}
            distortionScale={150}
            redOffset={30}
            greenOffset={10}
            blueOffset={20}
            brightness={50}
            opacity={50}
            backgroundOpacity={0.01}
            mixBlendMode="difference"
            className={`transition-all duration-500 ease-out ${
                isExpanded
                    ? "max-md:!h-[calc(100dvh-2rem)] max-md:!w-full"
                    : "max-md:!h-[18rem] max-md:!w-full"
            }`}
            width={isExpanded ? "min(90%)" : "10vw"}
            height={isExpanded ? "85%" : "30vh"}
        > {!isExpanded && (
            <div className={`flex h-full w-full flex-col items-center justify-center ${isExpanded ? "gap-8" : "gap-5 max-md:gap-4"}`}>
            <img src={profilePic} alt="" className={isExpanded ? "w-[20%] min-w-[130px]" : "w-[40%] max-md:w-24"} />
            <div className="flex w-full flex-col items-center justify-center max-md:px-3 max-md:text-center">
                <p className={`text-white ${isExpanded ? "text-2xl" : ""}`}>{name} {surname}</p>
                <p className="text-white">{city}</p>
                {rating === 0 && <p className="text-white"></p>}
                {rating > 0 && (
                    <div className="flex flex-row items-center justify-center w-full">
                        ({[...Array(rating)].map((_, idx) => (
                        <p key={idx}>⭐</p>
                    ))})
                    </div>
                )}
            </div>
            <button
                type="button"
                onClick={() => onView?.(personId)}
                className="bg-white text-black w-[80%] p-2 rounded-lg"
            >
                {isExpanded ? "Aizvērt" : "Atvērt"}
            </button>
        </div>)
            }
            {isExpanded && role === "student" && (
                <div className={`flex h-full w-full flex-row items-center justify-content-around max-md:flex-col max-md:items-stretch max-md:justify-start max-md:gap-4 max-md:overflow-y-auto max-md:px-2 max-md:py-3`}>
                    <div className="flex h-full w-full flex-col items-center justify-center gap-5 max-md:h-auto max-md:flex-none max-md:gap-3">
                        <img src={profilePic} alt="" className="w-[20%] min-w-32.5 max-md:w-24 max-md:min-w-0" />
                        <div className="flex flex-col items-center justify-center w-full">
                            <p className="text-white text-2xl max-md:text-xl">{name} {surname}</p>
                            <p className="text-white">{city}</p>
                            <div className="flex flex-row items-center justify-center w-full">
                                ({[...Array(rating)].map((_, idx) => (
                                <p key={idx}>⭐</p>
                            ))})
                            </div>
                        </div>
                    </div>
                    <div className={`mt-8 flex h-full w-full flex-col items-center justify-start gap-4 max-md:mt-0 max-md:h-auto max-md:flex-none max-md:pb-4`}>
                        <CloseBtn OnClick={() => closeExpand()}/>
                        <Calendar month={month} year={year} day={day} setMonth={setMonth} setYear={setYear} setDay={setDay}/>
                        <p className="text-white text-sm mt-2">Izvēlētais datums: {selectedDate.toLocaleDateString("lv-LV")}</p>
                        <TimePicker time={time} setTime={setTime}/>
                        <ThemePicker theme={theme} setTheme={setTheme}/>
                        <BookBtn price={"10"} date={formattedDate} time={time} theme={theme} teacherId={personId} studentId={localStorage.getItem("studentId")}/>
                    </div>
                </div>
            )}
            {isExpanded && role === "teacher" && (
                <div className={`flex h-full w-full flex-col items-center justify-content-around pt-2 pr-2 max-md:overflow-y-auto max-md:px-2 max-md:pb-4`}>
                    <CloseBtn OnClick={() => closeExpand()}/>
                    <div className="flex w-full flex-row items-center justify-end gap-2 max-md:flex-col-reverse max-md:items-center max-md:justify-center max-md:text-center">
                        <div className="flex w-[10%] flex-col items-end justify-center text-right max-md:w-full max-md:items-center max-md:text-center">
                            <p className="text-white text-2xl max-md:text-xl">{name} {surname}</p>
                            <p className="text-white">{city}</p>
                        </div>
                        <img src={profilePic} alt="" className="w-[6%] max-md:w-20" />
                    </div>
                    {!addingExpand && (
                        <div className={`mt-8 flex h-full w-full flex-col items-center justify-start gap-10 max-md:mt-4 max-md:gap-4`}>
                            <StudentNotes studentId={personId}/>
                            <MakeNoteBtn addingExpand={addingExpand} setAddingExpand={setAddingExpand} text={""} date={""} teacherId={localStorage.getItem("teacherId")} studentId={personId} />
                        </div>
                    )}
                    {addingExpand && (
                        <div className={`mt-8 flex h-full w-full flex-col items-center justify-start gap-4 max-md:mt-4`}>
                            <CloseBtn OnClick={() => setAddingExpand(false)}/>
                            <Calendar month={month} year={year} day={day} setMonth={setMonth} setYear={setYear} setDay={setDay}/>
                            <input type={"text"} value={noteText} className={`h-15 w-full rounded-lg border-2 border-white bg-transparent p-1 text-white max-md:h-12`} onChange={(e) => setNoteText(e.target.value)}/>
                            <MakeNoteBtn addingExpand={addingExpand} setAddingExpand={setAddingExpand} text={noteText} date={selectedDate} teacherId={localStorage.getItem("teacherId")} studentId={personId} />
                        </div>

                    )}
                </div>
            )}

        </GlassSurface>
    );
}
