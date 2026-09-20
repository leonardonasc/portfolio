
interface TitleProps {
    title?: string;
    number?: string;
    subtitle: string;
}

export default function Title({ title, subtitle, number }: TitleProps) {
    return (
        <div className="flex flex-col">
            <span className='flex items-center gap-3 text-accent'>
                {number &&
                    <div className='flex items-center gap-3'>
                        <span className='text-[11px] font-geist-mono'>{number}</span>
                        <span aria-hidden="true" className="h-px w-10 bg-line-strong bg-accent">
                        </span>
                    </div>}
                <span className='text-sm'>{subtitle}</span>
            </span>
            <h2 className="text-[30px] font-bold tracking-tighter font-grotesk">{title}</h2>
        </div>
    )
}
