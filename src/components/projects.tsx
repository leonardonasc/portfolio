import { ArrowRight, ArrowUpRight, GitBranch } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Title from "./title";
import { projects } from "../data/projects";

const projectGridVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

const projectCardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export default function Projects() {
    return (
        <section className="flex w-full flex-col gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <Title title="Projetos em destaque" number="02" subtitle="Projetos" />
            </motion.div>
            <motion.div
                className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
                variants={projectGridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {projects.slice(0, 3).map((project) => (
                    <motion.div key={project.id} variants={projectCardVariants}>
                        <Link to={`/projects/${project.slug}`} className="group relative flex min-h-115 flex-col overflow-hidden border border-border bg-foreground p-5 transition-colors duration-300 hover:border-accent">
                            <div className="absolute inset-x-0 top-0 h-48 overflow-hidden">
                                <img src={project.image} alt={`Imagem do projeto ${project.title}`} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-foreground" />
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
                                    <div className="mt-3 flex flex-wrap gap-2">{[...(project.frontEnd ?? []), ...(project.backEnd ?? []), ...(project.tools ?? [])].map((tech) => <span key={tech} className="border border-border px-2.5 py-1 font-geist-mono text-[11px] text-muted">{tech}</span>)}</div>
                                </div>
                            </div>
                            <footer className="relative z-10 mt-8 flex items-center justify-between border-t border-border pt-4">
                                <span className="flex items-center gap-2 text-sm text-accent">Ver projeto <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
                                <span className="flex items-center gap-5">
                                    {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="text-muted hover:text-accent flex items-center gap-2 text-sm" aria-label={`Repositório de ${project.title}`}> Repo<GitBranch className="size-3" /></a>}
                                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="text-muted hover:text-accent flex items-center gap-2 text-sm" aria-label={`Demo de ${project.title}`}>Demo<ArrowUpRight className="size-3.5" /> </a>}
                                </span>
                            </footer>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
            <Link
                to="/projects"
                className="group inline-flex w-fit items-center gap-3 border border-accent px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
            >
                Ver todos os projetos
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
        </section>
    );
}
