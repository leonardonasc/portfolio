import { GitBranch } from "lucide-react"
import Title from "./title"

export default function Projects() {


    const projects = [
        { id: 1, title: "Newtion", type: ["Web", "Sistema Organizacional"], inDev: true, description: "Uma plataforma de organização pessoal que reúne tarefas, dashboard, wishlists, planejamento de viagens e calendário de eventos em um único lugar.", why: "O Newtion foi desenvolvido para centralizar diferentes áreas da organização pessoal em uma experiência simples e intuitiva, permitindo acompanhar tarefas, planejar viagens, gerenciar desejos e organizar eventos sem precisar utilizar várias ferramentas diferentes.", stack: ["Next.js", "Drizzle ORM", "PostgreSQL", "TailwindCSS", "Zod", "Better Auth"], repo: "#", demo: "#", }, { id: 2, title: "Diogo Defante", type: ["Web", "Landing Page"], inDev: false, description: "Landing page desenvolvida para o influenciador Diogo Defante, reunindo seus conteúdos, playlists, newsletter e principais redes sociais em um único espaço.", why: "O projeto foi criado para apresentar o conteúdo do Diogo Defante de forma direta e organizada, facilitando o acesso ao seu vídeo mais recente, playlists, newsletter e redes sociais a partir de uma única página.", stack: ["Next.js", "TypeScript", "TailwindCSS"], demo: "https://www.defante.com.br/", },
    ]

    return (
        <div className="w-full flex flex-col gap-5">
            {/* titulo */}
            <Title title="Projetos em destaque" subtitle="01 — Projetos" />
            {/* itens */}
            <div className="w-full flex flex-col gap-y-3">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="w-full border border-border bg-foreground p-5 flex flex-col gap-4"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <span className="font-geist-mono text-xs text-muted">
                                0{project.id}
                            </span>

                            <span className="font-geist-mono text-xs text-muted">
                                {project.inDev ? "Em desenvolvimento" : "Concluído"}
                            </span>
                        </div>

                        {/* Title */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[20px] font-normal">
                                {project.title}
                            </h3>

                            {/* Project type */}
                            <div className="flex w-fit items-center border border-border px-3 py-1 text-xs text-muted">
                                {project.type.map((type, index) => (
                                    <div key={type}>
                                        {index > 0 && (
                                            <span
                                                aria-hidden="true"
                                                className="mx-2 text-[8px]"
                                            >
                                                •
                                            </span>
                                        )}
                                        <span>{type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="max-w-2xl text-sm leading-relaxed text-muted">
                            {project.description}
                        </p>

                        {/* Why */}
                        <p className="max-w-2xl text-sm leading-relaxed text-muted">
                            <span className="text-accent">Por que:</span>{" "}
                            {project.why}
                        </p>

                        {/* Stack */}
                        <div className="flex flex-wrap items-center gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="border border-border px-2 py-1 font-geist-mono text-xs text-muted"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Link */}
                        <div className="flex gap-4">
                            {project.repo && (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent text-sm hover:underline flex gap-2 items-center"
                                >
                                    <GitBranch className="size-4" /> Repositório
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent text-sm hover:underline"
                                >
                                    Demo ↗
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
