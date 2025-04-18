import HeroSection from "@/components/HeroSection";
import AboutSectionBlock from "@/components/AboutSectionBlock";
import images from "@/utils/importImages";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section id="about" className="min-h-screen px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <AboutSectionBlock
            title="Why Pawfect Diet?"
            text="Pawfect Diet was created to help pet owners build balanced, AI-powered nutrition plans for their furry friends. After noticing a gap in existing apps, I created this during my Computer Science dissertation."
            image={images.about1}
          />

          <AboutSectionBlock
            title="How It Works"
            text="By answering a few simple questions, users receive a custom meal plan tailored to their pet’s needs — all generated using intelligent logic I built from scratch."
            image={images.about2}
            reverse
          />
        </div>
      </section>
    </main>
  );
}
