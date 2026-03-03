import Dither from "@/components/ui/Dither";
import GlassSurface from "@/components/ui/GlassSurface";
import GlassInput from "@/shared/ui/GlassInput";
import { Link } from "react-router-dom";
export default function RegisterPage() {
    return(
        <div className={`w-full h-screen bg-black flex justify-between items-center`}>
            <div className={`w-2/3 h-full`}>
                <Dither
                        waveColor={[0.5,0.5,0.5]}
                        disableAnimation={false}
                        enableMouseInteraction
                        mouseRadius={0.1}
                        colorNum={4}
                        waveAmplitude={0.4}
                        waveFrequency={3}
                        waveSpeed={0.03}>
                </Dither>

                <div className={`absolute top-0 w-2/3 h-full flex justify-center items-center gap-[3%] flex-col`}>
                    <div className={`flex items-center justify-start gap-[5%] w-[45%] h-[7%]`}>
                        <GlassInput placeholder={"name:"} height={'100%'}/>
                        <GlassInput placeholder={"surname:"} height={'100%'}/>
                    </div>

                    <GlassInput placeholder={"email:"}/>
                    <GlassInput placeholder={"password:"}/>
                    <GlassInput placeholder={"repeat password:"}/>

                    <GlassSurface
                        saturation={1}
                        backgroundOpacity={0}
                        borderWidth={0.1}
                        brightness={30}
                        opacity={0.5}
                        blur={3}
                        displace={0.7}
                        distortionScale={40}
                        redOffset={0}
                        greenOffset={0}
                        blueOffset={0}
                        mixBlendMode="difference"
                        width={`45%`}
                        height={`7%`}>
                        <select name="City:" id="citySelector" className={`bg-transparent w-full h-full`}>
                            //TODO: add loop to iterate through array with cities
                        </select>
                    </GlassSurface>

                    <div className={`flex items-center justify-start gap-4 w-[45%]`}>
                        <div><input type="radio" id={`teacherRadio`} value={`teacher`}/> <label htmlFor="teacherRadio" className={`text-white`}>I'm a teacher</label></div>
                        <div><input type="radio" id={`studentRadio`} value={`student`}/> <label htmlFor="studentRadio" className={`text-white`}>I'm a student</label></div>
                        <div className={`text-white`}>Have an account? <Link to={`/login`} className={`text-blue-700 font-black`}>Click</Link></div>
                    </div>

                    <GlassSurface
                        saturation={1}
                        backgroundOpacity={0}
                        borderWidth={0.1}
                        brightness={30}
                        opacity={0.5}
                        blur={3}
                        displace={0.7}
                        distortionScale={40}
                        redOffset={0}
                        greenOffset={0}
                        blueOffset={0}
                        mixBlendMode="difference"
                        width={`45%`}
                        height={`7%`}>
                        <button className={`bg-transparent w-full h-full text-white`}>Register</button>
                    </GlassSurface>

                </div>
            </div>

            <div className={`w-1/3 h-full bg-black flex flex-col justify-around items-start`}>
                <h1 className="text-white text-[clamp(1.8vw,5.5vw,7.8rem)] font-extrabold font-[Orbitron] rotate-90 ml-[-20%] mt-[10%]">
                    NEW WAY<br />TO<br />SCHEDULE
                </h1>
                <div className="w-full text-white font-light flex items-center justify-center text-[clamp(0.5rem,0.9vw,1rem)] text-right">
                    Mūsu platforma darbojas pēc līdzīga principa kā Airbnb, tikai paredzēta privāto skolotāju un instruktoru rezervācijām. Mūsu platforma darbojas pēc līdzīga principa kā Airbnb, tikai paredzēta privāto skolotāju un instruktoru rezervācijām..
                </div>
                <div className="w-full text-white font-light flex items-center justify-center text-[clamp(0.5rem,0.9vw,1rem)] text-left">
                    Mūsu platforma darbojas pēc līdzīga principa kā Airbnb, tikai paredzēta privāto skolotāju un instruktoru rezervācijām.
                </div>
            </div>
8
        </div>
    );
}