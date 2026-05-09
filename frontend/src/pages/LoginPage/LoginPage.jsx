import Dither from "@/components/ui/Dither";
import GlassInput from "@/shared/ui/GlassInput";
import GlassSurface from "@/components/ui/GlassSurface";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {getRoleByPerson, getStudentByPerson, login, me,getTeacherByPerson} from "@/shared/Api";

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (loginError) {
            setLoginError("");
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (loginError) {
            setLoginError("");
        }
    };

    const handleLogin = async () => {
        if (isLoading) return;
        setLoginError("");
        setIsLoading(true);
        try {
            await login(email, password);
            const user = await me();
            if (!user.LietotajaId) {
                throw new Error("User id not found");
            }
            localStorage.setItem('userId', user?.LietotajaId);
            localStorage.setItem('name', user?.Vards);
            localStorage.setItem('surname', user?.Uzvards);
            localStorage.setItem('city', user?.AtrasanasVieta);

            const role = await getRoleByPerson(user?.LietotajaId);

            if(role === "student"){
                localStorage.setItem('role', "student");
                const student = await getStudentByPerson(localStorage.getItem('userId'));
                if (!student.StudentuId) {
                    throw new Error("Student id not found");
                }
                localStorage.setItem('studentId', student?.StudentuId);
            }else if(role === "teacher"){
                localStorage.setItem('role', "teacher");
                console.log(localStorage.getItem('userId'));
                const teacher = await getTeacherByPerson(localStorage.getItem('userId'));
                if (!teacher.SkolotajaId) {
                    throw new Error("Teacher id not found");
                }
                localStorage.setItem('teacherId', teacher?.SkolotajaId);
            }else{
                throw new Error("Role not found");
            }
            console.log(localStorage.getItem('role'));

            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            const status = error?.response?.status;
            if (status === 401 || status === 422 || status === 400) {
                setLoginError("Nepareizs e-pasts vai parole.");
            } else {
                setLoginError("Neizdevās pieslēgties. Mēģini vēlreiz.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`relative w-full min-h-screen bg-black flex flex-col md:h-screen md:flex-row md:justify-between md:items-center`}>
            {loginError && (
                <div className="fixed left-1/2 top-6 z-[60] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl bg-red-600 px-4 py-3 text-center text-sm font-medium text-white shadow-lg" role="alert" aria-live="assertive">
                    {loginError}
                </div>
            )}

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
                    <GlassInput placeholder={"e-pasts:"} onChange={handleEmailChange} value={email} width="90%" className="md:!w-[45%]"/>
                    <GlassInput placeholder={"parole:"} type={"password"} onChange={handlePasswordChange} value={password} width="90%" className="md:!w-[45%]"/>

                    <div className={`flex items-center justify-start gap-4 w-[90%] md:w-[45%]`}>
                        <div className={`text-white`}>Nav konta? <Link to={`/register`} className={`text-blue-700 font-black`}>Spied šeit</Link></div>
                    </div>

                    <GlassSurface
                        displace={1} //blur
                        distortionScale={150} //angle
                        redOffset={30}
                        greenOffset={10}
                        blueOffset={20}
                        brightness={50}
                        opacity={50}
                        backgroundOpacity={0.01}
                        mixBlendMode="difference"
                        width={`90%`}
                        height={`6%`}
                        className="md:!w-[45%]">
                        <button className={`bg-transparent w-full h-full text-white text-lg disabled:opacity-60 disabled:cursor-not-allowed`}
                                disabled={isLoading}
                                onClick={handleLogin}>Pieslēgties</button>
                    </GlassSurface>

                </div>
            </div>

            <div className={`hidden w-1/3 h-full bg-black md:flex flex-col justify-around items-start`}>
                <h1 className="text-white text-[clamp(1.8vw,5.5vw,7.8rem)] font-extrabold font-[Orbitron] rotate-90 ml-[-20%] mt-[10%]">
                    NEW WAY<br />TO<br />SCHEDULE
                </h1>
                <div className="w-full text-white font-light flex items-center justify-center text-[clamp(0.5rem,0.9vw,1rem)] text-right">
                    Atrodi sev piemērotāko skolotāju, rezervē nodarbības ērtā laikā un attīsti savas prasmes ar individuālu pieeju vienuviet.
                </div>
                <div className="w-full text-white font-light flex items-center justify-center text-[clamp(0.5rem,0.9vw,1rem)] text-left">
                    Pievienojies kā skolotājs, veido savu grafiku, piesaisti jaunus studentus un pelni, daloties ar savām zināšanām.
                </div>
            </div>

            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white">
                    <Dither
                        waveColor={[0.5,0.5,0.5]}
                        disableAnimation={false}
                        enableMouseInteraction
                        mouseRadius={0.1}
                        colorNum={4}
                        waveAmplitude={0.4}
                        waveFrequency={3}
                        waveSpeed={0.03}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[90vw] max-w-[22rem]">
                            <GlassSurface
                                saturation={1}
                                backgroundOpacity={0.1}
                                borderWidth={0.08}
                                brightness={45}
                                opacity={0.85}
                                blur={4}
                                displace={0.6}
                                distortionScale={30}
                                redOffset={0}
                                greenOffset={0}
                                blueOffset={0}
                                mixBlendMode="normal"
                                width={`100%`}
                                height={`14rem`}>
                                <div className="h-full w-full flex items-center justify-center">
                                    <div className="h-14 w-14 animate-spin rounded-full border-4 border-white border-t-transparent" />
                                </div>
                            </GlassSurface>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
