import Threads from "@/components/ui/Threads";
import DashboardButton from "@/shared/ui/DashboardButton";
import TeachersOrStudentsContainer from "@/shared/ui/TeachersOrStudentsContainer";
import GlassSurface from "@/components/ui/GlassSurface";
import {Link} from "react-router-dom";

export default function Catalog() {
    const userId = localStorage.getItem("userId");
    const isLoggedIn = Boolean(userId);

    if (!isLoggedIn) {
        return (
            <div className="relative h-screen w-full overflow-hidden max-md:h-auto max-md:min-h-screen max-md:overflow-x-hidden max-md:overflow-y-auto">
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
                                <div className="flex items-center justify-center gap-4 max-sm:w-full max-sm:flex-col max-sm:items-stretch">
                                    <Link
                                        to="/login"
                                        className="min-w-28 rounded-full border border-white px-6 py-2 text-center text-white transition hover:bg-white hover:text-black max-sm:w-full"
                                    >
                                        Pieslēgties
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="min-w-28 rounded-full border border-white px-6 py-2 text-center text-white transition hover:bg-white hover:text-black max-sm:w-full"
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

    if (isLoggedIn) {
        if (localStorage.getItem("role") === "student") {
            return (
                <div className="relative h-screen w-full overflow-hidden max-md:h-auto max-md:min-h-screen max-md:overflow-x-hidden max-md:overflow-y-auto">
                    <Threads
                        amplitude={3}
                        distance={0}
                        enableMouseInteraction
                    />
                    <section className={`flex h-screen w-full flex-col items-center justify-start gap-[10%] pt-4 max-md:h-auto max-md:min-h-screen max-md:gap-5 max-md:px-4 max-md:py-4`}>
                        <div className={`flex w-10/12 flex-row items-center justify-between max-md:w-full max-md:flex-col max-md:items-stretch max-md:gap-3`}>
                            <p className={`w-1/4 text-lg text-white max-md:w-full max-md:text-sm`}>Tavs personīgais panelis, šeit vari redzēt visas gaidāmās stundas un tās pārvaldīt.</p>
                            <DashboardButton text={"Uz personīgo paneli"} goTo={"/dashboard"}/>
                        </div>
                        <div className={`flex h-full w-full flex-row items-center justify-center p-4 max-md:h-auto max-md:min-h-0 max-md:items-start max-md:p-0`}>
                            <TeachersOrStudentsContainer/>
                        </div>
                    </section>
                </div>
            )
        } else {
            return (
                <div className="relative h-screen w-full overflow-hidden max-md:h-auto max-md:min-h-screen max-md:overflow-x-hidden max-md:overflow-y-auto">
                    <Threads
                        amplitude={3}
                        distance={0}
                        enableMouseInteraction
                    />
                    <section className={`flex h-screen w-full flex-col items-center justify-start gap-[15%] pt-4 max-md:h-auto max-md:min-h-screen max-md:gap-5 max-md:px-4 max-md:py-4`}>
                        <div className={`flex w-10/12 flex-row items-center justify-between max-md:w-full max-md:flex-col max-md:items-stretch max-md:gap-3`}>
                            <p className={`w-1/4 text-lg text-white max-md:w-full max-md:text-sm`}>Tavs personīgais panelis, šeit vari redzēt visas gaidāmās stundas un tās pārvaldīt.</p>
                            <DashboardButton text={"Uz personīgo paneli"} goTo={"/dashboard"}/>
                        </div>
                        <div className={`flex h-full w-full flex-row items-center justify-center p-4 max-md:h-auto max-md:min-h-0 max-md:items-start max-md:p-0`}>
                            <TeachersOrStudentsContainer/>
                        </div>
                    </section>
                </div>
            )
        }
    }else {
        return (
            <div className="relative h-screen w-full overflow-hidden max-md:h-auto max-md:min-h-screen max-md:overflow-x-hidden max-md:overflow-y-auto">
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
                                <div className="flex items-center justify-center gap-4 max-sm:w-full max-sm:flex-col max-sm:items-stretch">
                                    <Link
                                        to="/login"
                                        className="min-w-28 rounded-full border border-white px-6 py-2 text-center text-white transition hover:bg-white hover:text-black max-sm:w-full"
                                    >
                                        Pieslēgties
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="min-w-28 rounded-full border border-white px-6 py-2 text-center text-white transition hover:bg-white hover:text-black max-sm:w-full"
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
}
