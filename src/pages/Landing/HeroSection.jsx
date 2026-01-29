import BgRectangle from '@/assets/imgs/heroBackgroundRectangle.png';
import HomeButton from "@/shared/ui/HomeButton";

export default function HeroSection(props) {
    return (
    <div className="w-[94%] w-max-screen m-0 bg-contain bg-no-repeat bg-center aspect-[23/10] mt-20"
         style={{ backgroundImage: `url(${BgRectangle})` }}>
                <HomeButton></HomeButton>
                <h1 className="text-8xl relative left-1/6 bottom-1/6 font-inter font-medium text-[#638B9D] w-1/3">ClassMate</h1>
            <img src="src/assets/imgs/calendarImg.png" alt="" className="w-4/14 relative left-8/11 bottom-1/2 z-2" />

        <div className="w-full h-1 bg-linear-to-r from-[#D0A4FA] to-[#A1E3F1] relative bottom-11/18 z-1"></div>

    </div>

    )
}