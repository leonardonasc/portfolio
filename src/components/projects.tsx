import { ArrowRight, GitBranch, LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Title from "./title";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section className="flex w-full flex-col gap-8">
            <Title title="Projetos em destaque" subtitle="Projetos" number='01' />
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.slug}`} className="group relative flex min-h-[460px] flex-col overflow-hidden border border-border bg-foreground p-5 transition-colors duration-300 hover:border-accent">
                        <div className="absolute inset-x-0 top-0 h-[calc(12rem+1px)] overflow-hidden">
                            <img src={project.image} alt={`Imagem do projeto ${project.title}`} loading="lazy" decoding="async" width="1280" height="640" className="block h-full w-full bg-foreground object-cover transition duration-700 ease-out group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground" />
                        </div>
                        <div className="relative z-10 mt-44 flex flex-1 flex-col">
                            <div className="flex items-center justify-between mt-4">
                                <h3 className="text-2xl font-normal tracking-tight">{project.title}</h3>
                                <span className={`font-geist-mono text-xs ${project.inDev ? "text-accent" : "text-muted"}`}>{project.inDev ? "Em desenvolvimento" : "Concluído"}</span>
                            </div>
                            <div className="mt-3 flex w-fit flex-wrap items-center border border-border px-3 py-1.5 text-xs text-muted">
                                {project.type.map((type, index) => <span key={type} className="flex items-center">{index > 0 && <span aria-hidden="true" className="mx-2 text-[8px]">•</span>}{type}</span>)}
                            </div>
                            <p className="mt-6 text-sm leading-6 text-muted">{project.description}</p>
                            <div className="mt-8">
                                <span className="font-geist-mono text-xs font-bold">Tecnologias</span>
                                <div className="mt-3 flex flex-wrap gap-2">{[...project.frontEnd, ...project.backEnd, ...project.tools].map((tech) => <span key={tech} className="border border-border px-2.5 py-1 font-geist-mono text-[11px] text-muted">{tech}</span>)}</div>
                            </div>
                        </div>
                        <footer className="relative z-10 mt-8 flex items-center justify-between border-t border-border pt-4">
                            <span className="group flex items-center gap-2 text-sm font-medium text-accent">
                                Sobre o projeto
                                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>

                            <div className="flex items-center gap-2">
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(event) => event.stopPropagation()}
                                        className="flex size-8 items-center justify-center border border-border text-muted transition-all duration-200 hover:border-accent hover:text-accent"
                                        aria-label={`Repositório de ${project.title}`}
                                    >
                                        <GitBranch className="size-4" />
                                    </a>
                                )}

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(event) => event.stopPropagation()}
                                        className="flex size-8 items-center justify-center border border-border text-muted transition-all duration-200 hover:border-accent hover:text-accent"
                                        aria-label={`Demo de ${project.title}`}
                                    >
                                        <LinkIcon className="size-4" />
                                    </a>
                                )}
                            </div>
                        </footer>
                    </Link>
                ))}
            </div>
        </section>
    );
}
