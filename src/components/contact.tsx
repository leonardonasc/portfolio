import Title from "./title";

export default function Contact() {
    return (
        <div>
            <Title subtitle="05 — Vamos conversar" />
            <p className="text-4xl md:text-7xl md:w-full lg:w-175 font-medium my-4 mb-9">Vamos criar algo <span className="text-accent">relevante</span> juntos?</p>
            <a href="mailto:seuemail@example.com" className='w-fit hover:cursor-pointer bg-accent text-background flex gap-2 px-5 py-4 text-sm font-semibold hover:bg-accent/80 transition-colors'>
                Entrar em contato <span >↗</span>
            </a>
        </div>
    )
}
