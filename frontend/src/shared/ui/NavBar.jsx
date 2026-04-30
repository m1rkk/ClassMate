import NavElement from "@/shared/ui/NavElement";
import infoIcon from "@/assets/imgs/infoIcon.png";
import homeIcon from "@/assets/imgs/homeIcon.png";
import contactIcon from "@/assets/imgs/contactIcon.png";
import GlassSurface from "@/components/ui/GlassSurface";
import {useNavigate} from "react-router-dom";
export default function NavBar() {
    const navigate = useNavigate();
    return (
        <nav className="flex h-14 w-full max-w-[15rem] items-center justify-center sm:h-16 sm:max-w-[18rem] lg:h-[100%] lg:w-[20%] lg:min-w-[16rem] lg:max-w-[20rem]">
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
                <ul className="flex h-full w-full list-none items-center justify-evenly rounded-2xl">
                    <NavElement path={infoIcon} onClick={() => navigate('/')}/>
                    <NavElement path={homeIcon} onClick={() => navigate('/dashboard')}/>
                    <NavElement path={contactIcon} onClick={() => navigate('/catalog')}/>
                </ul>
            </GlassSurface>
        </nav>
    );
}
