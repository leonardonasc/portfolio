import { MoveDown, MoveUpRight } from "lucide-react";
import Title from "./title";

export default function MainContent() {
    return (
        <div className='max-w-full h-full justify-center flex flex-col mt-5 gap-4'>
            {/* role */}
            <Title subtitle="Desenvolvedor Full Stack" number='01' />
            {/* base bio */}
            <section className='flex flex-col'>
                <h1 className='text-[40px] tracking-tighter font-bold mt-2 mb-3 leading-10 md:text-[64px] text-wrap lg:text-[84px] md:leading-20 md:w-full lg:w-212.5 font-grotesk'>
                    Construo produtos digitais <span className='text-accent'>claros, rápidos</span> e feitos para crescer.
                </h1>
                <p className='text-muted text-[14px] md:text-[16px] md:w-full lg:w-175 my-5'>
                    Desenvolvedor Full Stack com 1 ano e 4 meses de experiência prática, criando aplicações web e mobile modernas, responsivas e funcionais. Trabalho no desenvolvimento de produtos digitais personalizados, desde interfaces e experiências de usuário até APIs, regras de negócio e integração com bancos de dados. Utilizo tecnologias como Next.js, React, Tailwind CSS, AdonisJS, MySQL e Expo, com foco em performance, qualidade e soluções que unem bom design e tecnologia.

                </p>
                <div className="mt-3 flex w-full flex-col gap-2 md:flex-row md:items-center">
                    <a
                        href="#contact"
                        className="group flex w-full items-center justify-center gap-2 border border-accent bg-accent px-5 py-4 text-sm font-semibold text-background transition-colors hover:bg-accent/80 md:w-auto md:justify-start"
                    >
                        Vamos conversar
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <MoveUpRight className="size-4" />
                        </span>
                    </a>

                    <a
                        href="#projects"
                        className="group flex w-full items-center justify-center gap-3 border border-accent px-5 py-4 text-sm font-semibold text-muted transition-colors hover:text-accent md:ml-2 md:w-auto md:justify-start"
                    >
                        Ver projetos
                        <span className="inline-block text-accent transition-transform duration-300 group-hover:translate-y-1">
                            <MoveDown className="size-4" />
                        </span>
                    </a>
                </div>
            </section>
        </div>
    )
}
