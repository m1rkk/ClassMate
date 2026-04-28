export default function CloseBtn({OnClick}) {
    return(
        <button onClick={() => OnClick()} className="absolute top-0 left-0 bg-transparent border-none rounded-full flex items-center justify-center text-white text-xl p-4">X</button>
    )
}