import { useEffect, useState } from "react";
import heroImg from "../../assets/hero.jpg";

const ROLE = "Full Stack Developer";
const SOCIALS = [
  { label: "github", href: "https://github.com/iamarshalrejith" },
  { label: "linkedin", href: "https://linkedin.com/in/arshal-rejith17" },
  { label: "leetcode", href: "https://leetcode.com/u/arshalrejith" },
  { label: "mail", href: "mailto:iamarshalrejith@gmail.com" },
];

export const Home = () => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(ROLE.slice(0, i));
      if (i === ROLE.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <p className="font-mono text-sm text-blue-400 mb-4">
            <span className="text-gray-500">// </span>hello_world.js
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-100">
            Arshal Rejith S
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-mono text-gray-400 h-8">
            {typed}
            <span className="inline-block w-2 h-5 bg-blue-500 ml-1 align-middle animate-blink" />
          </p>

          <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
            Final-year CS undergrad who ships production software solo — from
            payments and auth to deployment. Builder of{" "}
            <a
              href="https://wedcraft.in"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              WedCraft
            </a>
            , a live SaaS platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2.5 rounded-md bg-blue-500 text-black font-mono text-sm font-medium hover:bg-blue-400 transition-colors"
            >
              view_projects()
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2.5 rounded-md border border-gray-700 font-mono text-sm text-gray-200 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
            >
              get_in_touch()
            </a>
          </div>

          <div className="mt-8 flex gap-5 font-mono text-sm text-gray-500">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-gray-800 bg-[#0d0f14] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-800 bg-[#111318]">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs font-mono text-gray-500">arshal.jsx</span>
            </div>
            <img src={heroImg} alt="Arshal Rejith S" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};