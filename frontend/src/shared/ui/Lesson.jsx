import bin from "@/assets/imgs/mingcute_delete-line.png"
import editImg from "@/assets/imgs/uil_pen.png"

export default function Lesson({id, theme, date, time, price, onDelete, isDeleting = false, setIsUpdateExpanded, setLessonId}) {
    return (
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
            <div id={id} className="flex w-full flex-col gap-2 rounded-2xl bg-white p-3 text-black sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                    <p>{theme}</p>
                    <p>{date} {time}</p>
                </div>
                <p className="shrink-0">{price}</p>
            </div>
            <div className="flex w-full gap-3 sm:w-auto">
                <button className="flex flex-1 items-center justify-center rounded-2xl border-none bg-white p-3 sm:size-15 sm:flex-none" onClick={() => {
                    setIsUpdateExpanded(true);
                    setLessonId(id);
                    }
                }><img src={editImg} alt="" className="w-5 sm:w-[90%]"/></button>
                <button
                    className={`flex flex-1 items-center justify-center rounded-2xl border-none bg-white p-3 sm:size-15 sm:flex-none ${isDeleting ? "opacity-60 cursor-not-allowed" : ""}`}
                    onClick={() => onDelete?.(id)}
                    disabled={isDeleting}
                >
                    <img src={bin} alt="dzēst stundu" className="w-5 sm:w-[90%]"/>
                </button>
            </div>
        </div>
    )
}
