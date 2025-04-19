import { FaReact } from "react-icons/fa";
import { SiExpo, SiTensorflow, SiFirebase, SiOpenai } from "react-icons/si";
import Marquee from "react-fast-marquee";

const techItems = [
  {
    icon: <FaReact className="text-3xl md:text-4xl text-gray-400" />,
    label: "React Native",
  },
  {
    icon: <SiExpo className="text-3xl md:text-4xl text-gray-400" />,
    label: "Expo",
  },
  {
    icon: <SiTensorflow className="text-3xl md:text-4xl text-gray-400" />,
    label: "TensorFlow",
  },
  {
    icon: <SiOpenai className="text-3xl md:text-4xl text-gray-400" />,
    label: "OpenAI",
  },
  {
    icon: <SiFirebase className="text-3xl md:text-4xl text-gray-400" />,
    label: "Firebase",
  },
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-20 px-6 bg-white text-primary overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold ">Technologies Used</h2>
        <p className="text-secondary max-w-2xl mx-auto mt-6 md:mt-8 mb-12 md:mb-16">
          The app was built with React Native and Expo to ensure a smooth mobile
          experience. I used TensorFlow for breed recognition, OpenAI models for
          the AI features, and Firebase to handle data and authentication.
        </p>

        <Marquee
          gradient={true}
          gradientColor="#ffffff"
          gradientWidth={100}
          speed={40}
          pauseOnHover={false}
          autoFill={true}
        >
          {techItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 min-w-[150px] mx-4 py-2 md:py-4 px-4 md:px-6 rounded-xl shadow-sm bg-gradient-to-r from-gray-100 via-white to-gray-100"
            >
              {item.icon}
              <span className="text-sm md:text-[18px] font-bold text-primary uppercase !text-gray-400">
                {item.label}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
