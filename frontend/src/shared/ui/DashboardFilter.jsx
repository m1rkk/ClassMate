export default function DashboardFilter({period, onClick, width}) {
    return (
        <div onClick={onClick} className={`flex flex-row items-center justify-center bg-white w-[${width}] pt-1 pb-1 pr-4 pl-4 rounded-3xl cursor-pointer`}>
            {period}
        </div>
    )
}
