import BgRectangle from '@/assets/imgs/heroBackgroundRectangle.png';
import HomeButton from "@/shared/ui/HomeButton";
import SquaredText from "@/shared/ui/SquaredTextElem";

export default function HeroSection(props) {
    return (
    <div className="w-[94%] relative w-max-screen bg-contain bg-no-repeat bg-center aspect-[23/10] mt-20"
         style={{ backgroundImage: `url(${BgRectangle})` }}>
                <HomeButton></HomeButton>
                <h1 className="text-8xl absolute left-1/6 bottom-[79%] font-inter font-medium text-[#638B9D] w-1/3">ClassMate</h1>
            <img src="src/assets/imgs/calendarImg.png" alt="" className="w-4/14 absolute left-8/11 bottom-1/2 z-2" />

        <div className="w-full h-1 bg-linear-to-r from-[#D0A4FA] to-[#A1E3F1] absolute bottom-[60%] z-1"></div>

        <SquaredText></SquaredText>

    </div>

    )
}