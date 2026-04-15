import profilePic from "@/assets/imgs/profilePic.png"
import {me,getRoleByPerson, deletePerson} from  "@/shared/Api";
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

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const handleDeleteAccount = async () => {
        if (!personId || isDeleting) {
            return;
        }

        const isConfirmed = window.confirm(
            "Are you sure you want to delete your account? This action cannot be undone."
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
            window.alert("Failed to delete account.");
        } finally {
            setIsDeleting(false);
        }
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
                    <button
                        onClick={handleDeleteAccount}
                        disabled={isDeleting || isLoading}
                        className={`bg-[#FF6262] border-none rounded-lg p-1 w-1/2 text-white disabled:opacity-60 disabled:cursor-not-allowed`}
                    >
                        {isDeleting ? "Deleting..." : "Delete Account"}
                    </button>
                </div>
            </div>
        </div>
    )
}
