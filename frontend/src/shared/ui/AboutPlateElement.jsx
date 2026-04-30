export default function AboutPlateElement({text, img}) {
    return(
    <div className="flex h-auto w-full flex-col items-center justify-center lg:h-[27%] lg:w-[15%]">
        <div className={`w-full h-px bg-white/30 rounded-xl`}></div>
        <div className="flex w-full items-center justify-between gap-3 rounded-xl py-3 sm:py-4 lg:h-full lg:py-0">
            <img src={img} alt="" className="mr-2 w-8 shrink-0 sm:w-10 lg:mr-4 lg:w-[30%]"/>
            <p className="w-full text-base font-bold text-white/63 sm:text-lg lg:text-xl">{text}</p>
        </div>
        <div className={`w-full h-px bg-white/30 rounded-xl`}></div>
    </div>
    )
}
