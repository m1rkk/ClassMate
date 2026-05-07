import {useNavigate} from "react-router-dom";

export default function DashboardButton ({text,goTo}){
    const navigate = useNavigate();
    return(
            <button className="flex w-full shrink-0 flex-row items-center justify-between gap-4 rounded-2xl border-none bg-white px-5 py-3 text-left text-base sm:w-auto sm:justify-center sm:gap-6 sm:text-lg xl:w-1/5 xl:gap-8 xl:pt-4 xl:pb-4" onClick={() => {navigate(goTo)}}>
                <span className="min-w-0">{text}</span>
                <svg className="w-10 shrink-0 sm:w-12 xl:w-[30%]" viewBox="0 0 111 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M110.356 4.03544C110.552 3.84018 110.552 3.52359 110.356 3.32833L107.174 0.146351C106.979 -0.0489113 106.663 -0.0489113 106.467 0.146351C106.272 0.341613 106.272 0.658195 106.467 0.853458L109.296 3.68188L106.467 6.51031C106.272 6.70557 106.272 7.02216 106.467 7.21742C106.663 7.41268 106.979 7.41268 107.174 7.21742L110.356 4.03544ZM0 3.68188L0 4.18188H110.003V3.68188V3.18188H0L0 3.68188Z" fill="black"/>
                </svg>
            </button>
        )



}
