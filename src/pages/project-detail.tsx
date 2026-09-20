
import { ArrowLeft, ArrowUpRight, GitBranch } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { getProject } from "../data/projects";
import Title from "../components/title";
import Seo from "../components/seo";

function DetailSection({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    return (
        <section className="border-t first:border-0 border-border py-10 md:py-12">
            <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                <h2 className="font-geist-mono text-xs uppercase tracking-wider text-accent">
                    {title}
                </h2>

                <div className="max-w-3xl text-base leading-7 text-muted md:text-[17px]">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = slug ? getProject(slug) : undefined;

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [slug]);

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center p-10">
                <p className="text-muted">Projeto não encontrado.</p>
            </main>
        );
    }

    const technologyGroups = [
        ["Front-end", project.frontEnd],
        ["Back-end", project.backEnd],
        ["Ferramentas", project.tools],
    ] as const;

    return (
        <div className="min-h-screen w-full pt-[73px]">
            <Seo
                title={`${project.title} — Leonardo Nascimento`}
                description={project.description}
                path={`/projects/${project.slug}`}
            />
            <Navbar />

            <main className="mx-auto w-full max-w-5xl px-5 py-10 md:px-8 md:py-16">
                {/* Back */}
                <Link
                    to="/#projects"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                    <ArrowLeft className="size-4" />
                    Voltar aos projetos
                </Link>

                {/* Hero */}
                <header className="mt-14 md:mt-20">
                    <Title title={project.title} subtitle={project.category} />

                    <p className="mt-5 max-w-2xl text-lg leading-7 text-muted md:text-xl md:leading-8">
                        {project.description}
                    </p>
                </header>

                {/* Image */}
                <div className="mt-12 overflow-hidden border border-border">
                    <img
                        src={project.image}
                        alt={`Imagem do projeto ${project.title}`}
                        className="aspect-[16/8] w-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="mt-14">
                    <DetailSection title="Visão geral">
                        {project.overview}
                    </DetailSection>

                    <DetailSection title="O problema">
                        {project.problem}
                    </DetailSection>

                    <DetailSection title="A solução">
                        {project.solution}
                    </DetailSection>

                    <DetailSection title="Experiência e decisões">
                        {project.experience}
                    </DetailSection>

                    {/* Features */}
                    <section className="border-t border-border py-10 md:py-12">
                        <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                            <h2 className="font-geist-mono text-xs uppercase tracking-wider text-accent">
                                Funcionalidades
                            </h2>

                            <ul className="grid gap-x-8 gap-y-3 text-sm text-muted sm:grid-cols-2">
                                {project.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="relative pl-4 leading-6 before:absolute before:left-0 before:top-[11px] before:size-1 before:rounded-full before:bg-accent"
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Technologies */}
                    <section className="border-t border-border py-10 md:py-12">
                        <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                            <h2 className="font-geist-mono text-xs uppercase tracking-wider text-accent">
                                Tecnologias
                            </h2>

                            <div className="grid gap-8 sm:grid-cols-3">
                                {technologyGroups.map(([label, items]) => (
                                    <div key={label}>
                                        <h3 className="text-sm font-medium">
                                            {label}
                                        </h3>

                                        <ul className="mt-3 space-y-1.5 text-sm text-muted">
                                            {items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted">
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                        >
                            <GitBranch className="size-4" />
                            Repositório
                            <ArrowUpRight className="size-3.5" />
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                        >
                            Demo
                            <ArrowUpRight className="size-3.5" />
                        </a>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
