import GlassSurface from "@/components/ui/GlassSurface";
import CalendarImg from "@/assets/imgs/CalendarImg.png";
import DotField from "@/components/ui/DotField";
import BookImg from "@/assets/imgs/bookImg.png";
import AboutPlateElement from "@/shared/ui/AboutPlateElement";
import PeopleImg from "@/assets/imgs/peopleImg.png";
import UxImg from "@/assets/imgs/uxImg.png";
import PriceImg from "@/assets/imgs/priceImg.png"
export default function AboutSection() {
    return (
        <section className="w-full h-screen overflow-hidden pt-4 flex flex-col items-center justify-center">
            <div className="relative z-10 flex h-[80%] w-[85%] items-center justify-center backdrop-blur-md bg-white/4 rounded-2xl">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                        <div className="w-[95%] h-[30%] flex flex-row items-center justify-between gap-4">
                            <div className="w-[40%] h-full flex flex-col items-start justify-center gap-8">
                                <p className="text-7xl font-bold font-[Orbitron] text-white">We grow - you grow</p>
                                <button className="bg-white rounded-xl w-[20%] p-3">RegistrД“ties</button>
                            </div>
                            <p className="text-white text-lg w-[27%] text-right font-light">
                                Attīsti savas prasmes ātrāk ar labākajiem skolotājiem. Tā darbojas līdzīgi kā Airbnb, bet ir paredzēta nodarbību rezervēšanai. Rezervē nodarbības, pārvaldi savu laiku un seko progresam vienuviet.
                            </p>
                        </div>
                        <div className="w-[95%] h-[23%] flex flex-row items-center justify-between gap-4">
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
                                width={`40%`}
                                height={`100%`}
                            >
                                <div className="w-full h-full flex flex-row items-start justify-between gap-8">
                                    <div className="w-[50%] h-full flex flex-col items-start justify-center gap-8 p-2">
                                        <h1 className="text-3xl text-white">
                                            no matter who
                                            <br />
                                            or what
                                        </h1>
                                        <p className="text-white text-sm w-[90%] text-left font-thin">
                                            Mūsu platforma savieno skolēnus ar pieredzējušiem skolotājiem.
                                            Viegli atrodi pasniedzēju, rezervē nodarbības un pārvaldi visu vienā vietā.
                                        </p>
                                    </div>
                                    <img src={CalendarImg} alt="" className="w-[32%] h-[20vh] " />
                                </div>
                            </GlassSurface>
                            <div className={`w-[30%] h-full flex flex-row items-center justify-end gap-[15%] p-2`}>
                                <div className="w-[35%] h-[90%] flex flex-col items-start justify-around gap-4 bg-white rounded-xl p-6">
                                    <p className={`text-3xl`}>1000+ <br/> skolotājus</p>
                                    <p className={`text-sm text-left w-full`}>Plaša izvēle dažādās mācību jomās.</p>
                                </div>
                                <div className="w-[35%] h-[90%] flex flex-col items-start justify-around gap-4 bg-white rounded-xl p-6">
                                    <p className={`text-3xl`}>1000+ <br/> studentus</p>
                                    <p className={`text-sm text-left w-full`}>Aktīva kopiena, kas mācās un attīstās.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`w-[95%] h-[35%] flex flex-row items-center justify-between gap-4 p-2`}>
                            <p className={`text-xl text-white w-[20%]`}>Mūsu platforma piedāvā plašu skolotāju izvēli dažādās jomās — atrodi sev piemērotāko.</p>
                            <div className={`w-[70%] h-full flex flex-row items-center justify-end gap-[7%]`}>
                                <AboutPlateElement text="1000+ tutors" img={BookImg}/>
                                <AboutPlateElement text="growing auditory" img={PeopleImg}/>
                                <AboutPlateElement text="ituitive design" img={UxImg}/>
                                <AboutPlateElement text="best prices" img={PriceImg}/>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}
