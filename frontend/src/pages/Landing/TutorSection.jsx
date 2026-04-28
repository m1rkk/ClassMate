import Threads from "@/components/ui/Threads";
import GlassSurface from "@/components/ui/GlassSurface";
import TeacherPlateElement from "@/shared/ui/TeacherPlateElement";

export default function TutorSection() {
    return(

        <section className={`relative w-full h-screen overflow-hidden`}>
            <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
                <Threads
                    amplitude={3}
                    distance={0}
                    enableMouseInteraction
                />
                <p className={`text-8xl font-bold font-[Orbitron] text-white`}>FIND BEST TUTOR FOR YOUR NEEDS</p>
                <div className={`flex flex-row items-center justify-between w-[90%] h-[70%]`}>
                    <div className={`flex flex-col items-center justify-center w-1/3 h-[40%] gap-[8%]`}>
                        <p className={`text-white text-6xl font-bold font-[Orbitron] text-left w-full`}>
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
                            <p className={`text-white text-xl w-[90%] text-left font-thin`}>
                                Mūsu platforma palīdz atrast piemērotāko skolotāju tieši tavām vajadzībām.
                                Rezervē nodarbības, pārvaldi savu grafiku un seko līdzi progresam vienuviet.
                                Neatkarīgi no tā, vai mācies eksāmeniem vai attīsti jaunas prasmes — viss sākas šeit.
                            </p>
                        </GlassSurface>
                        <div className={`flex flex-row items-center justify-start w-full h-[20%] gap-4`}>
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
                                height={`100%`}>
                                <button className={`bg-transparent text-white py-2 px-4 rounded w-full h-full text-center`}>Parskatīt skolotajus</button>
                            </GlassSurface>
                            <button className={`bg-white text-black py-2 px-4 rounded-xl w-[60%] h-[80%]`}>Vel nav students?</button>
                        </div>
                    </div>
                    <div className={`flex flex-col items-end justify-center w-[60%] h-[60%] gap-6`}>
                        <TeacherPlateElement name={'Anita'} surname={'Kozlova'} subject={'Fizika'}></TeacherPlateElement>
                        <TeacherPlateElement name={"Viktorija"} surname={"Pankratova"} subject={'Matemātika'}></TeacherPlateElement>
                        <TeacherPlateElement name={"Anna"} surname={'Kirillova'} subject={'Krievu valoda'}></TeacherPlateElement>
                    </div>
                </div>
            </div>

        </section>
    )
}