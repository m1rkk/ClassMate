import GlassSurface from "@/components/ui/GlassSurface";
import profilePic from "@/assets/imgs/profilePic.png"
export default function PersonCatalogObject ({key, name, surname, rating = 0, city}) {
    return(
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
          width={`9vw`}
          height={`25vh`}
            style={{marginBottom: '4%'}}>
            <div className="w-full h-full flex flex-col items-center justify-center gap-5 mt-4">
                <img src={profilePic} alt="" className={`w-[40%]` }/>
                <div className={`flex flex-col items-center justify-center w-full`}>
                    <p className={`text-white`}>{name} {surname}</p>
                    <p className={`text-white`}>{city}</p>
                    {rating === 0 && <p className={`text-white`}></p>}
                    {rating > 0 && <div className={`flex flex-row items-center justify-center w-full`}>
                        ({[...Array(rating)].map((_, idx) => (
                        <p key={idx}>⭐</p>
                    ))})
                    </div>}
                </div>
                <button className="bg-white text-black w-[80%] p-2 rounded-lg">
                    View
                </button>
            </div>
        </GlassSurface>
    )
}