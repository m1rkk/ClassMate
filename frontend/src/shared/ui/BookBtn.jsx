import {bookLesson} from "@/shared/Api";
import {useState} from "react";

export default function BookBtn({price, date, time, theme, teacherId, studentId}) {
    const [isLoading, setIsLoading] = useState(false);
    const [isBooked, setIsBooked] = useState(false);

    const bookLessonHandler = async () => {
        setIsLoading(true);
        try {
            const response = await bookLesson(price, date, time, theme, teacherId, studentId);
            console.log(response);
            setIsBooked(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button
            className={`w-[50%] bg-white rounded-lg hover:bg-gray-200 pt-2 pb-2 text-lg flex items-center justify-center`}
            onClick={bookLessonHandler}
            disabled={isLoading || isBooked}
        >
            {isLoading ? (
                <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            ) : isBooked ? (
                "Stunda rezervēta"
            ) : (
                "Rezervēt stundu"
            )}
        </button>
    )
}
