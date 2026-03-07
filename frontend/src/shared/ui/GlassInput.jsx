import GlassSurface from "@/components/ui/GlassSurface";

export default function GlassInput( {placeholder,width = "45%", height = "6%"}) {
    return(
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
        width={width}
        height={height}>
        <input type='text' placeholder={placeholder} className={`bg-transparent w-full h-full placeholder-white focus:outline-none text-white placeholder:text-lg`}/>
    </GlassSurface>
    )
}
