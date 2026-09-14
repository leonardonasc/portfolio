import { ArrowUpRight, GitBranch } from "lucide-react";

import Title from "./title";

type Project = {
    id: number;
    title: string;
    type: string[];
    inDev: boolean;
    description: string;
    why: string;
    stack: string[];
    repo?: string;
    demo?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Newtion",
        type: ["Web", "Sistema Organizacional", "Full Stack"],
        inDev: true,
        description:
            "Plataforma de organização pessoal que reúne tarefas, dashboard, wishlists, planejamento de viagens e calendário de eventos em um único lugar.",
        why:
            "Criado para centralizar diferentes áreas da organização pessoal em uma experiência simples e intuitiva, reduzindo a necessidade de utilizar várias ferramentas diferentes.",
        stack: [
            "Next.js",
            "Drizzle ORM",
            "PostgreSQL",
            "Tailwind CSS",
            "Zod",
            "Better Auth",
        ],
        repo: "https://github.com/leonardonas/newtion-planner",
        demo: "https://newtion-planner.vercel.app/",
    },
    {
        id: 2,
        title: "Diogo Defante",
        type: ["Web", "Landing Page"],
        inDev: false,
        description:
            "Landing page desenvolvida para o influenciador Diogo Defante, reunindo seus conteúdos, playlists, newsletter e principais redes sociais em um único espaço.",
        why:
            "O projeto foi criado para apresentar o conteúdo de forma direta e organizada, facilitando o acesso aos principais canais e conteúdos a partir de uma única página.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        demo: "https://www.defante.com.br/",
    },
    {
        id: 3,
        title: "Cardly",
        type: ["Mobile", "Aplicativo"],
        inDev: false,
        description:
            "Aplicativo mobile para criação e compartilhamento de cartões digitais personalizados, desenvolvido com foco em praticidade e identidade visual.",
        why:
            "O projeto foi criado para facilitar a criação de cartões digitais personalizados, reunindo informações de contato e identidade profissional em uma experiência simples e acessível.",
        stack: ["React Native", "Expo", "TypeScript"],
        demo: "https://cardly.bluepaper.com.br/",
    },
];

export default function Projects() {
    return (
        <section className="flex w-full flex-col gap-8">
            <Title
                title="Projetos em destaque"
                subtitle="01 — Projetos"
            />

            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="
                            group flex min-h-[460px] flex-col
                            border border-border
                            bg-foreground p-5
                            transition-colors duration-300
                            hover:border-accent
                        "
                    >
                        {/* Header */}
                        <header className="flex items-center justify-between">
                            <span className="font-geist-mono text-xs text-muted">
                                {String(project.id).padStart(2, "0")}
                            </span>

                            <span
                                className={`font-geist-mono text-xs ${
                                    project.inDev
                                        ? "text-accent"
                                        : "text-muted"
                                }`}
                            >
                                {project.inDev
                                    ? "Em desenvolvimento"
                                    : "Concluído"}
                            </span>
                        </header>

                        {/* Content */}
                        <div className="mt-8 flex flex-1 flex-col">
                            <div>
                                <h3 className="text-2xl font-normal tracking-tight">
                                    {project.title}
                                </h3>

                                <div className="mt-3 flex w-fit flex-wrap items-center border border-border px-3 py-1.5 text-xs text-muted">
                                    {project.type.map((type, index) => (
                                        <span key={type} className="flex items-center">
                                            {index > 0 && (
                                                <span
                                                    aria-hidden="true"
                                                    className="mx-2 text-[8px]"
                                                >
                                                    •
                                                </span>
                                            )}

                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-6 space-y-4">
                                <p className="text-sm leading-6 text-muted">
                                    {project.description}
                                </p>

                                <p className="text-sm leading-6 text-muted">
                                    <span className="font-medium text-accent">
                                        Por que:
                                    </span>{" "}
                                    {project.why}
                                </p>
                            </div>

                            {/* Technologies */}
                            <div className="mt-8">
                                <span className="font-geist-mono text-xs font-bold">
                                    Tecnologias
                                </span>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="
                                                border border-border
                                                px-2.5 py-1
                                                font-geist-mono text-[11px]
                                                text-muted
                                                transition-colors duration-200
                                                hover:border-accent
                                                hover:text-accent
                                            "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        <footer className="mt-8 flex items-center gap-5 border-t border-border pt-4">
                            {project.repo && (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                                >
                                    <GitBranch className="size-4" />
                                    Repositório
                                </a>
                            )}

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
                                >
                                    Demo
                                    <ArrowUpRight className="size-3.5" />
                                </a>
                            )}
                        </footer>
                    </article>
                ))}
            </div>
        </section>
    );
}
