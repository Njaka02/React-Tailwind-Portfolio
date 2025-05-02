import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AbouSection from "../components/AboutMe";
import ThemeToggle from "../components/ThemeToggle";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Them Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
          <HeroSection />
          <AbouSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
