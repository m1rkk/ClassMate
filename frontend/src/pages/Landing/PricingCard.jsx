import GlassSurface from "@/components/ui/GlassSurface";
import {useNavigate} from "react-router-dom";

export default function PricingCard({price, planName, features}) {
    const navigate = useNavigate();
    return(
        <GlassSurface
            displace={1}
            distortionScale={150}
            redOffset={30}
            greenOffset={10}
            blueOffset={20}
            brightness={50}
            opacity={50}
            backgroundOpacity={0.05}
            mixBlendMode="difference"
            width={`100%`}
            height={`auto`}
            className="md:w-[20%]! md:h-[60%]! min-h-125">
            <div className={`w-full h-full flex flex-col items-center justify-start gap-[5%] p-4`}>
                <div className={`w-full h-[20%] flex flex-col items-start justify-center gap-4`}>
                    <p className={`text-4xl text-white/50`}>{price}</p>
                    <h1 className={`text-6xl font-bold font-[Orbitron] text-white`}>{planName}</h1>
                </div>
                <ul className={`list-disc list-inside w-full h-[60%] text-xl text-white text-left flex flex-col items-start justify-start gap-[5%]`}>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <button className={`bg-white text-black rounded-2xl py-4 text-xl w-[60%] mt-[10%]`} onClick={() => navigate('/register')}>
                    Pieteikties
                </button>
            </div>
        </GlassSurface>
    )
}