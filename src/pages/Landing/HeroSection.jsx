import BgRectangle from '@/assets/imgs/heroBackgroundRectangle.png';
import HomeButton from "@/shared/ui/HomeButton";

export default function HeroSection(props) {
    return (
    <div className="w-[94%] w-max-screen px-5 bg-contain bg-no-repeat bg-center aspect-[23/10] mt-20"
         style={{ backgroundImage: `url(${BgRectangle})` }}>
                <HomeButton></HomeButton>
                <h1 className="text-8xl relative left-1/6 bottom-1/6 font-inter font-medium text-[#638B9D] w-1/3">ClassMate</h1>
            <img src="src/assets/imgs/calendarImg.png" alt="" className="w-3/10 relative left-260 bottom-1/2" />
    </div>

    )
}