export default function NavElement({path}) {
    return (
        <li className="h-full p-4">
            <img src={path} alt="" className="w-5"/>
        </li>
    )
}