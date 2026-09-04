'use client'

export default function Navbar() {

    return (
        <div className="w-full flex justify-between items-center mb-5 py-3">
            {/* logo */}
            <h1 className="font-extrabold text-lg">LN<span className="text-accent">.</span></h1>

            {/* navigation */}
            <ul className="gap-6 text-xs text-muted hidden md:flex">
                <li className="hover:text-accent">Projetos</li>
                <li className="hover:text-accent">Experiência</li>
                <li className="hover:text-accent">Contato</li>
            </ul>


            {/* open to work */}
            <div className="flex items-center gap-2 text-sm text-muted">
                <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/70" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>

                <span className="text-xs text-muted font-normal">Disponível para oportunidades</span>
            </div>
        </div>
    )
}
