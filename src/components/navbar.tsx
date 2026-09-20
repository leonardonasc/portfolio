import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  { number: "01", label: "Início", href: "/#main-content", id: "main-content" },
  { number: "02", label: "Projetos", href: "/#projects", id: "projects" },
  { number: "03", label: "Experiência", href: "/#experience", id: "experience" },
  { number: "04", label: "Contato", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [selected, setSelected] = useState("main-content");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) setSelected(visibleSection.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    requestAnimationFrame(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    });
  }, [location.hash, location.pathname]);

  function handleNavigation(href: string) {
    const [pathname, hash] = href.split("#");

    if (location.pathname !== pathname) {
      navigate(href);
      return;
    }

    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8 xl:px-10">
        {/* Logo */}
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            handleNavigation("/");
          }}
          className="group"
          aria-label="Voltar ao início"
        >
          <span className="font-extrabold text-lg tracking-tighter">
            LN<span className="text-accent">.</span>
          </span>
        </a>

        {/* Navigation */}
        <nav
          className="hidden text-xs md:block"
          aria-label="Navegação principal"
        >
          <ul className="flex items-center gap-x-15 group">
            {links.map((link) => (
              <li key={link.href} className="flex items-center gap-2">
                <span className={`border-b font-geist-mono text-sm transition-colors ${location.pathname === "/" && selected === link.id ? "border-accent  text-muted" : "border-transparent text-muted/30"}`}>
                  {link.number}
                </span>

                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigation(link.href);
                  }}
                  className={`uppercase transition-colors ${location.pathname === "/" && selected === link.id ? "text-neutral-100" : "text-muted/70 hover:text-muted/90"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Availability */}
        <a
          href="/#contact"
          onClick={(event) => {
            event.preventDefault();
            handleNavigation("/#contact");
          }}
          className="group flex items-center gap-2 rounded-full border border-green-300 bg-green-300/10 px-3 py-2 text-xs font-medium text-green-300 transition-colors hover:bg-green-300/20"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1fc535]/70" />
            <span className="relative inline-flex size-2 rounded-full bg-[#1fc535]" />
          </span>

          <span className="flex text-xs font-bold text-green-300 sm:inline">
            Disponível para oportunidades
          </span>

          <ArrowUpRight
            size={13}
            className="text-green-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </header>
  );
}