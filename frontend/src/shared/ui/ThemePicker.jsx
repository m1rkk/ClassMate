import ThemePickerOption from "./ThemePickerOption";

export default function ThemePicker({theme, setTheme}) {
    const mathTheme = "Matem\u0101tika";
    const programmingTheme = "Programm\u0113\u0161ana";

    return(
        <div className="flex w-full flex-col items-stretch justify-center gap-3 md:w-[85%] md:flex-row md:flex-wrap md:items-center xl:w-[90%]">
            <ThemePickerOption themeValue={mathTheme} onClick={() => {
                setTheme(mathTheme)
            }
            } selected={mathTheme === theme}/>
            <ThemePickerOption themeValue={"Fizika"} onClick={() => {
                setTheme("Fizika")
            }
            } selected={"Fizika" === theme}/>
            <ThemePickerOption themeValue={programmingTheme} onClick={() => {
                setTheme(programmingTheme)
            }
            } selected={programmingTheme === theme}/>
        </div>
    )
}
