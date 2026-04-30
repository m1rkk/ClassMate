import NavBar from "@/shared/ui/NavBar";
import Dither from "@/components/ui/Dither";
import GlassSurface from "@/components/ui/GlassSurface";
import {useNavigate} from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-screen max-w-full overflow-hidden">
            <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction
                mouseRadius={0.1}
                colorNum={3}
                waveAmplitude={0.3}
                waveFrequency={6}
                waveSpeed={0.05}
            />
            <div className="absolute inset-0 z-10 flex flex-col justify-between gap-6 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                <div className="flex w-full justify-center sm:justify-end">
                    <NavBar />
                </div>
                <div className="flex flex-col gap-5 pb-4 sm:gap-6 sm:pb-8 lg:pb-12">
                    <div className="flex w-full max-w-md flex-col items-stretch justify-start gap-3 sm:h-14 sm:flex-row sm:items-center lg:h-16">
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
                            className="w-full sm:w-[42%]"
                            width="100%"
                            height="100%"
                        >
                            <span
                                className="flex h-full w-full cursor-pointer items-center justify-center px-4 text-center text-[clamp(0.85rem,2.5vw,1.15rem)] font-light text-white"
                                onClick={() => navigate('/login')}
                            >
                                Pieslēgties
                            </span>
                        </GlassSurface>
                        <button
                            className="h-20 w-full rounded-[100px] bg-black px-6 text-[clamp(0.85rem,2.5vw,1.15rem)] font-extralight text-white sm:h-full sm:w-auto sm:min-w-[12rem] sm:px-8"
                            onClick={() => navigate('/register')}
                        >
                            Reģistrēties
                        </button>
                    </div>
                    <div className="flex w-full max-w-4xl flex-col items-start justify-center gap-4 sm:gap-5 lg:gap-6">
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
                            width="100%"
                            height="auto"
                            className="min-h-[5.5rem] sm:min-h-[6rem] lg:min-h-[7rem]"
                        >
                            <div className="flex h-full w-full items-center justify-center p-4 text-left text-[clamp(0.95rem,2.2vw,1.3rem)] font-light text-white sm:p-5 lg:p-6">
                                Platforma, kas ļauj ērti atrast un rezervēt privātos skolotājus, sazināties ar tiem un pārvaldīt savu mācību procesu vienuviet.
                            </div>
                        </GlassSurface>
                        <h1 className="w-full text-balance font-[Orbitron] text-[clamp(2.8rem,11vw,8rem)] font-extrabold leading-[0.92] text-white">
                            NEW
                            <br />
                            WAY TO SCHEDULE
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
