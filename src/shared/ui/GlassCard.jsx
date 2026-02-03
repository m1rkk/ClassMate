export function LiquidGlassCard({ children }) {
    return (
        <div className="absolute top-1/2 left-1/2 z-1">
            {/* glow */}
            <div className="
        absolute -inset-1
        bg-linear-to-r from-white/20 via-white/10 to-white/20
        rounded-3xl
        blur-xl opacity-10
        group-hover:opacity-100
        transition
      "/>

            {/* glass */}
            <div className="
        relative
        rounded-3xl
        backdrop-blur-[2px]
        bg-white/10
        border border-white/20
        shadow-xl
        p-6
      ">
                {children}
            </div>
        </div>
    )
}
