import GlassSurface from "@/components/ui/GlassSurface";
import DashboardButton from "@/shared/ui/DashboardButton";
import ProfileComponent from "@/shared/ui/ProfileComponent";
import LessonsCounter from "@/shared/ui/LessonsCounter";
import Threads from "@/components/ui/Threads";
export default function Dashboard() {
    return (
        <div style={{ width: '100%', height: '100%', zIndex: -1}}>
            <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction
            />
            <section className={`w-full h-[99vh] flex flex-col items-center justify-start gap-[5%]`}>
                <div className={`flex flex-row items-center justify-between w-10/12`}>
                    <p className={`text-lg w-1/4 text-white`}>Tavs personals panelis, šeit tu vari redzēt visas stundas kas tevi gaida un pārvaldīt tos</p>
                    <DashboardButton role="student"/>
                </div>
                <div className={`flex flex-row items-center justify-between w-10/12`}>
                    <ProfileComponent name={"Marks"} city={"Riga"} role={"Student"} surname={"Krustans"}/>
                    <LessonsCounter timePeriod={"today"}/>
                    <LessonsCounter timePeriod={"week"}/>
                </div>
                <GlassSurface>

                </GlassSurface>
                <div>

                </div>
            </section>
        </div>

    )
}