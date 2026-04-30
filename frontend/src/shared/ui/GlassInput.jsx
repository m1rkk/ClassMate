import GlassSurface from "@/components/ui/GlassSurface";
import {useState} from "react";

export default function GlassInput(
    {placeholder,
        width = "45%",
        height = "6%",
    onChange,
    value,
    className}) {
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
        width={width}
        height={height}
        className={className}>
        <input value={value} onChange={onChange} type='text' placeholder={placeholder} className={`bg-transparent w-full h-full placeholder-white focus:outline-none text-white placeholder:text-lg`}/>
    </GlassSurface>
    )
}
