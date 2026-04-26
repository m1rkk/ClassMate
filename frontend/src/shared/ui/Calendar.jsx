import DayComponent from "./DayComponent";

export default function Calendar({month,setMonth,year,setYear,setDay, day}){
    const monthNames = ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs",
        "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
    ];

    const goNextMonth = () => {
        const newMonthIndex = month + 1;
        if (newMonthIndex === monthNames.length) {
            setMonth(0);
            setYear(prev => prev + 1);
        } else {
            setMonth(newMonthIndex);
        }
    };

    const goPrevMonth = () => {
        const newMonthIndex = month - 1;
        if (newMonthIndex === -1) {
            setMonth(monthNames.length - 1);
            setYear(prev => prev - 1);
        }
        else {
            setMonth(newMonthIndex);
        }
    }

    const getDaysInMonth = (year, monthIndex) => {
        return new Date(year, monthIndex + 1, 0).getDate();
    };

    return(
        <div className={`flex flex-col items-center justify-center w-full h-[60%] gap-4 bg-transparent border-white border-2 rounded-2xl text-white`}>
            <div className={`flex flex-row items-center justify-center w-full gap-3 mt-2`}>
                <button onClick={goPrevMonth}>{"<"}</button>
                <p>{monthNames[month]} {year}</p>
                <button onClick={goNextMonth}>{">"}</button>
            </div>
            <div className={`grid grid-cols-7 w-full h-full gap-1 place-items-center`}>
                {[...Array(getDaysInMonth(year, month))].map((_, idx) => (
                    <DayComponent
                        key={idx}
                        dayNum={idx + 1}
                        onClick={() => setDay(idx + 1)}
                        selected={day === idx + 1}
                    />
                ))}
            </div>
        </div>
    )
}
