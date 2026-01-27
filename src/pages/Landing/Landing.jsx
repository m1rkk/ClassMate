import NavBar from "../../shared/ui/NavBar";
import HeroSection from "./HeroSection";
export default function Landing() {
    return (
        <div className="flex flex-col items-center justify-center">
        <NavBar />
        <HeroSection />
        </div>
    );
}