
export default function MainContent() {
    return (
        <div className='max-w-full h-full justify-center flex flex-col mt-15 gap-4'>
            {/* role */}
            <span className='text-accent uppercase text-[11px] tracking-wider'><span className='text-[11px] font-extrabold text-muted mr-2'>//</span>Desenvolvedor Full Stack</span>

            {/* base bio */}
            <section className='flex flex-col'>
                <h1 className='text-[40px] tracking-tighter font-bold mt-2 mb-3 leading-10 md:text-[64px] text-wrap lg:text-[84px] md:leading-none md:w-full lg:w-212.5'>
                    Construo produtos digitais <span className='text-accent'>claros, rápidos</span> e feitos para crescer.
                </h1>
                <p className='text-muted text-[14px] md:text-[16px] md:w-full lg:w-175 my-5'>
                    1 ano e 4 meses de experiência desenvolvendo páginas web modernas e aplicações mobile, com atuação prática em frontend e backend. Desenvolvi interfaces responsivas, sistemas de gerenciamento e produtos digitais personalizados utilizando tecnologias como Next.js, Tailwind CSS, AdonisJS, MySQL e Expo, sempre com foco em performance e experiência do usuário.
                </p>

                <div className='flex w-full items-center mt-3 justify-between md:justify-normal'>
                    <button className='hover:cursor-pointer bg-accent text-background flex gap-2 px-5 md:px-4 py-4 text-sm font-semibold hover:bg-accent/80 transition-colors'>
                        Vamos conversar <span >↗</span>
                    </button>
                    <a href="#projects" className='text-muted text-xs px-9 py-3 flex md:ml-4 gap-x-3 items-center hover:text-accent/80 transition-colors'>
                        Ver projetos <span className='text-accent'>↓</span>
                    </a>
                </div>
            </section>
        </div>
    )
}
