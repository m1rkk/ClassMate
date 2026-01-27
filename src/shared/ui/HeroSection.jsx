import BgRectangle from '@/assets/imgs/heroBackgroundRectangle.png';
import homeIcon from "@/assets/imgs/material-symbols_home-outline-rounded.png"


export default function HeroSection(props) {
    return (
    <div className="w-[94%] bg-contain bg-no-repeat bg-center aspect-[23/10] mt-20"
         style={{ backgroundImage: `url(${BgRectangle})` }}>
        <button className="flex items-center justify-center w-1/9 bg-white rounded-2xl h-1/5 ml-5 mt-2">
            <img src="src/assets/imgs/material-symbols_home-outline-rounded.png" alt="" className="w-1/4"/></button>
    </div>

    )
}