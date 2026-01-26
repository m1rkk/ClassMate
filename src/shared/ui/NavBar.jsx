import NavElement from "@/shared/ui/NavElement";
import infoIcon from "@/assets/imgs/ix_about.png";
import homeIcon from "@/assets/imgs/material-symbols_home-outline-rounded.png"
import contactIcon from "@/assets/imgs/mdi_contact-outline.png"

export default function NavBar() {
    return (
        <nav className="flex items-center justify-center">
                <ul className="list-none flex items-center justify-evenly bg-white rounded-2xl mt-6 w-100">
                    <NavElement path={infoIcon}/>
                    <NavElement path={homeIcon}/>
                    <NavElement path={contactIcon}/>
                </ul>
        </nav>
    );
}