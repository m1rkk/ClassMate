import NavBar from "../../shared/ui/NavBar";
import HeroSection from "./HeroSection";
import AboutSection from "@/pages/Landing/AboutSection";
import TutorSection from "@/pages/Landing/TutorSection";
import PricingSection from "@/pages/Landing/PricingSection";

export default function Landing() {
    return (
        <div className="flex min-h-screen w-full flex-col items-stretch justify-start overflow-x-hidden gap-10">
            <HeroSection />
            <AboutSection />
            <TutorSection />
            <PricingSection />
        </div>
    );
}
