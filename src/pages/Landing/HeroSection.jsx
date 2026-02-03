import BgRectangle from '@/assets/imgs/heroBackgroundRectangle.png';
import HomeButton from "@/shared/ui/HomeButton";
import SquaredText from "@/shared/ui/SquaredTextElem";
import InfoContainer from "@/shared/ui/InfoContainer";
import AboutButton from "@/shared/ui/AboutButton";
import Dither from "@/components/ui/Dither";
import GlassCard from "@/shared/ui/GlassCard";
export default function HeroSection(props) {
    return (
    <div className="w-full relative flex flex-col items-center justify-center">
         <Dither waveColor={[0.5,0.5,0.5]}
                 disableAnimation={false}
                 enableMouseInteraction
                 mouseRadius={0.3}
                 colorNum={4}
                 waveAmplitude={0.3}
                 waveFrequency={3}
                 waveSpeed={0.05}>
             </Dither>
       <GlassCard></GlassCard>

    </div>

    )
}