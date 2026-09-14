import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8 xl:px-10">
        {/* Logo */}
        <a
          href="#main-content"
          className="group"
          aria-label="Voltar ao início"
        >
          <span className="font-extrabold text-lg tracking-tighter">
            LN<span className="text-accent">.</span>
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-7">
            <li>
              <a
                href="#projects"
                className="text-xs text-muted transition-colors hover:text-accent"
              >
                Projetos
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className="text-xs text-muted transition-colors hover:text-accent"
              >
                Experiência
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-xs text-muted transition-colors hover:text-accent"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Availability */}
        <a
          href="#contact"
          className="group flex items-center gap-2"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1fc535]/70" />
            <span className="relative inline-flex size-2 rounded-full bg-[#1fc535]" />
          </span>

          <span className="flex text-xs text-muted transition-colors group-hover:text-accent sm:inline">
            Disponível para oportunidades
          </span>

          <ArrowUpRight
            size={13}
            className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </header>
  );
}