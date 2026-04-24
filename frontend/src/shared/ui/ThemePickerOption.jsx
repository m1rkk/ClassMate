export default function ThemePickerOption({themeValue,onClick,selected = false}){
    return(
        <div className={`flex-none min-w-[20%] pt-2 pb-2 rounded-2xl bg-white text-black text-center font-[Orbitron] ${selected ? "bg-white/20 " : "bg-white"}`} onClick={onClick}>{themeValue}</div>
    )
}