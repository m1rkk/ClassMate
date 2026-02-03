import BgRectangle from '@/assets/imgs/heroBackgroundRectangle.png';
import HomeButton from "@/shared/ui/HomeButton";
import SquaredText from "@/shared/ui/SquaredTextElem";
import InfoContainer from "@/shared/ui/InfoContainer";
import AboutButton from "@/shared/ui/AboutButton";
import Dither from "@/components/ui/Dither";
export default function HeroSection(props) {
    return (
    <div className="w-[94%] relative w-max-screen bg-contain bg-no-repeat bg-center aspect-[23/10] mt-20">
         <Dither waveColor={[0.5,0.5,0.5]}
                 disableAnimation={false}
                 enableMouseInteraction
                 mouseRadius={0.3}
                 colorNum={4}
                 waveAmplitude={0.3}
                 waveFrequency={3}
                 waveSpeed={0.05}></Dither>
    </div>
    )
}