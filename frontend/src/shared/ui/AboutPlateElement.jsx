

export default function AboutPlateElement({text, img}) {
    return(
    <div className={`w-[15%] h-[27%] flex flex-col items-center justify-center`}>
        <div className={`w-full h-px bg-white/30 rounded-xl`}></div>
        <div className={`w-full h-full flex flex-row justify-between items-center rounded-xl`}>
            <img src={img} alt="" className={`w-[30%] mr-4`}/>
            <p className={`text-white/63 text-xl font-bold w-full`}>{text}</p>
        </div>
        <div className={`w-full h-px bg-white/30 rounded-xl`}></div>
    </div>
    )
}