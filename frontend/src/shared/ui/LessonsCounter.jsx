export default function LessonsCounter({timePeriod}) {
    if(timePeriod === "today"){
        return(
            <div className="flex flex-row items-center justify-center w-1/5 gap-[50%] pb-5 pt-5 bg-white rounded-2xl">
                <p className={`text-3xl w-1/4`}>Lessons today</p>
                <p className={`text-6xl font-[Orbitron]`}>0</p>
            </div>
        )
    }
    else {
        return(
            <div className="flex flex-row items-center justify-center w-1/5 gap-[40%] pb-6 pt-6 bg-white rounded-2xl">
                <p className={`text-3xl  w-1/3`}>Lessons this week</p>
                <p className={`text-6xl font-[Orbitron]`}>0</p>
            </div>
        )
    }
}