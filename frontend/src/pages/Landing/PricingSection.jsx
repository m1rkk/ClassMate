import PricingCard from "@/pages/Landing/PricingCard";
import {useNavigate} from "react-router-dom";

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
        <section className="w-full min-h-screen flex flex-col items-center justify-start py-8 md:py-0">
            <h1 className={`text-5xl sm:text-7xl md:text-[10rem] font-bold font-[Orbitron] text-white text-center px-4 mb-8 md:mb-0`}>CENAS</h1>
            <div className={`w-[90%] h-full md:w-[80%] md:h-screen flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-[2%] md:-mt-10`}>
                <PricingCard price={"free"} planName={"free"} features={freeFeatures}/>
                <PricingCard price={"2$"} planName={"basic"} features={basicFeatures}/>
                <PricingCard price={"6$"} planName={"pro"} features={proFeatures}/>
            </div>
        </section>
    )
}