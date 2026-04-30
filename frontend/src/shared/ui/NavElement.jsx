export default function NavElement({path, onClick}) {
    if (!path) {
        return null;
    }

    return (
        <li className="flex h-full items-center justify-center p-2 sm:p-3">
            <img src={path} alt="" className="h-auto w-4 cursor-pointer object-contain sm:w-5 xl:w-6" onClick={onClick}/>
        </li>
    )
}
