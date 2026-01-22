
interface ProjectsProps {
    title: string;
    description: string;
}

export default function Projects({ title, description }: ProjectsProps) {
    return (
        <div className="border border-neutral-700/40 md:w-[35%] h-30 p-4 rounded-lg">
            <h1 className="mb-2 text-md decoration-neutral-600">{title}</h1>
            <p className="line-clamp-3 text-sm text-zinc-400">{description}</p>
        </div>
    )
}
