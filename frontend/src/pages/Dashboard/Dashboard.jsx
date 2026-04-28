import GlassSurface from "@/components/ui/GlassSurface";
import DashboardButton from "@/shared/ui/DashboardButton";
import ProfileComponent from "@/shared/ui/ProfileComponent";
import LessonsCounter from "@/shared/ui/LessonsCounter";
import Threads from "@/components/ui/Threads";
import LessonsContainer from "@/shared/ui/LessonsContainer";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Dashboard() {
    const userId = localStorage.getItem("userId");
    const isLoggedIn = Boolean(userId);
    const [counterRefresh, setCounterRefresh] = useState(0);

    if (!isLoggedIn) {
        return (
            <div className="relative w-full h-screen overflow-hidden">
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction
                />
                <section className="absolute inset-0 z-10 flex items-center justify-center px-4">
                    <div className="w-[90vw] max-w-xl">
                        <GlassSurface
                            displace={1}
                            distortionScale={150}
                            redOffset={30}
                            greenOffset={10}
                            blueOffset={20}
                            brightness={50}
                            opacity={50}
                            backgroundOpacity={0.03}
                            mixBlendMode="difference"
                            width={`100%`}
                            height={`18rem`}
                        >
                            <div className="h-full w-full flex flex-col items-center justify-center gap-6 px-6">
                                <p className="text-white text-2xl font-semibold text-center">Tu neesi pieslēdzies</p>
                                <div className="flex items-center justify-center gap-4">
                                    <Link
                                        to="/login"
                                        className="min-w-28 rounded-full border border-white px-6 py-2 text-center text-white transition hover:bg-white hover:text-black"
                                    >
                                        Pieslēgties
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="min-w-28 rounded-full border border-white px-6 py-2 text-center text-white transition hover:bg-white hover:text-black"
                                    >
                                        Reģistrēties
                                    </Link>
                                </div>
                            </div>
                        </GlassSurface>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div style={{ width: '100%', height: '100%'}}>
            <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction
            />
            <section className={`w-full h-screen flex flex-col items-center justify-start gap-[5%] pt-4`}>
                <div className={`flex flex-row items-center justify-between w-10/12`}>
                    <p className={`text-lg w-1/4 text-white`}>Tavs personīgais panelis, šeit vari redzēt visas gaidāmās stundas un tās pārvaldīt.</p>
                    <DashboardButton role="student"/>
                </div>
                <div className={`flex flex-row items-center justify-between w-10/12`}>
                    <ProfileComponent/>
                    <LessonsCounter timePeriod={"today"} refreshTrigger={counterRefresh}/>
                    <LessonsCounter timePeriod={"week"} refreshTrigger={counterRefresh}/>
                </div>
                <GlassSurface
                    displace={1}
                    distortionScale={150}
                    redOffset={30}
                    greenOffset={10}
                    blueOffset={20}
                    brightness={50}
                    opacity={50}
                    backgroundOpacity={0.01}
                    mixBlendMode="difference"
                    width={`86%`}
                    height={`50%`}
                > <LessonsContainer onLessonUpdate={() => setCounterRefresh(prev => prev + 1)}/>
                </GlassSurface>
            </section>
        </div>

    )
}
