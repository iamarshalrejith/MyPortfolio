const PROJECTS = [
  {
    name: "WedCraft",
    tagline: "Full Stack SaaS Wedding Invitation Platform",
    period: "Mar 2026 – Apr 2026",
    description:
      "Sole developer of a production SaaS platform for customizable digital wedding invitations — 23+ templates, subscription-based monetization, secure Razorpay payments with HMAC verification and webhooks, Google OAuth, and admin/user dashboards with RSVP tracking, QR codes, and analytics.",
    stack: ["Next.js 15", "TypeScript", "MongoDB Atlas", "Razorpay", "Google OAuth", "Cloudinary", "Vercel"],
    live: "https://wedcraft.in",
    github: "https://github.com/iamarshalrejith/WedCraft",
    featured: true,
  },
  {
    name: "GoOrbit",
    tagline: "Distributed Peer-to-Peer File Storage System",
    period: "Jun 2026 – Jul 2026",
    description:
      "Decentralized P2P file storage system in Go with custom TCP transport, peer discovery, and content-addressable storage. Concurrent networking layer using goroutines and channels with RPC communication, AES file encryption, and stream-based large file transfer.",
    stack: ["Go", "TCP Networking", "Content-Addressable Storage", "AES Encryption"],
    github: "https://github.com/iamarshalrejith/GoOrbit",
  },
  {
    name: "DownX",
    tagline: "AI-Powered Inclusive Learning Platform",
    period: "Sep 2025 – Apr 2026",
    description:
      "AI-powered learning platform for students with Down syndrome — Google Gemini API turns teacher instructions into accessible content, with MediaPipe and TensorFlow.js for real-time gesture-based interaction. Three adaptive modules including speech therapy and gamified activities with WCAG-compliant frontend.",
    stack: ["MERN Stack", "Google Gemini API", "TensorFlow.js", "MediaPipe", "Redux Toolkit"],
    github: "https://github.com/iamarshalrejith/DownX",
  },
];

const ProjectCard = ({ project }) => (
  <div
    className={`rounded-xl border border-gray-800 bg-[#0d0f14] overflow-hidden flex flex-col ${
      project.featured ? "md:col-span-2" : ""
    }`}
  >
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-800 bg-[#111318]">
      <span className="w-3 h-3 rounded-full bg-red-500/70" />
      <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
      <span className="w-3 h-3 rounded-full bg-green-500/70" />
      <span className="ml-3 text-xs font-mono text-gray-500">
        {project.name.toLowerCase()}.jsx
      </span>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-100">{project.name}</h3>
          <p className="text-sm text-blue-400 font-mono mt-1">{project.tagline}</p>
        </div>
        <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{project.period}</span>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mt-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2.5 py-1 rounded-md border border-gray-800 text-gray-400 bg-black/40"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-6 font-mono text-sm">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            live_site ↗
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors"
        >
          source_code ↗
        </a>
      </div>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-blue-400 mb-3">
          <span className="text-gray-500">// </span>03. projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12">
          Things I've built
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};