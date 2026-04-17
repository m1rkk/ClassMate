import Threads from "@/components/ui/Threads";
import DashboardButton from "@/shared/ui/DashboardButton";
import TeachersOrStudentsContainer from "@/shared/ui/TeachersOrStudentsContainer";

export default function Catalog() {

    if(localStorage.getItem("role") === "student"){
        return(
                <div className="relative w-full h-screen overflow-hidden">
                    <Threads
                        amplitude={3}
                        distance={0}
                        enableMouseInteraction
                    />
                    <section className={`w-full h-screen flex flex-col items-center justify-start gap-[5%] pt-4`}>
                        <div className={`flex flex-row items-center justify-between w-10/12`}>
                            <p className={`text-lg w-1/4 text-white`}>Tavs personals panelis, šeit tu vari redzēt visas stundas kas tevi gaida un pārvaldīt tos</p>
                            <DashboardButton role="student"/>
                        </div>
                        <div className={`flex flex-row items-center justify-end w-full h-full p-4`}>
                            <TeachersOrStudentsContainer/>
                        </div>
                    </section>
                </div>
        )
    }
    else{
        return(
            <div>Teacher</div>
        )
    }

}