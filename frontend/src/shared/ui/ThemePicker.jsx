import {useState} from "react";
import ThemePickerOption from "./ThemePickerOption";

export default function ThemePicker({theme, setTheme}) {

    return(
        <div className="flex flex-row flex-wrap items-center justify-center w-[70%] gap-4">
            <ThemePickerOption themeValue={"Matemātika"} onClick={() => {
                setTheme("Matemātika")
            }
            } selected={"Matemātika" === theme}/>
            <ThemePickerOption themeValue={"Fizika"} onClick={() => {
                setTheme("Fizika")
            }
            } selected={"Fizika" === theme}/>
            <ThemePickerOption themeValue={"Programmēšana"} onClick={() => {
                setTheme("Programmēšana")
            }
            } selected={"Programmēšana" === theme}/>
        </div>
    )
}
