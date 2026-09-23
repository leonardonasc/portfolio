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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.hash, location.pathname]);

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
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-border font-sans bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8 xl:px-10">
        {/* Logo */}

        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();

            if (location.pathname === "/") {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              window.history.replaceState(null, "", "/");
              return;
            }

            navigate("/");
          }}
          className="text-lg font-bold tracking-tight text-neutral-100"
        >
          LN<span className="text-accent">.</span>
        </a>

        {/* Navigation */}
        <nav
          className="hidden text-[11px] lg:text-xs md:block"
          aria-label="Navegação principal"
        >
          <ul className="flex items-center gap-x-5 lg:gap-x-15 group">
            {links.map((link) => (
              <li key={link.href} className="flex items-center gap-2">
                <span className={`border-b font-geist-mono transition-colors ${location.pathname === "/" && selected === link.id ? "border-accent  text-muted" : "border-transparent text-muted/30"}`}>
                  {link.number}
                </span>

                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();

                    if (link.id === "main-content") {
                      if (location.pathname === "/") {
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                        window.history.replaceState(null, "", "/");
                      } else {
                        navigate("/");
                      }

                      return;
                    }

                    handleNavigation(link.href);
                  }}
                  className={`uppercase lg:font-bold tracking-widest transition-colors font-grotesk ${location.pathname === "/" && selected === link.id ? "text-neutral-100" : "text-muted/70 hover:text-muted/90"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-full z-50 w-ful border-b border-border bg-background p-4 md:hidden">
            <ul className="flex flex-col gap-4 text-sm">
              {links.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <span className={`border-b font-geist-mono transition-colors ${location.pathname === "/" && selected === link.id ? "border-accent  text-muted" : "border-transparent text-muted/30"}`}>
                    {link.number}
                  </span>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      setIsMenuOpen(false);
                      handleNavigation(link.href);
                    }}
                    className={`uppercase lg:font-bold tracking-widest transition-colors font-grotesk ${location.pathname === "/" && selected === link.id ? "text-neutral-100" : "text-muted/70 hover:text-muted/90"}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-row-reverse items-center gap-4">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="group flex md:hidden size-10 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
            />

            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                }`}
            />

            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </button>

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
            <span className="text-[10px] hidden md:inline lg:text-xs font-bold text-green-300">
              Disponível para oportunidades
            </span>
            <ArrowUpRight
              size={13}
              className="text-green-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 font-bold"
            />
          </a>
        </div>

      </div>
    </header>
  );
}