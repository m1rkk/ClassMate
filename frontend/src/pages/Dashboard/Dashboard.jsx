import GlassSurface from "@/components/ui/GlassSurface";
import DashboardButton from "@/shared/ui/DashboardButton";
import ProfileComponent from "@/shared/ui/ProfileComponent";
export default function Dashboard() {
    return (
        <section className={`w-full h-full flex flex-col items-center justify-center`}>
            <div className={`flex flex-row items-center justify-between w-10/12`}>
                <p className={`text-lg w-1/4 text-white`}>Tavs personals panelis, šeit tu vari redzēt visas stundas kas tevi gaida un pārvaldīt tos</p>
                <DashboardButton role="student"/>
            </div>
            <div className={`flex flex-row items-center justify-between w-10/12`}>
                <ProfileComponent name={"Marks"} city={"Riga"} role={"Student"} surname={"Krustans"}/>
            </div>
            <GlassSurface>

            </GlassSurface>
            <div>

            </div>
        </section>
    )
}