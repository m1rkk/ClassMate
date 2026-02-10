export default function NavElement({path}) {
    return (
        <li className="h-full p-4">
            <img src={path} alt="" className="2xl:w-7 xl:w-5 m:w-4 sm:w-3 h-full"/>
        </li>
    )
}