"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";
import images from "@/utils/importImages";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-center items-center text-white"
    >
      {/* Background Image */}
      <Image
        src={images.hero_bg}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Centered Logo */}
      <div className="z-20 flex flex-col items-center">
        <Image
          src={images.logo_white}
          alt="App Logo"
          width={200}
          height={200}
          className="mb-4 w-[100px] h-auto max-w-[80%]"
        />
        <h1 className="text-8xl chewy-font font-bold ">Pawfect Diet</h1>
        <h2 className="mt-4 font-medium text-secondary">
          Advancing Canine Nutrition with AI-Driven Personalised Solutions in a
          Mobile Application
        </h2>
      </div>

      {/* Scroll Arrow */}
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className="absolute bottom-10 z-20 cursor-pointer"
      >
        <FaChevronDown className="text-3xl animate-bounce" />
      </ScrollLink>
    </section>
  );
}
