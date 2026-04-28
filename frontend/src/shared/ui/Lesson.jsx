import bin from "@/assets/imgs/mingcute_delete-line.png"
import editImg from "@/assets/imgs/uil_pen.png"

export default function Lesson({id, theme, date, time, price, onDelete, isDeleting = false, setIsUpdateExpanded, setLessonId}) {
    return (
        <div className="flex flex-row items-center justify-start w-full gap-3">
            <div id={id} className="flex flex-row items-center justify-between bg-white text-black w-full p-3 rounded-2xl gap-2">
                <div>
                    <p>{theme}</p>
                    <p>{date} {time}</p>
                </div>
                <p>{price}</p>
            </div>
            <button className={`bg-white border-none rounded-2xl w-[5%] flex items-center justify-center p-2`} onClick={() => {
                setIsUpdateExpanded(true);
                setLessonId(id);
                }
            }><img src={editImg} alt="" className="w-[90%]"/></button>
            <button
                className={`bg-white border-none rounded-2xl w-[5%] flex items-center justify-center p-2 ${isDeleting ? "opacity-60 cursor-not-allowed" : ""}`}
                onClick={() => onDelete?.(id)}
                disabled={isDeleting}
            >
                <img src={bin} alt="dzēst stundu" className="w-[90%]"/>
            </button>
        </div>
    )
}
