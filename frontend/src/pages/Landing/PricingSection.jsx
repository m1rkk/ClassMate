import PricingCard from "@/pages/Landing/PricingCard";

export default function PricingSection() {
    const freeFeatures = [
        "Browse and search teachers",
        "Book lessons",
        "Basic lesson calendar",
        "Lesson history tracking",
        "Rate and review teachers"
    ];
    const basicFeatures = [
        "Everything in Free",
        "Unlimited lesson bookings",
        "Full lesson history",
        "Advanced calendar & scheduling",
        "Lesson reminders (email/notifications)"
    ];
    const proFeatures = [
        "Everything in Basic",
        "Priority booking visibility",
        "Teacher profile boost",
        "Advanced analytics (progress & earnings)",
        "Custom lesson packages"
    ];
    return(
        <section className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className={`text-[10rem] font-bold font-[Orbitron] text-white`}>CENAS</h1>
            <div className={`w-[80%] h-[60%] flex flex-row items-start justify-center gap-[2%] -mt-20`}>
                <PricingCard price={"free"} planName={"free"} features={freeFeatures}/>
                <PricingCard price={"2$"} planName={"basic"} features={basicFeatures}/>
                <PricingCard price={"6$"} planName={"pro"} features={proFeatures}/>
            </div>
        </section>
    )
}