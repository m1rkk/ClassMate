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
        <div className="flex min-h-[18rem] w-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-white bg-transparent px-2 pb-3 text-white">
            <div className="mt-2 flex w-full flex-row items-center justify-center gap-3">
                <button onClick={goPrevMonth}>{"<"}</button>
                <p>{monthNames[month]} {year}</p>
                <button onClick={goNextMonth}>{">"}</button>
            </div>
            <div className="grid h-full w-full grid-cols-7 gap-1 place-items-center sm:gap-2">
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
