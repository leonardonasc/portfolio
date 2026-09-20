import Title from './title';

const technologies = [
    {
        id: 1,
        category: "Frontend",
        stack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Framer Motion",
        ],
    },
    {
        id: 2,
        category: "Backend",
        stack: [
            "Node.js",
            "AdonisJS",
            "PostgreSQL",
            "MySQL",
            "Drizzle ORM",
            "Zod",
        ],
    },
    {
        id: 3,
        category: "Mobile",
        stack: ["React Native", "Expo"],
    },
    {
        id: 4,
        category: "DevOps",
        stack: ["Git", "Vercel"],
    },
];

export default function Technologies() {
    return (
        <section>
            <Title title="Tecnologias" subtitle="Ferramentas" number='05' />

            <div className="mt-8 flex flex-col gap-4">
                {technologies.map((tech, index) => (
                    <div
                        key={tech.id}
                        className={`flex flex-col gap-4 py-6 md:flex-row md:items-start md:gap-12 ${index !== technologies.length - 1
                            ? "border-b border-border border-dashed"
                            : ""
                            }`}
                    >
                        <div className="w-full shrink-0 md:w-32">
                            <h3 className="text-sm font-medium">
                                {tech.category}
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                            {tech.stack.map((item) => (
                                <span
                                    key={item}
                                    className="
                                text-sm text-muted
                                transition-colors duration-200
                                hover:text-accent
                            "
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
