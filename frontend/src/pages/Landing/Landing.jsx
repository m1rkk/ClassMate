import NavBar from "../../shared/ui/NavBar";
import HeroSection from "./HeroSection";
import AboutSection from "@/pages/Landing/AboutSection";
import TutorSection from "@/pages/Landing/TutorSection";
export default function Landing() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
        <HeroSection />
        <AboutSection />
        <TutorSection />
        </div>
    );
}