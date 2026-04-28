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
            className="transition-all duration-500 ease-out "
            width={isExpanded ? "min(90%)" : "10vw"}
            height={isExpanded ? "85%" : "30vh"}
        > {!isExpanded && (
            <div className={`w-full h-full flex flex-col items-center justify-center ${isExpanded ? "gap-8" : "gap-5"}`}>
            <img src={profilePic} alt="" className={isExpanded ? "w-[20%] min-w-[130px]" : "w-[40%]"} />
            <div className="flex flex-col items-center justify-center w-full">
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
            {isExpanded && localStorage.getItem("role") === "student" && (
                <div className={`w-full h-full flex flex-row items-center justify-content-around`}>
                    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
                        <img src={profilePic} alt="" className="w-[20%] min-w-32.5" />
                        <div className="flex flex-col items-center justify-center w-full">
                            <p className="text-white text-2xl">{name} {surname}</p>
                            <p className="text-white">{city}</p>
                            <div className="flex flex-row items-center justify-center w-full">
                                ({[...Array(rating)].map((_, idx) => (
                                <p key={idx}>⭐</p>
                            ))})
                            </div>
                        </div>
                    </div>
                    <div className={`w-full h-full flex flex-col items-center justify-start mt-8 gap-4`}>
                        <CloseBtn OnClick={() => closeExpand()}/>
                        <Calendar month={month} year={year} day={day} setMonth={setMonth} setYear={setYear} setDay={setDay}/>
                        <p className="text-white text-sm mt-2">Izvēlētais datums: {selectedDate.toLocaleDateString("lv-LV")}</p>
                        <TimePicker time={time} setTime={setTime}/>
                        <ThemePicker theme={theme} setTheme={setTheme}/>
                        <BookBtn price={"10"} date={formattedDate} time={time} theme={theme} teacherId={personId} studentId={localStorage.getItem("studentId")}/>
                    </div>
                </div>
            )}
            {isExpanded && localStorage.getItem("role") === "teacher" && (
                <div className={`w-full h-full flex flex-col items-center justify-content-around pt-2 pr-2`}>
                    <CloseBtn OnClick={() => closeExpand()}/>
                    <div className="w-full flex flex-row items-center justify-end gap-2">
                        <div className="flex flex-col items-end justify-center text-right w-[10%]">
                            <p className="text-white text-2xl">{name} {surname}</p>
                            <p className="text-white">{city}</p>
                        </div>
                        <img src={profilePic} alt="" className="w-[6%]" />
                    </div>
                    {!addingExpand && (
                        <div className={`w-full h-full flex flex-col items-center justify-start mt-8 gap-10`}>
                            <StudentNotes studentId={personId}/>
                            <MakeNoteBtn addingExpand={addingExpand} setAddingExpand={setAddingExpand} text={""} date={""} teacherId={localStorage.getItem("teacherId")} studentId={personId} />
                        </div>
                    )}
                    {addingExpand && (
                        <div className={`w-full h-full flex flex-col items-center justify-start mt-8 gap-4`}>
                            <CloseBtn OnClick={() => setAddingExpand(false)}/>
                            <Calendar month={month} year={year} day={day} setMonth={setMonth} setYear={setYear} setDay={setDay}/>
                            <input type={"text"} value={noteText} className={`bg-transparent border-2 border-white rounded-lg text-white w-full h-15 p-1`} onChange={(e) => setNoteText(e.target.value)}/>
                            <MakeNoteBtn addingExpand={addingExpand} setAddingExpand={setAddingExpand} text={noteText} date={selectedDate} teacherId={localStorage.getItem("teacherId")} studentId={personId} />
                        </div>

                    )}
                </div>
            )}

        </GlassSurface>
    );
}
