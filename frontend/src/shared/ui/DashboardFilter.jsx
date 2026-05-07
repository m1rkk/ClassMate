export default function DashboardFilter({period, onClick, width, active, className = ""}) {
    return (
        <button
            type="button"
            onClick={onClick}
            style={width ? { "--dashboard-filter-width": width } : undefined}
            className={`flex w-full cursor-pointer items-center justify-center rounded-full border-none px-5 py-3 text-base sm:w-auto sm:text-lg xl:w-[var(--dashboard-filter-width)] ${
                active ? "bg-white/20" : "bg-white"
            } ${className}`}
        >
            {period}
        </button>
    )
}
