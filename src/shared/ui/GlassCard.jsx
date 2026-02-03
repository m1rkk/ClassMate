import LiquidGlass from "liquid-glass-react";
export default function GlassCard() {
    return (
        <div className={`absolute top-1/2 flex items-center justify-center w-1/4 h-1/6`}>
            <LiquidGlass  displacementScale={64}   blurAmount={0.1}   saturation={130}   aberrationIntensity={2}   elasticity={0.35}   cornerRadius={100}   padding="8px 16px">
                <div className="absolute top-0.5 w-[200px] h-[200px] bg-white">

                </div>
            </LiquidGlass>
        </div>
  );
}
