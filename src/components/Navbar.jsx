import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "home.jsx" },
  { id: "about", label: "about.jsx" },
  { id: "projects", label: "projects.jsx" },
  { id: "contact", label: "contact.jsx" },
];

export const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("home")}
          className="font-mono text-sm text-gray-100 flex items-center gap-1.5 group"
        >
          <span className="text-blue-500">~/</span>
          <span className="group-hover:text-blue-400 transition-colors">arshal</span>
          <span className="w-2 h-4 bg-blue-500 animate-blink" />
        </button>

        <div className="hidden md:flex items-center gap-1 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-1.5 rounded-md border transition-colors ${
                active === item.id
                  ? "border-blue-500/40 bg-blue-500/10 text-blue-400"
                  : "border-transparent text-gray-400 hover:text-gray-100 hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="/Arshal_Rejith_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm font-mono border border-gray-700 rounded-md px-3 py-1.5 text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
        >
          resume.pdf
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-gray-100 font-mono text-sm border border-gray-700 rounded-md px-3 py-1.5"
          aria-label="Toggle menu"
        >
          {menuOpen ? "close()" : "menu()"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 px-6 py-4 flex flex-col gap-2 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left px-3 py-2 rounded-md ${
                active === item.id ? "text-blue-400 bg-blue-500/10" : "text-gray-400"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Arshal_Rejith_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 text-gray-300 border-t border-gray-800 mt-2 pt-3"
          >
            resume.pdf
          </a>
        </div>
      )}
    </nav>
  );
};