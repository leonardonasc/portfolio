import { ArrowLeft, ArrowUpRight, GitBranch } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { getProject } from "../data/projects";

function DetailSection({ title, children }: { title: string; children: ReactNode }) {
    return <section className="border-t border-border py-10"><h2 className="font-geist-mono text-xs uppercase tracking-wider text-accent">{title}</h2><div className="mt-5 max-w-3xl text-lg leading-8 text-muted">{children}</div></section>;
}

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = slug ? getProject(slug) : undefined;
    if (!project) return <main className="p-10">Projeto não encontrado.</main>;

    const technologyGroups = [["Front-end", project.frontEnd], ["Back-end", project.backEnd], ["Ferramentas", project.tools]] as const;
    return (
        <div className="min-h-screen w-full">
            <Navbar />
            <main className="mx-auto w-full max-w-5xl px-5 py-12 md:px-8 md:py-20">
                <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"><ArrowLeft className="size-4" /> Voltar aos projetos</Link>
                <header className="mt-16"><span className="font-geist-mono text-xs text-accent">{project.category}</span><h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">{project.title}</h1><p className="mt-6 max-w-2xl text-xl leading-8 text-muted">{project.description}</p></header>
                <img src={project.image} alt={`Imagem grande do projeto ${project.title}`} className="mt-14 aspect-[16/8] w-full object-cover" />
                <div className="mt-16">
                    <DetailSection title="Visão geral">{project.overview}</DetailSection>
                    <DetailSection title="O problema">{project.problem}</DetailSection>
                    <DetailSection title="A solução">{project.solution}</DetailSection>
                    <DetailSection title="Experiência e decisões">{project.experience}</DetailSection>
                    <DetailSection title="Funcionalidades">
                        <ul className="list-disc px-5">
                            {project.features.map((feature) => (
                                <li key={feature} className="pb-3">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </DetailSection>

                    <section className="border-t border-border py-10">
                        <h2 className="font-geist-mono text-xs uppercase tracking-wider text-accent">Tecnologias usadas</h2>
                        <div className="mt-6 grid gap-8 sm:grid-cols-3">{technologyGroups.map(([label, items]) => <div key={label}>
                            <h3 className="text-lg">{label}</h3>
                            <ul className="mt-3 space-y-2 text-sm text-muted">{items.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>)}
                        </div>
                    </section>
                </div>
                <div className="flex gap-6 border-t border-border pt-6 text-sm text-muted">{project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent"><GitBranch className="size-4" /> Repositório</a>}{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent">Demo <ArrowUpRight className="size-4" /></a>}</div>
            </main>
            <Footer />
        </div>
    );
}
