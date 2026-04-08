import bin from "@/assets/imgs/mingcute_delete-line.png"
import editImg from "@/assets/imgs/uil_pen.png"

export default function Lesson({id, theme, date,time,price}) {
    return (
        <div className="flex flex-row items-center justify-start w-[60%] gap-3">
            <div id={id} className="flex flex-row items-center justify-between bg-white text-black w-[85%] p-3 rounded-2xl gap-2">
                <div>
                    <p>{theme}</p>
                    <p>{date} {time}</p>
                </div>
                <p>{price}</p>
            </div>
            <button className={`bg-white border-none rounded-2xl w-[5%] flex items-center justify-center p-2`}><img src={editImg} alt="" /></button>
            <button className={`bg-white border-none rounded-2xl w-[5%] flex items-center justify-center p-2`}><img src={bin} alt=""/></button>
        </div>
    )
}