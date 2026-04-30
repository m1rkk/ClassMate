import Threads from "@/components/ui/Threads";
import GlassSurface from "@/components/ui/GlassSurface";
import TeacherPlateElement from "@/shared/ui/TeacherPlateElement";
import {useNavigate} from "react-router-dom";

export default function TutorSection() {
    const navigate = useNavigate();
    return(

        <section className={`relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center`}>
            <Threads
                amplitude={3}
                distance={0}
                enableMouseInteraction
            />
            <div className="relative w-full h-auto overflow-hidden flex flex-col items-center justify-center py-8 md:py-0 ">
                <p className={`text-4xl sm:text-4xl md:text-8xl font-bold font-[Orbitron] text-white text-center px-4 mb-8 md:mb-0`}>FIND BEST TUTOR FOR YOUR NEEDS</p>
                <div className={`flex flex-col md:flex-row items-center justify-start w-[90%] md:h-[70%] gap-8 md:gap-8`}>
                    <div className={`flex flex-col items-center justify-around w-full md:w-1/3 md:h-[40%] gap-4 md:gap-[8%]`}>
                        <p className={`text-white text-3xl sm:text-5xl md:text-6xl font-bold font-[Orbitron] text-left w-[95%] mb-4`}>
                            jebkur
                        </p>
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
                            width={`100%`}
                            height={`100%`}>
                            <p className={`text-white text-base sm:text-lg md:text-xl w-[90%] text-left font-thin`}>
                                Mūsu platforma palīdz atrast piemērotāko skolotāju tieši tavām vajadzībām.
                                Rezervē nodarbības, pārvaldi savu grafiku un seko līdzi progresam vienuviet.
                                Neatkarīgi no tā, vai mācies eksāmeniem vai attīsti jaunas prasmes — viss sākas šeit.
                            </p>
                        </GlassSurface>
                        <div className={`flex flex-col sm:flex-row items-center justify-start w-full h-auto md:h-[20%] gap-4`}>
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
                                width={`100%`}
                                height={`100%`}>
                                <button className={`bg-transparent text-white py-3 md:py-2 px-4 rounded w-full h-full text-center`} onClick={() => navigate('/login')}>Parskatīt skolotajus</button>
                            </GlassSurface>
                            <button className={`bg-white text-black py-3 md:py-2 px-4 rounded-xl w-full sm:w-[60%] h-auto md:h-[80%]`} onClick={() => navigate('/register')}>Vel nav students?</button>
                        </div>
                    </div>
                    <div className={`flex h-[70%] flex-col items-center md:items-end justify-center w-full md:w-[60%] md:h-[60%] gap-4 md:gap-6`}>
                        <TeacherPlateElement name={'Anita'} surname={'Kozlova'} subject={'Fizika'}></TeacherPlateElement>
                        <TeacherPlateElement name={"Viktorija"} surname={"Pankratova"} subject={'Matemātika'}></TeacherPlateElement>
                        <TeacherPlateElement name={"Anna"} surname={'Kirillova'} subject={'Krievu valoda'}></TeacherPlateElement>
                    </div>
                </div>
            </div>

        </section>
    )
}