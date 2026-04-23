"use client"
import * as React from "react"
import GlassSurface from "@/components/ui/GlassSurface";
import profilePic from "@/assets/imgs/profilePic.png";
import Calendar from "@/shared/ui/Calendar";
import {useState} from "react";
import TimePicker from "@/shared/ui/TimePicker";
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

    const [time, setTime] = useState("");

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
            className="transition-all duration-500 ease-out"
            width={isExpanded ? "min(90%)" : "10vw"}
            height={isExpanded ? "50vh" : "30vh"}
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
                {isExpanded ? "Close" : "View"}
            </button>
        </div>)
            }
            {isExpanded && (
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
                    <div className={`w-full h-full flex flex-col items-center justify-start mt-8 gap-3`}>
                    <Calendar month={month} year={year} day={day} setMonth={setMonth} setYear={setYear} setDay={setDay}/>
                    <p className="text-white text-sm mt-2">Selected date: {selectedDate.toLocaleDateString("en-US")}</p>
                    <TimePicker time={time} setTime={setTime}/>
                    </div>
                </div>
            )}

        </GlassSurface>
    );
}
