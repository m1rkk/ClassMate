import {useState} from "react";
import ThemePickerOption from "./ThemePickerOption";
export default function ThemePicker({theme, setTheme}) {

    return(
        <div className="flex flex-row flex-wrap items-center justify-center w-[70%] gap-4">
            <ThemePickerOption themeValue={"Mathematics"} onClick={() => {
                setTheme("Mathematics")
            }
            } selected={"Mathematics" === theme}/>
            <ThemePickerOption themeValue={"Physics"} onClick={() => {
                setTheme("Physics")
            }
            } selected={"Physics" === theme}/>
            <ThemePickerOption themeValue={"Programming"} onClick={() => {
                setTheme("Programming")
            }
            } selected={"Programming" === theme}/>
        </div>
    )
}