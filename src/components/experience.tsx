import Title from "./title"

export default function Experience() {

    const experiences = [
        {
            id: 1,
            fromto: "Set 2024 — Dez 2025",
            role: "Desenvolvedor Full Stack",
            company: "BluePaper.io",
            companyLink: "https://bluepaper.io",
            description: "Desenvolvimento de páginas web modernas e aplicações mobile, atuando em frontend e backend. Criação de interfaces responsivas, sistemas de gerenciamento e produtos digitais personalizados com Next.js, Tailwind CSS, AdonisJS, MySQL e Expo.",
        }
    ]

    return (
        <div>
            {/* titulo */}
            <div className="flex flex-col">
                <Title title="Experiência profissional" subtitle="02 — Trajetória" />

                {/* Conteúdo da experiência */}
                <section className="">
                    {experiences.map((experience) => (
                        <article key={experience.id} className="w-full border-l border-accent p-5 flex flex-col gap-4 mt-5">
                            {/* Header */}
                            <span className="text-muted text-xs"> {experience.fromto}</span>
                            <span className="text-2xl font-medium">{experience.role}</span>
                            <a href={experience.companyLink} target="_blank" rel="noopener noreferrer" className="text-accent text-sm">@{experience.company} ↗</a>
                            <p className="text-sm text-muted">{experience.description}</p>
                        </article>
                    ))}
                </section>
            </div>
        </div>
    )
}
