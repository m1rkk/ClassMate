import BgRectangle from '@/assets/imgs/heroBackgroundRectangle.png';
import HomeButton from "@/shared/ui/HomeButton";
import SquaredText from "@/shared/ui/SquaredTextElem";
import InfoContainer from "@/shared/ui/InfoContainer";
import AboutButton from "@/shared/ui/AboutButton";
import Dither from "@/components/ui/Dither";
import GlassSurface from "@/components/ui/GlassSurface";
export default function HeroSection(props) {
    return (
    <div className="w-full h-full">
         <Dither waveColor={[0.5,0.5,0.5]}
                 disableAnimation={false}
                 enableMouseInteraction
                 mouseRadius={0.1}
                 colorNum={3}
                 waveAmplitude={0.3}
                 waveFrequency={6}
                 waveSpeed={0.05}>
             </Dither>
    <div className={`absolute top-0 flex flex-col items-start justify-end w-full h-full gap-[1%] ml-[1%]`}>
        <div className={`flex flex-row items-center justify-start w-1/4 h-[5%] gap-[3%]`}>
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
                width={`40%`}
                height={`100%`}>
                <span className="text-[clamp(0.4rem,1vw,1.3rem)] font-light flex items-center justify-center text-white">Pieslegties</span>
            </GlassSurface>
            <button className={`bg-black pl-9 pr-9 rounded-[100px] h-full text-white text-[clamp(0.4rem,1vw,1.3rem)] font-extralight`}>Registreties</button>
        </div>
        <div className={`w-[40%] h-[60%] flex flex-col items-start justify-center`}>
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
            height={`23%`}>
                <div className="w-full h-full min-h-[23%] text-white font-light flex items-center justify-center p-4 text-[clamp(0.5rem,1vw,1.3rem)]">
                    Mūsu platforma darbojas pēc līdzīga principa kā Airbnb, tikai paredzēta privāto skolotāju un instruktoru rezervācijām. Mūsu platforma darbojas pēc līdzīga principa kā Airbnb, tikai paredzēta privāto skolotāju un instruktoru rezervācijām..
                </div>
            </GlassSurface>
            <h1 className="text-white text-[clamp(2vw,6vw,8rem)] font-extrabold w-full font-[Orbitron]">
                NEW WAY<br />TO<br />SCHEDULE
            </h1>
        </div>
    </div>
    </div>

    )
}