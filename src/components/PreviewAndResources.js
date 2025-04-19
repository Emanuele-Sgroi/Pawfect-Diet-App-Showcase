import images from "@/utils/images"; // assuming qrCode is exported here
import { FaGithub } from "react-icons/fa";

export default function PreviewAndResources() {
  return (
    <section className="py-20 px-6 bg-[#f9f9f9] text-primary" id="resources">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Preview the App</h2>
        <p className="text-secondary mb-6">
          If you have the <strong>Expo Go</strong> app installed on your phone,
          you can preview Pawfect Diet by scanning the QR code below. Depending
          on your version of Expo Go, you might be prompted to upgrade or
          downgrade.
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-4">
          <img
            src={images.qrCode.src}
            alt="QR code to preview the app"
            className="w-[200px] h-[200px] rounded-xl shadow-md"
          />
        </div>

        {/* Backup Link */}
        <p className="text-secondary text-sm mb-12">
          If the QR code doesn’t work, you can open the app directly from this
          link:{" "}
          <a
            href="https://expo.dev/preview/update?message=Initial%20launch%20of%20Pawfect%20Diet%20with%20core%20features.&updateRuntimeVersion=1.0.0&createdAt=2024-03-29T18%3A10%3A20.077Z&slug=exp&projectId=7681adb9-3520-47a1-a9bb-b7451d9f62f2&group=8df0bb17-9238-425c-8f1d-ff030883e117"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Open Pawfect Diet in Expo
          </a>
        </p>

        <h3 className="text-2xl font-semibold mb-6">Project Resources</h3>
        <p className="text-secondary mb-8">
          Learn more about the research, methodology, and technical aspects
          behind this app.
        </p>

        {/* Resource Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/docs/dissertation.pdf"
            download
            className="bg-[#070c2c] text-white px-6 py-3 rounded-md shadow hover:opacity-90 transition"
          >
            Download Dissertation
          </a>
          <a
            href="/docs/poster.pdf"
            download
            className="bg-[#070c2c] text-white px-6 py-3 rounded-md shadow hover:opacity-90 transition"
          >
            Download Poster
          </a>
          <a
            href="https://github.com/your-username/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-md shadow hover:opacity-90 flex items-center gap-2 justify-center transition"
          >
            <FaGithub className="text-xl" /> View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
