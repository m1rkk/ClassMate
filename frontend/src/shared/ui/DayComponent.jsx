export default function DayComponent({dayNum,onClick,selected = false}){
    return(
        <div className={`w-1/3 h-[60%] rounded-full flex flex-row justify-center items-center text-black ${selected ? "bg-white/20 " : "bg-white"}`} onClick={onClick}>{dayNum}</div>
    )
}
