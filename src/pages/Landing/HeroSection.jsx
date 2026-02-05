import BgRectangle from '@/assets/imgs/heroBackgroundRectangle.png';
import HomeButton from "@/shared/ui/HomeButton";
import SquaredText from "@/shared/ui/SquaredTextElem";
import InfoContainer from "@/shared/ui/InfoContainer";
import AboutButton from "@/shared/ui/AboutButton";
import Dither from "@/components/ui/Dither";
import GlassSurface from "@/components/ui/GlassSurface";
export default function HeroSection(props) {
    return (
    <div className="w-full relative flex flex-col items-center justify-center">
         <Dither waveColor={[0.5,0.5,0.5]}
                 disableAnimation={false}
                 enableMouseInteraction
                 mouseRadius={0.1}
                 colorNum={3}
                 waveAmplitude={0.3}
                 waveFrequency={6}
                 waveSpeed={0.05}>
             </Dither>

            <GlassSurface>
                <div className="relative text-[1.25rem] font-light w-32 h-2 flex items-center justify-center">Pieslegties</div>
            </GlassSurface>
            <button className={`bg-black pt-4 pb-[0.9rem] pr-7 p-7 rounded-[100px] absolute top-[29%] left-[9%] text-white z-10 text-[1.15rem] font-extralight`}>Registreties</button>

      <GlassSurface>
        <div className=" 2xl:w-130 xl:w-100 lg:w-70 md:w-40 sm:w-10
        2xl:h-30 xl:h-25 lg:h-20 md:h-15 sm:h-10
        text-white
        xl:text-[1.25rem] lg:text-[1rem] md:text-[0.75rem] sm:text-[0.5rem]
        font-light flex items-center justify-center">
            Mūsu platforma darbojas pēc līdzīga principa kā Airbnb, tikai paredzēta privāto skolotāju un instruktoru rezervācijām. Mūsu platforma darbojas pēc līdzīga principa kā Airbnb, tikai paredzēta privāto skolotāju un instruktoru rezervācijām..
        </div>
      </GlassSurface>
        <h1 className="text-white text-[7rem] font-extrabold absolute top-[45%] left-[1%] z-10 w-[26%] font-[Orbitron]">
            NEW WAY
            TO
            SCHEDULE
        </h1>

    </div>

    )
}