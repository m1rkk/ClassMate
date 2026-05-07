export default function TimePickerOption({timeValue,onClick,selected = false}){
    return(
        <button
            type="button"
            className={`min-w-[calc(50%-0.375rem)] rounded-2xl border-none pt-2 pb-2 text-center font-[Orbitron] sm:min-w-[20%] ${selected ? "bg-white/20 text-white" : "bg-white text-black"}`}
            onClick={onClick}
        >
            {timeValue}
        </button>
    )
}
