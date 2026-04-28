export default function DashboardFilter({period, onClick, width, active}) {
    return (
        <div
            onClick={onClick}
            className={`flex flex-row items-center justify-center w-[${width}] pt-3 pb-3 pr-5 pl-5 rounded-full cursor-pointer text-lg ${
                active ? "bg-white/20" : "bg-white"
            }`}
        >
            {period}
        </div>
    )
}
