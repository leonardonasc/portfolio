import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Title from "../components/title";
import { projects, type ProjectCategory } from "../data/projects";

const categories: ProjectCategory[] = ["Front-end", "Full stack", "Mobile"];

export default function Projects() {
    return (
        <div className="min-h-screen w-full pt-[73px]">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24 xl:px-10">
                <Title title="Projetos" subtitle="01 — Portfólio" />
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Uma seleção de produtos, experiências e interfaces construídos com intenção.</p>
                <div className="mt-20 space-y-20">
                    {categories.map((category) => (
                        <section key={category}>
                            <div className="mb-7 flex items-end justify-between border-b border-border pb-4"><h2 className="text-2xl font-medium tracking-tight">{category}</h2><span className="font-geist-mono text-xs text-muted">{String(projects.filter((project) => project.category === category).length).padStart(2, "0")}</span></div>
                            <div className="grid gap-5 md:grid-cols-2">
                                {projects.filter((project) => project.category === category).map((project) => (
                                    <Link key={project.slug} to={`/projects/${project.slug}`} className="group border border-border bg-foreground">
                                        <div className="aspect-[16/8] overflow-hidden bg-[#24292d]"><img src={project.image} alt={`Imagem do projeto ${project.title}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div>
                                        <div className="flex items-center justify-between p-5"><div><h3 className="text-xl">{project.title}</h3><p className="mt-2 text-sm text-muted">{project.description}</p></div><ArrowRight className="ml-4 size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" /></div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
