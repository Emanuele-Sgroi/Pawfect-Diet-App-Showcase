// components/AboutSectionBlock.jsx
import Image from "next/image";

export default function AboutSectionBlock({
  title,
  text,
  image,
  reverse = false,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div className="w-full md:w-1/2 text-primary px-4">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-base leading-relaxed text-secondary">{text}</p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 px-4">
        <Image
          src={image}
          alt={title}
          className="rounded-lg shadow-lg object-cover"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}
