import { MoveDown, MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import Title from "./title";

export default function MainContent() {
    return (
        <div className='grid max-w-full items-center gap-14 py-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:gap-20 lg:py-12'>
            <motion.section
                className='flex flex-col'
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <Title subtitle="Desenvolvedor Full Stack" number='01' />
                <h1 className='mt-5 mb-3 max-w-4xl text-[40px] font-bold leading-10 tracking-tighter md:text-[64px] md:leading-20 lg:text-[84px] lg:leading-[1.04] font-grotesk'>
                    Construo produtos digitais <span className='text-accent'>claros, rápidos</span> e feitos para crescer.
                </h1>
                <p className='my-5 max-w-3xl text-[14px] leading-6 text-muted md:text-[16px] md:leading-7'>
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
            </motion.section>

            <motion.aside
                aria-label="Resumo profissional"
                className="border border-border bg-foreground/35"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.18, duration: 0.7, ease: "easeOut" }}
            >
                <div className="border-b border-border p-5 md:p-6">
                    <span className="font-geist-mono text-[10px] uppercase tracking-[0.22em] text-muted">Status atual</span>
                    <div className="mt-5 flex items-center gap-2 text-sm font-medium">
                        <span className="size-2 rounded-full bg-[#1fc535] shadow-[0_0_12px_rgba(31,197,53,0.65)]" />
                        Disponível para novos projetos
                    </div>
                    <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
                        Aberto a oportunidades onde design, produto e tecnologia possam trabalhar juntos.
                    </p>
                </div>

                <div className="grid grid-cols-2">
                    <Metric value="1+" label="ano de experiência" />
                    <Metric value="8+" label="projetos profissionais entregues" />
                </div>
            </motion.aside>
        </div>
    )
}

function Metric({ value, label, wide = false }: { value: string; label: string; wide?: boolean }) {
    return (
        <div className={`border-border p-5 md:p-6 ${wide ? "col-span-2 border-t" : "border-r last:border-r-0"}`}>
            <strong className="font-grotesk text-3xl font-medium tracking-tight md:text-4xl">{value}</strong>
            <span className="mt-3 block max-w-32 font-geist-mono text-[10px] leading-4 text-muted">{label}</span>
        </div>
    );
}
