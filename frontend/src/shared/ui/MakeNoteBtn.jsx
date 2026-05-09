import {useState} from "react";
import {postNote} from "@/shared/Api";

export default function MakeNoteBtn({addingExpand = false,setAddingExpand,text, date, teacherId, studentId}) {
    const [isLoading, setIsLoading] = useState(false);
    const [isCreated, setIsCreated] = useState(false);

    const makeNote = async () => {
        setIsLoading(true);
        try {
            const response = await postNote(text, date, teacherId, studentId);
            console.log(response);
            setIsCreated(true);
            setAddingExpand(false);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <div className={`flex flex-row items-center justify-end w-full gap-4`}>
            {addingExpand && (<button
                className={`flex w-[20%] items-center justify-center rounded-lg bg-white pt-2 pb-2 text-lg hover:bg-gray-200 max-md:w-full max-md:text-base `}
                onClick={makeNote}
                disabled={isLoading || isCreated}
            >
                {isLoading ? (
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                ) : isCreated ? (
                    "Piezīme pievienota"
                ) : (
                    "Pievienot piezīmi"
                )}
            </button>)}
            {!addingExpand && (<button
                    className={`flex w-[20%] items-center justify-center rounded-lg bg-white pt-2 pb-2 text-lg hover:bg-gray-200 max-md:w-full max-md:text-base`}
                    onClick={()=>{
                        setAddingExpand(true);
                    }}
                >Pievienot piezīmi</button>)}
        </div>

    )
}
