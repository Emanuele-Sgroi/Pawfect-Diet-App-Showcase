import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-sm text-light text-center sm:text-left">
          &copy; {new Date().getFullYear()} Emanuele Sgroi. All rights reserved.
        </p>

        <div className="flex gap-6 text-xl text-light">
          <a
            href="https://www.emanuelesgroi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
            aria-label="Website"
          >
            <FaGlobe />
          </a>
          <a
            href="https://www.linkedin.com/in/emanuele-sgroi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Emanuele-Sgroi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
