import HeroSection from "@/components/HeroSection";
import AboutSectionBlock from "@/components/AboutSectionBlock";
import images from "@/utils/importImages";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section
        id="about"
        className="min-h-screen px-4 sm:px-6 py-12 md:py-28 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <AboutSectionBlock
            title="Where Passion Meets Purpose"
            text="I’ve always been passionate about IT and development, it’s what led me to study Computer Science. But if there’s something I love even more, it’s animals. A few months before starting my dissertation, I adopted a puppy. It was an incredible joy, but also a big responsibility. Feeding a dog sounds simple, but I quickly learned there’s so much more to it. Every day brought new questions, and I couldn’t find an app that truly guided me in a helpful or engaging way."
            image={images.about1}
          />
          <div className="my-12 md:my-20" />
          <AboutSectionBlock
            title="From Puppy Chaos to AI-Powered Solution"
            text="That’s when the idea for Pawfect Diet began to take shape. I wanted to create something meaningful, an app that could actually support dog owners in feeding their pets properly. But I didn’t want a basic solution. I wanted to make it intelligent. I envisioned a tool powered by Artificial Intelligence that could adapt to each dog’s unique needs. Before jumping into development, I spent weeks researching, interviewing dog owners and veterinarians, and shaping a real-world solution backed by data and empathy."
            image={images.about2}
            reverse
          />
        </div>
      </section>
      <section id="features" className="py-20 px-6 bg-[#f9f9f9] text-primary">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The App</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Pawfect Diet isn’t just another feeding tracker. It’s a smart
            assistant for pet owners, designed to provide personalised meal
            plans through a sleek and friendly experience.
          </p>
        </div>

        {/* Feature blocks go here */}
      </section>
    </main>
  );
}
