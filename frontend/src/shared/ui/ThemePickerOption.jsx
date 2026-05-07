export default function ThemePickerOption({themeValue,onClick,selected = false}){
    return(
        <button
            type="button"
            className={`w-full rounded-2xl border-none px-4 pt-2 pb-2 text-center font-[Orbitron] md:w-auto md:min-w-[30%] xl:min-w-[20%] ${selected ? "bg-white/20 text-white" : "bg-white text-black"}`}
            onClick={onClick}
        >
            {themeValue}
        </button>
    )
}
