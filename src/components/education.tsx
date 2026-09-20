import Title from "./title";

const educations = [
    {
        id: 1,
        period: "2026 — Presente",
        institution: "Universidade Estácio de Sá",
        course: "Análise e Desenvolvimento de Sistemas",
        location: "Santa Catarina, Brasil",
    },
    {
        id: 2,
        period: "2019 — 2021",
        institution: "SENAI",
        course: "Técnico em Desenvolvimento de Sistemas",
        location: "Santa Catarina, Brasil",
    },
    {
        id: 3,
        period: "2024",
        institution: "Oracle / Alura",
        course: "Oracle Next Education",
        location: "Brasil",
    },
];


export default function Education() {
    return (
        <div>
            <Title
                title="Formação"
                subtitle="Base técnica"
                number='04'
            />

            <section className="mt-8">
                <div className="flex flex-col">
                    {educations.map((education) => (
                        <article
                            key={education.id}
                            className="
                                grid grid-cols-1
                                md:grid-cols-[140px_1fr]
                                gap-2 md:gap-6
                                py-5
                                border-b border-border border-dashed
                                last:border-0
                            "
                        >
                            <span className="text-xs text-muted">
                                {education.period}
                            </span>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-base font-medium">
                                    {education.course}
                                </h3>

                                <p className="text-sm text-muted">
                                    {education.institution}
                                </p>

                                <span className="text-xs text-muted">
                                    {education.location}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}