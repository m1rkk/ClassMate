export default function DashboardFilter({period, onClick, width, active}) {
    return (
        <div
            onClick={onClick}
            className={`flex flex-row items-center justify-center w-[${width}] pt-1 pb-1 pr-4 pl-4 rounded-3xl cursor-pointer ${
                active ? "bg-gray-300" : "bg-white"
            }`}
        >
            {period}
        </div>
    )
}
