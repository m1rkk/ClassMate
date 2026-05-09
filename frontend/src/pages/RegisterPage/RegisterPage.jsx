import Dither from "@/components/ui/Dither";
import GlassSurface from "@/components/ui/GlassSurface";
import GlassInput from "@/shared/ui/GlassInput";
import { Link } from "react-router-dom";
import {register} from "@/shared/Api";
import {useState} from "react";
import latviaCities from "@/pages/RegisterPage/Cities";

const PASSWORD_PATTERN = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
const PASSWORD_ERROR_TEXT = "Parolei jābūt vismaz 6 simbolus garai, ar vienu lielo burtu, vienu ciparu un vienu speciālo simbolu.";

export default function RegisterPage() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [city, setCity] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validatePassword = (value) => PASSWORD_PATTERN.test(value) ? "" : PASSWORD_ERROR_TEXT;

    const handlePasswordChange = (e) => {
        const nextPassword = e.target.value;

        setPassword(nextPassword);
        setPasswordError(nextPassword ? validatePassword(nextPassword) : "");
    };

    const handleRegister = async () => {
        const currentPasswordError = validatePassword(password);

        if (currentPasswordError) {
            setPasswordError(currentPasswordError);
            return;
        }

        setPasswordError("");
        await register(name, surname, email, city, password, role);
    };

    return(
        <div className={`relative w-full min-h-screen bg-black flex flex-col md:h-screen md:flex-row md:justify-between md:items-center`}>
            <div className={`relative w-full min-h-screen md:w-2/3 md:h-full`}>
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

                <div className={`absolute top-0 w-full h-full flex justify-center items-center gap-[3%] flex-col px-4`}>
                    <div className={`flex flex-col md:flex-row items-center justify-between h-[13%] w-[90%] md:w-[45%] md:h-[6%] gap-[3%] md:gap-0`}>
                        <GlassInput placeholder={"vārds:"} height={'100%'} width={"100%"} onChange={(e) => setName(e.target.value)} value={name} className="md:!w-[48%] md:!h-full"/>
                        <GlassInput placeholder={"uzvārds:"} height={'100%'} width={"100%"} onChange={(e) => setSurname(e.target.value)} value={surname} className="md:!w-[48%] md:!h-full"/>
                    </div>

                    <GlassInput placeholder={"e-pasts:"} onChange={(e) => setEmail(e.target.value)} value={email} width="90%" className="md:!w-[45%]"/>
                    <GlassInput
                        placeholder={"parole:"}
                        onChange={handlePasswordChange}
                        value={password}
                        width="90%"
                        className="md:!w-[45%]"
                        type="password"
                        minLength={6}
                        pattern={PASSWORD_PATTERN.source}
                        title={PASSWORD_ERROR_TEXT}
                        autoComplete="new-password"
                        aria-invalid={Boolean(passwordError)}
                    />
                    {passwordError && (
                        <p className="w-[90%] text-sm text-red-300 md:w-[45%]">{passwordError}</p>
                    )}

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
                        width={`90%`}
                        height={`6%`}
                        className="md:!w-[45%]">
                        <select name="Pilsēta:" id="citySelector" className={`bg-transparent w-full h-full text-white`} onChange={(e) => setCity(e.target.value)}>
                            {
                                latviaCities.map((city)=>(
                                    <option value={city} key={city} className={`text-black`} onChange={(e)=>setCity(e.target.value)}>{city}</option>
                                ))
                            }
                        </select>
                    </GlassSurface>

                    <div className={`flex flex-col md:flex-row items-start md:items-center justify-start gap-4 w-[90%] md:w-[45%]`}>
                        <div><input type="radio" name={"role"}  value={`teacher`} onChange={(e)=>setRole(e.target.value)}/> <label htmlFor="teacherRadio" className={`text-white`}>Esmu skolotājs/-a</label></div>
                        <div><input type="radio" name={"role"} value={`student`} onChange={(e)=>setRole(e.target.value)}/> <label htmlFor="studentRadio" className={`text-white`}>Esmu students/-e</label></div>
                        <div className={`text-white`}>Jau ir konts? <Link to={`/login`} className={`text-blue-700 font-black`}>Spied šeit</Link></div>
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
                        width={`90%`}
                        height={`6%`}
                        className="md:!w-[45%]">
                        <button className={`bg-transparent w-full h-full text-white`} onClick={handleRegister}>Reģistrēties</button>
                    </GlassSurface>

                </div>
            </div>

            <div className={`hidden w-1/3 h-full bg-black md:flex flex-col justify-around items-start`}>
                <h1 className="text-white text-[clamp(1.8vw,5.5vw,7.8rem)] font-extrabold font-[Orbitron] rotate-90 ml-[-20%] mt-[10%]">
                    NEW WAY<br />TO<br />SCHEDULE
                </h1>
                <div className="w-full text-white font-light flex items-center justify-center text-[clamp(0.5rem,0.9vw,1rem)] text-right">
                    Kļūsti par skolotāju, paplašini savu auditoriju, organizē nodarbības un pelni ar savām prasmēm vienā platformā.
                </div>
                <div className="w-full text-white font-light flex items-center justify-center text-[clamp(0.5rem,0.9vw,1rem)] text-left">
                    Atrodi sev piemērotāko skolotāju, rezervē nodarbības ērtā laikā un attīsti savas prasmes ar individuālu pieeju vienuviet.
                </div>
            </div>
        </div>
    );
}
