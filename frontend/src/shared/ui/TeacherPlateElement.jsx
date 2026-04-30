import GlassSurface from "@/components/ui/GlassSurface";

export default function TeacherPlateElement({name, surname, subject}) {
    return(
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
            height={`40%`}
            className="md:w-[50%]! md:h-[15%]!">
            <div className={`w-full h-full flex flex-row justify-between items-center p-4`}>
                <div className={`flex flex-col items-start justify-center gap-2 w-[40%]`}>
                    <p className={`font-bold text-xl text-white w-full`}>{name} {surname}</p>
                    <p className={`text-lg font-thin text-white`}>{subject}</p>
                </div>
                <div className={`flex flex-col items-end justify-center gap-2 w-[40%]`}>
                    <p className={`text-2xl text-white`}>★★★★★</p>
                    <p className={`text-lg font-thin text-white`}>Rīga</p>
                </div>
            </div>
        </GlassSurface>
    )
}