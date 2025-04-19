import HeroSection from "@/components/HeroSection";
import AboutSectionBlock from "@/components/AboutSectionBlock";
import FeatureBlock from "@/components/FeatureBlock";
import TechStack from "@/components/TechStack";
import PreviewAndResources from "@/components/PreviewAndResources";
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
      <section id="features" className="py-20 px-6 bg-[#070c2c] text-primary">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 white_outline text-secondary">
            The App
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-secondary-light">
            Built as my final-year Computer Science dissertation project,
            Pawfect Diet is a fully working MVP designed to demonstrate how
            technology, and a bit of AI, can help pet owners care for their dogs
            in a smarter way.
          </p>
        </div>

        <FeatureBlock
          title="Getting Started: From Signup to Smart Profiles"
          text="Setting up Pawfect Diet is quick, detailed, and designed to feel personal. After registering or logging in, users can create rich dog profiles through a guided multi-step process. The app asks all the right questions, from age and size to activity level, to understand each dog’s specific needs. For users who are unsure about their dog’s breed, there's even an integrated breed recognition feature to help identify it accurately. Plus, managing multiple dogs is easy with the ability to switch between profiles effortlessly."
          images={[
            images.block1_1,
            images.block1_2,
            images.block1_3,
            images.block1_4,
            images.block1_5,
            images.block1_6,
            images.block1_7,
            images.block1_8,
            images.block1_9,
            images.block1_10,
            images.block1_11,
            images.block1_12,
          ]}
        />
        <FeatureBlock
          title="Your Dog’s Dashboard & Daily Log"
          text="The dashboard looks and feels like a professional diet-tracking app, but for dogs. It includes calories, weight tracking, tips, reminders, and more. While only the calorie tracker is functional in this MVP, the interface is designed to reflect a complete vision. In the Daily Log section, users can manually input meals or ask the AI for help. Logs can be navigated across different days, and special considerations exist for working dogs or those with active routines. At the end of the day, users can close the day, triggering the AI to analyse and offer custom feedback."
          images={[
            images.block2_1,
            images.block2_2,
            images.block2_3,
            images.block2_4,
            images.block2_5,
            images.block2_6,
            images.block2_7,
            images.block2_8,
            images.block2_9,
            images.block2_10,
            images.block2_11,
            images.block2_12,
            images.block2_13,
          ]}
          reverse={true}
        />
        <FeatureBlock
          title="Vet Care: Your Dog’s Personal Vet"
          text="Vet Care is an AI-powered chat designed to feel like a real conversation with a vet. The AI has full visibility over your dog's profile and daily log, so it can provide informed and specific advice. Whether asking about symptoms, feeding adjustments, or general care, the AI can tailor its answers to the dog currently selected. To make interactions even smoother, the system detects phrases like “my dog lost 2 kilos” and prompts users to update the relevant info directly, making updates intuitive and fast."
          images={[
            images.block3_1,
            images.block3_2,
            images.block3_3,
            images.block3_4,
          ]}
        />
        <FeatureBlock
          title="Goals, Food & Beyond"
          text="Once a dog’s profile is created, the app automatically generates nutritional goals based on real veterinary studies, offering reliable, personalised targets. The food logging feature is connected to a simulated food database in this MVP, but it’s built with scalability in mind. Future iterations will allow barcode scanning and integrations with real pet food databases. Users can also create and save custom foods, making the app flexible for different diets and routines. From gender to activity type to sterilisation status, the system adapts to each dog’s reality."
          images={[
            images.block4_1,
            images.block4_2,
            images.block4_3,
            images.block4_4,
            images.block4_5,
            images.block4_6,
            images.block4_7,
          ]}
          reverse={true}
        />

        <div className="mt-16 md:mt-24 text-center">
          <h3 className="text-2xl md:text-4xl font-semibold white_outline text-secondary mb-10">
            Check out the app in this presentation video
          </h3>
          <div className="relative w-full md:max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vASeMwaatgk"
              title="Pawfect Diet App Presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
      <TechStack />
      <PreviewAndResources />
    </main>
  );
}
