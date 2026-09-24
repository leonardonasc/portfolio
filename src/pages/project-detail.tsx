
import { ArrowLeft, ArrowUpRight, GitBranch } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { getProject } from "../data/projects";
import Title from "../components/title";
import ProjectCarousel from "../components/project-carousel";

function DetailSection({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    return (
        <section className="border-t first:border-0 border-border py-10 md:py-12">
            <Title title={title} />
            <div className="mt-6 max-w-3xl text-base leading-7 text-muted md:text-[17px]">
                {children}
            </div>
        </section>
    );
}

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = slug ? getProject(slug) : undefined;

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center p-10">
                <p className="text-muted">Projeto não encontrado.</p>
            </main>
        );
    }

    const technologyGroups = [
        ["Front-end", project.frontEnd ?? []],
        ["Back-end", project.backEnd ?? []],
        ["Ferramentas", project.tools ?? []],
    ] as const;

    return (
        <div className="min-h-screen w-full pt-18.25">
            <Navbar />

            <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-16">
                {/* Back */}
                <Link
                    to="/#projects"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                    <ArrowLeft className="size-4" />
                    Voltar aos projetos
                </Link>

                {/* Hero */}
                <header className="mt-14 grid gap-8 border-b border-border pb-12 md:mt-20 md:grid-cols-[1fr_280px] md:items-end md:gap-12">
                    <div>
                        <Title title={project.title} subtitle={project.category} />
                        <p className="mt-5 max-w-2xl text-lg leading-7 text-muted md:text-xl md:leading-8">
                            {project.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                        {project.type.map((type) => (
                            <span key={type} className="border border-border px-3 py-1.5 font-geist-mono text-[10px] text-muted">{type}</span>
                        ))}
                    </div>
                </header>

                {/* Image */}
                <div className="mt-12 overflow-hidden border border-border">
                    <img
                        src={project.image}
                        alt={`Imagem do projeto ${project.title}`}
                        className="aspect-video w-full object-cover"
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

                    {(project.desktopImages?.length || project.mobileImages?.length) ? (
                        <section className="border-t border-border py-10 md:py-12">
                            <div className="mt-10 space-y-12">
                                {project.desktopImages?.length ? (
                                    <div>
                                        <Title title="Desktop" />
                                        <div className="mt-5">
                                            <ProjectCarousel images={project.desktopImages} label="Desktop" />
                                        </div>
                                    </div>
                                ) : null}
                                {project.mobileImages?.length ? (
                                    <div>
                                        <Title title="Mobile" />
                                        <div className="mt-5">
                                            <ProjectCarousel images={project.mobileImages} label="Mobile" />
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </section>
                    ) : null}

                    {/* Features */}
                    <section className="border-t border-border py-10 md:py-12">
                        <Title title="Funcionalidades" />
                        <ul className="mt-6 grid gap-x-8 gap-y-3 text-sm text-muted sm:grid-cols-2">
                            {project.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="relative pl-4 leading-6 before:absolute before:left-0 before:top-2.75 before:size-1 before:rounded-full before:bg-accent"
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Technologies */}
                    <section className="border-t border-border py-10 md:py-12">
                        <Title title="Tecnologias" />
                        <div className="mt-8 grid gap-8 sm:grid-cols-3">
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
