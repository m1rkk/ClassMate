import NavElement from "@/shared/ui/NavElement";
import infoIcon from "@/assets/imgs/infoIcon.png";
import homeIcon from "@/assets/imgs/homeIcon.png";
import contactIcon from "@/assets/imgs/contactIcon.png";
import GlassSurface from "@/components/ui/GlassSurface";
export default function NavBar() {
    return (
        <nav className="flex items-center justify-center w-1/5 h-[15%] mt-[1%] mr-[1%]">
            <GlassSurface
                saturation={1}
                backgroundOpacity={0}
                borderWidth={0.1}
                brightness={30}
                opacity={0.5}
                blur={3}
                displace={0.7}
                distortionScale={40}
                redOffset={0}
                greenOffset={0}
                blueOffset={0}
                mixBlendMode="difference"
            width={`100%`}
            height={`100%`}>
                <ul className="list-none flex items-center justify-evenly rounded-2xl w-100">
                    <NavElement path={infoIcon}/>
                    <NavElement path={homeIcon}/>
                    <NavElement path={contactIcon}/>
                </ul>
            </GlassSurface>
        </nav>
    );
}