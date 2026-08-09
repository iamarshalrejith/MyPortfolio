const CONTACT_LINKS = [
  {
    label: "email",
    value: "iamarshalrejith@gmail.com",
    href: "mailto:iamarshalrejith@gmail.com",
  },
  {
    label: "github",
    value: "github.com/iamarshalrejith",
    href: "https://github.com/iamarshalrejith",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/arshal-rejith17",
    href: "https://linkedin.com/in/arshal-rejith17",
  },
  {
    label: "leetcode",
    value: "leetcode.com/u/arshalrejith",
    href: "https://leetcode.com/u/arshalrejith",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-blue-400 mb-3">
          <span className="text-gray-500">// </span>04. contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          Let's build something
        </h2>
        <p className="text-gray-400 max-w-lg mb-12">
          Open to full stack and AI/ML internships. Based in Chennai, open to
          Bangalore and remote. Reach out — I reply fast.
        </p>

        <div className="rounded-xl border border-gray-800 bg-[#0d0f14] overflow-hidden max-w-2xl">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-800 bg-[#111318]">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs font-mono text-gray-500">contact.json</span>
          </div>

          <div className="p-6 font-mono text-sm">
            <p className="text-gray-500">{"{"}</p>
            {CONTACT_LINKS.map((link, i) => (
              <p key={link.label} className="pl-6 py-1">
                <span className="text-blue-400">"{link.label}"</span>
                <span className="text-gray-500">: </span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-blue-400 hover:underline transition-colors"
                >
                  "{link.value}"
                </a>
                {i < CONTACT_LINKS.length - 1 && <span className="text-gray-500">,</span>}
              </p>
            ))}
            <p className="text-gray-500">{"}"}</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Arshal Rejith S. Built with React & Tailwind.</p>
          <a
            href="https://github.com/iamarshalrejith/MyPortfolio"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            view_source ↗
          </a>
        </div>
      </div>
    </section>
  );
};