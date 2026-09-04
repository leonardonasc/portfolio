
interface TitleProps {
    title?: string;
    subtitle: string;
}

export default function Title({ title, subtitle }: TitleProps) {
    return (
        <div className="flex flex-col">
            <span className="text-accent text-xs font-geist-mono mb-1">{subtitle}</span>
            <h2 className="text-[30px] font-bold tracking-tighter">{title}</h2>
        </div>
    )
}
