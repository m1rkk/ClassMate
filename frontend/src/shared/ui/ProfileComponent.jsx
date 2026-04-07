import profilePic from "@/assets/imgs/profilePic.png"
export default function ProfileComponent({name,surname, city, role}) {
    return (
        <div className={`flex flex-row items-center justify-center w-1/3 gap-2`}>
            <img src={profilePic} alt="" className="w-1/6"/>
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className={`text-2xl text-white w-full`}>{name + " " + surname}</h1>
                <p className={`text-base text-white w-full`}>{city + ", " + role}</p>
                <div className={`flex flex-row items-center justify-start w-full mt-[5%] gap-6`}>
                    <button className={`bg-white border-none rounded-lg p-1 w-[35%]`}>
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
