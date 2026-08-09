const SKILLS = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C/C++"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "GSAP", "Framer Motion"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT", "OAuth", "WebSockets"],
  },
  {
    group: "Databases",
    items: ["MongoDB Atlas", "MySQL", "Firebase", "ChromaDB"],
  },
  {
    group: "AI & ML",
    items: ["LangChain", "RAG Pipelines", "CrewAI", "TensorFlow.js", "MediaPipe"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Linux", "Vercel", "Razorpay", "Cloudinary"],
  },
];

const STATS = [
  { label: "years coding", value: "3+" },
  { label: "projects shipped", value: "4" },
  { label: "live SaaS product", value: "1" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-blue-400 mb-3">
          <span className="text-gray-500">// </span>02. about
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12">
          A bit about me
        </h2>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <p className="text-gray-400 leading-relaxed">
              I'm a final-year Computer Science undergraduate (IoT specialization) at
              Shiv Nadar University, Chennai, graduating May 2027. I build production
              software end to end — I independently designed, built, and launched{" "}
              <a
                href="https://wedcraft.in"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                WedCraft
              </a>
              , a live SaaS platform for digital wedding invitations with real payments,
              subscriptions, and cloud deployment.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              I also completed a Machine Learning internship at Infosys Springboard,
              building an AI-powered hospitality assistant using RAG pipelines that cut
              query resolution time by 35%.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-gray-800 rounded-lg px-4 py-3 bg-[#0d0f14]"
                >
                  <p className="text-2xl font-bold text-blue-400 font-mono">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-xl border border-gray-800 bg-[#0d0f14] overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-800 bg-[#111318]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs font-mono text-gray-500">skills.json</span>
              </div>
              <div className="p-6 grid sm:grid-cols-2 gap-6">
                {SKILLS.map((group) => (
                  <div key={group.group}>
                    <p className="font-mono text-xs text-blue-400 mb-2">
                      "{group.group}":
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono px-2.5 py-1 rounded-md border border-gray-800 text-gray-300 bg-black/40"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};