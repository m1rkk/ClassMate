export default function DayComponent({dayNum,onClick,selected = false}){
    return(
        <button
            type="button"
            className={`flex h-8 w-8 items-center justify-center rounded-full border-none text-sm text-black sm:h-9 sm:w-9 sm:text-base xl:h-[60%] xl:w-1/3 ${selected ? "bg-white/20 text-white" : "bg-white"}`}
            onClick={onClick}
        >
            {dayNum}
        </button>
    )
}
