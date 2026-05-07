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
    const role = localStorage.getItem("role");

    if (!isLoggedIn) {
        return (
            <div className="relative min-h-screen w-full overflow-hidden">
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction
                />
                <section className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
                    <div className="w-full max-w-xl">
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
                            <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-4 sm:px-6">
                                <p className="text-white text-2xl font-semibold text-center">Tu neesi pieslēdzies</p>
                                <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
                                    <Link
                                        to="/login"
                                        className="w-full min-w-28 rounded-full border border-white px-6 py-2 text-center text-white transition hover:bg-white hover:text-black sm:w-auto"
                                    >
                                        Pieslēgties
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="w-full min-w-28 rounded-full border border-white px-6 py-2 text-center text-white transition hover:bg-white hover:text-black sm:w-auto"
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
        <div className="relative min-h-screen w-full overflow-x-hidden">
            <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction
            />
            <section className="relative z-10 mx-auto flex min-h-screen w-full flex-col items-center justify-start gap-4 px-4 py-4 sm:px-6 md:gap-6 xl:gap-20">
                <div className="flex w-full flex-col gap-4 xl:w-10/12 xl:flex-row xl:items-center xl:justify-between">
                    <p className="w-full max-w-3xl text-sm text-white sm:text-base xl:w-1/4 xl:text-lg">
                        Tavs personīgais panelis, šeit vari redzēt visas gaidāmās stundas un tās pārvaldīt.
                    </p>
                    {role === "student" && (<DashboardButton text={"Atrast skolotāju"} goTo={"/catalog"}/>)}
                    {role === "teacher" && (<DashboardButton text={"Jūsu skolēni"} goTo={"/catalog"}/>)}
                </div>
                <div className="flex w-full flex-col gap-4 md:grid md:grid-cols-2 xl:w-10/12 xl:flex xl:flex-row xl:items-center xl:justify-between">
                    <ProfileComponent/>
                    <LessonsCounter timePeriod={"today"} refreshTrigger={counterRefresh}/>
                    <LessonsCounter timePeriod={"week"} refreshTrigger={counterRefresh}/>
                </div>
                <div className="w-full xl:w-[86%]">
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
                        width={`100%`}
                        height={`clamp(24rem, 50vh, 30rem)`}
                    >
                        <LessonsContainer onLessonUpdate={() => setCounterRefresh(prev => prev + 1)}/>
                    </GlassSurface>
                </div>
            </section>
        </div>

    )
}
