import {useState} from "react";
import TimePickerOption from "./TimePickerOption";
export default function TimePicker({time, setTime}) {

    return(
        <div className="flex flex-row flex-wrap items-center justify-center w-[70%] gap-4">
            <TimePickerOption timeValue={"18:00"} onClick={() => {
                    setTime("18:00")
                }
            } selected={"18:00" === time}/>
            <TimePickerOption timeValue={"19:00"} onClick={() => {
                setTime("19:00")
            }
            } selected={"19:00" === time}/>
            <TimePickerOption timeValue={"20:00"} onClick={() => {
                setTime("20:00")
            }
            } selected={"20:00" === time}/>
            <TimePickerOption timeValue={"21:00"} onClick={() => {
                setTime("21:00")
            }
            } selected={"21:00" === time}/>
            <TimePickerOption timeValue={"22:00"} onClick={() => {
                setTime("22:00")
            }
            } selected={"22:00" === time}/>
            <TimePickerOption timeValue={"23:00"} onClick={() => {
                setTime("23:00")
            }
            } selected={"23:00" === time}/>
        </div>
    )
}
