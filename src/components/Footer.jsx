import { Github, Twitter, Instagram } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Live Tests", href: "#live-mock" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-space text-lg font-bold text-accent">
                Crack
              </span>
              <span className="font-space text-lg font-bold text-text">
                Goal
              </span>
            </div>
            <p className="text-text2 text-sm leading-relaxed max-w-xs">
              Practice. Compete. Crack It.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="text-text2 hover:text-text transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-text2 hover:text-text transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="text-text2 hover:text-text transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-space font-semibold text-text text-sm mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text2 hover:text-text text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-text2 text-xs">
            © {new Date().getFullYear()} CrackGoal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
