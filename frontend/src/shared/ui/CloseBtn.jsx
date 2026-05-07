export default function CloseBtn({OnClick}) {
    return(
        <button onClick={() => OnClick()} className="absolute top-0 right-0 flex items-center justify-center rounded-full border-none bg-transparent p-4 text-xl text-white xl:left-0 xl:right-auto">X</button>
    )
}
