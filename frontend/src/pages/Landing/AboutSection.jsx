import GlassSurface from "@/components/ui/GlassSurface";
import CalendarImg from "@/assets/imgs/CalendarImg.png";
import DotField from "@/components/ui/DotField";
import BookImg from "@/assets/imgs/bookImg.png";
import AboutPlateElement from "@/shared/ui/AboutPlateElement";
import PeopleImg from "@/assets/imgs/peopleImg.png";
import UxImg from "@/assets/imgs/uxImg.png";
import PriceImg from "@/assets/imgs/priceImg.png"
import {useNavigate} from "react-router-dom";

export default function AboutSection() {
    const navigate = useNavigate();

    return (
        <section className="about-section flex w-full items-center justify-center overflow-hidden px-4 py-6 sm:px-6 sm:py-8 lg:h-screen lg:px-0 lg:pt-4">
            <div className="relative z-10 flex w-full items-center justify-center rounded-2xl bg-white/4 backdrop-blur-md lg:h-[80%] lg:w-[90%]">
                <div className="flex h-full w-full flex-col gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:items-center lg:justify-center lg:gap-4 lg:px-0 lg:py-0">
                    <div className="flex w-full flex-col items-start justify-between gap-6 lg:h-[30%] lg:w-[95%] lg:flex-row lg:items-center lg:gap-4">
                        <div className="flex w-full flex-col items-start justify-center gap-6 lg:h-full lg:w-[40%] lg:gap-8">
                            <p className="text-4xl font-bold font-[Orbitron] text-white sm:text-5xl lg:text-7xl">We grow - you grow</p>
                            <button className="rounded-xl bg-white px-5 py-3 text-sm sm:text-base lg:w-[20%]" onClick={() => navigate('/register')}>Registrēties</button>
                        </div>
                        <p className="w-full text-left text-base font-light text-white sm:text-lg lg:w-[27%] lg:text-right">
                            Attīsti savas prasmes ātrāk ar labākajiem skolotājiem. Tā darbojas līdzīgi kā Airbnb, bet ir paredzēta nodarbību rezervēšanai. Rezervē nodarbības, pārvaldi savu laiku un seko progresam vienuviet.
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-stretch justify-between gap-4 lg:h-[23%] lg:w-[95%] lg:flex-row lg:items-center">
                        <GlassSurface
                            displace={1}
                            distortionScale={150}
                            redOffset={30}
                            greenOffset={10}
                            blueOffset={20}
                            brightness={50}
                            opacity={50}
                            backgroundOpacity={0.001}
                            mixBlendMode="difference"
                            className="about-section__surface"
                            width={`45%`}
                            height={`100%`}
                        >
                            <div className="flex h-full w-full flex-col items-start justify-between gap-6 p-4 sm:p-5 lg:flex-row lg:gap-8 lg:p-0">
                                <div className="flex w-full flex-col items-start justify-center gap-5 lg:h-full lg:w-[50%] lg:gap-8 lg:p-2">
                                    <h1 className="text-2xl text-white sm:text-3xl">
                                        no matter who
                                        <br />
                                        or what
                                    </h1>
                                    <p className="w-full text-left text-sm font-thin text-white lg:w-[90%]">
                                        Mūsu platforma savieno skolēnus ar pieredzējušiem skolotājiem.
                                        Viegli atrodi pasniedzēju, rezervē nodarbības un pārvaldi visu vienā vietā.
                                    </p>
                                </div>
                                <img src={CalendarImg} alt="" className="h-auto w-full max-w-[15rem] self-center lg:h-[20vh] lg:w-[32%]" />
                            </div>
                        </GlassSurface>
                        <div className="grid w-full grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:flex lg:h-full lg:w-[30%] lg:flex-row lg:items-center lg:justify-end lg:gap-[15%] lg:p-2">
                            <div className="flex min-h-40 flex-col items-start justify-around gap-4 rounded-xl bg-white p-5 sm:p-6 lg:h-[90%] lg:w-[35%]">
                                <p className="text-3xl sm:text-4xl lg:text-3xl">1000+ <br/> skolotājus</p>
                                <p className="w-full text-left text-lg">Plaša izvēle dažādās mācību jomās.</p>
                            </div>
                            <div className="flex min-h-40 flex-col items-start justify-around gap-4 rounded-xl bg-white p-5 sm:p-6 lg:h-[90%] lg:w-[35%]">
                                <p className="text-3xl sm:text-8xl lg:text-3xl">1000+ <br/> studentus</p>
                                <p className="w-full text-left text-lg">Aktīva kopiena, kas mācās un attīstās.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-between gap-5 p-0 sm:gap-6 lg:h-[35%] lg:w-[95%] lg:flex-row lg:items-center lg:gap-4 lg:p-2">
                        <p className="w-full text-lg text-white sm:text-xl lg:w-[20%]">Mūsu platforma piedāvā plašu skolotāju izvēli dažādās jomās — atrodi sev piemērotāko.</p>
                        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4 lg:flex lg:h-full lg:w-[70%] lg:flex-row lg:items-center lg:justify-end lg:gap-[7%]">
                            <AboutPlateElement text="1000+ skolotājus" img={BookImg}/>
                            <AboutPlateElement text="augam katru dienu" img={PeopleImg}/>
                            <AboutPlateElement text="innovatīvs dizajns" img={UxImg}/>
                            <AboutPlateElement text="labākas cenas tirgū" img={PriceImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
