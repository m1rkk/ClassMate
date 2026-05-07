import profilePic from "@/assets/imgs/profilePic.png"
import {deletePerson} from  "@/shared/Api";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileComponent() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [city, setCity] = useState("");
    const [role, setRole] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [personId, setPersonId] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let isMounted = true;

       const loadProfile = async () => {
           try {
               setIsLoading(true);

               if(isMounted){
                   setPersonId(localStorage.getItem("userId"));
                   setName(localStorage.getItem("name"));
                   setSurname(localStorage.getItem("surname"));
                   setCity(localStorage.getItem("city"));
                   setRole(localStorage.getItem("role"));
               }
           }catch (e) {
               if(isMounted){
                   console.log(e);
               }
           }finally {
               if(isMounted){
                   setIsLoading(false);
               }
           }
       };
       loadProfile();
       return () => {
           isMounted = false;
       }
    },[]);

    const roleLabel = role === "teacher" ? "skolotājs" : role === "student" ? "students" : role;

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const handleDeleteAccount = async () => {
        if (!personId || isDeleting) {
            return;
        }

        const isConfirmed = window.confirm(
            "Vai tiešām vēlies dzēst kontu? Šo darbību nevar atsaukt."
        );

        if (!isConfirmed) {
            return;
        }

        try {
            setIsDeleting(true);
            await deletePerson(personId);
            localStorage.clear();
            navigate("/login");
        } catch (e) {
            console.log(e);
            window.alert("Neizdevās dzēst kontu.");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white/10 p-4 sm:flex-row sm:items-start sm:gap-5 sm:p-5 md:col-span-2 xl:w-1/3 xl:flex-row xl:items-center xl:gap-2 xl:bg-transparent xl:p-0">
            <img src={profilePic} alt="" className="w-20 shrink-0 sm:w-24 xl:w-1/6"/>
            <div className="flex w-full flex-col items-center justify-center text-center sm:items-start sm:text-left">
                <div className="w-full break-words text-2xl text-white">
                    {isLoading && (<div className={`w-40 h-5 animate-pulse bg-white/20`}></div>)}
                    {!isLoading && name + " " + surname}
                </div>
                <div className="w-full text-base text-white">
                    {isLoading && (<div className={`w-20 h-5 animate-pulse bg-white/20 pt-2`}></div>)}
                    {!isLoading && city + ", " + roleLabel}
                </div>
                <div className="mt-4 flex w-full flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center sm:gap-4 xl:mt-[5%] xl:gap-6">
                    <button onClick={handleLogout} className="w-full rounded-lg border-none bg-white p-2 sm:w-[35%]">
                        Izrakstīties
                    </button>
                    <button
                        onClick={handleDeleteAccount}
                        disabled={isDeleting || isLoading}
                        className="w-full rounded-lg border-none bg-[#FF6262] p-2 text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-1/2"
                    >
                        {isDeleting ? "Dzēš..." : "Dzēst kontu"}
                    </button>
                </div>
            </div>
        </div>
    )
}
