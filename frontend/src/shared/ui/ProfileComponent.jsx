import profilePic from "@/assets/imgs/profilePic.png"
import {me,getRoleByPerson} from  "@/shared/Api";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileComponent() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [city, setCity] = useState("");
    const [role, setRole] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

       const loadProfile = async () => {
           try {
               setIsLoading(true);
               const profile = await me();
               const role = await getRoleByPerson(profile.LietotajaId);
               if(isMounted){
                   setName(profile.Vards);
                   setSurname(profile.Uzvards);
                   setCity(profile.AtrasanasVieta);
                   setRole(role);
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

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className={`flex flex-row items-center justify-center w-1/3 gap-2`}>
            <img src={profilePic} alt="" className="w-1/6"/>
            <div className="flex flex-col items-center justify-center w-full">
                <div className={`text-2xl text-white w-full`}>
                    {isLoading && (<div className={`w-40 h-5 animate-pulse bg-white/20`}></div>)}
                    {!isLoading && name + " " + surname}
                </div>
                <div className={`text-base text-white w-full`}>
                    {isLoading && (<div className={`w-20 h-5 animate-pulse bg-white/20 pt-2`}></div>)}
                    {!isLoading && city + ", " + role}
                </div>
                <div className={`flex flex-row items-center justify-start w-full mt-[5%] gap-6`}>
                    <button onClick={handleLogout} className={`bg-white border-none rounded-lg p-1 w-[35%]`}>
                        Log out
                    </button>
                    <button className={`bg-[#FF6262] border-none rounded-lg p-1 w-1/2 text-white`}>
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    )
}
