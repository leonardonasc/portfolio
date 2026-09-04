import Title from "./title";

export default function Education() {

    const educations = [
        {
            id: 1,
            fromto: "2026 — Presente",
            institution: "Universidade Estácio de Sá",
            title: "Análise e Desenvolvimento de Sistemas",
            where: "Santa Catarina, Brasil",
        },
        {
            id: 2,
            fromto: "2019 — 2021",
            institution: "Senai",
            title: "Técnico em Desenvolvimento de Sistemas",
            where: "Santa Catarina, Brasil",
        },
        {
            id: 3,
            fromto: "2024",
            institution: "Oracle/Alura",
            title: "Oracle Next Education",
            where: "Brasil",
        }
    ]

    const technologies = [
        {
            id: 1,
            topic: "Frontend",
            stack: ["Next.js", "Vite", "React", "Tailwind CSS", "TypeScript", "JavaScript", "HTML", "CSS"],
        },
        {
            id: 2,
            topic: "Backend",
            stack: ["Node.js", "AdonisJS", "MySQL", "PostgreSQL", "Drizzle ORM", "Zod", "Better Auth"],
        },
        {
            id: 3,
            topic: "Mobile",
            stack: ["React Native", "Expo"],
        },
        {
            id: 4,
            topic: "DevOps",
            stack: ["Git", "Vercel"],
        }
    ]

    return (
        <div>
            {/* titulo */}
            <Title title="Formação" subtitle="04 — Base técnica" />
            {/* Conteúdo da educação */}
            <section className="w-full flex flex-col gap-5 mt-8 mb-4">
                {educations.map((education) => (
                    <article key={education.id} className="w-full flex flex-col gap-y-1 mb-5">
                        {/* Header */}
                        <span className="text-muted text-xs">{education.fromto}</span>
                        <span className="text-1xl font-medium">{education.title}</span>
                        <span className="text-sm text-muted">{education.institution} - {education.where}</span>
                    </article>
                ))}
            </section>

            <h2 className="text-[30px] font-bold tracking-tighter mt-15">Tecnologias</h2>

            <section className="w-full flex flex-wrap gap-x-3 gap-y-4 mt-5">
                {technologies.map((tech) => (
                    <div key={tech.id} className="w-full flex flex-col gap-x-2">
                        <h3 className="text-[20px] font-normal mb-2">{tech.topic}</h3>
                        <div className="flex flex-wrap items-center gap-2">
                            {tech.stack.map((item) => (
                                <span key={item} className="text-sm text-muted hover:text-accent border border-border hover:border-accent transition-colors duration-200 px-3 py-1">{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

        </div>
    )
}
