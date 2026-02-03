import BgRectangle from '@/assets/imgs/heroBackgroundRectangle.png';
import HomeButton from "@/shared/ui/HomeButton";
import SquaredText from "@/shared/ui/SquaredTextElem";
import InfoContainer from "@/shared/ui/InfoContainer";
import AboutButton from "@/shared/ui/AboutButton";
import Dither from "@/components/ui/Dither";
import LiquidGlass from 'liquid-glass-react'
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
       <LiquidGlass
                    elasticity={0}
                    cornerRadius={20}
                    style={{position:"absolute", top:"50%", zIndex:"2"}}>
        <div className="relative w-20 h-50 ">

        </div>
       </LiquidGlass>

    </div>

    )
}