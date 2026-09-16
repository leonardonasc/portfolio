import Contact from "../components/contact";
import Education from "../components/education";
import Experience from "../components/experience";
import Footer from "../components/footer";
import MainContent from "../components/main";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Technologies from "../components/technologies";

const sections =
    "relative py-20 before:pointer-events-none before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:border-t before:border-border even:before:bg-foreground/40";

export default function Home() {
    return (
        <div className="min-h-screen w-full">
            {/* Navbar */}
            <Navbar />

            {/* Conteúdo */}
            <main className="isolate w-full">
                {/* 01 — Introdução */}
                <section
                    id="main-content"
                    className="
                        relative overflow-hidden
                        py-16 md:py-20
                        bg-[radial-gradient(circle,_rgba(255,255,255,0.045)_1.5px,_transparent_1.5px)]
                        [background-size:24px_24px]
                    "
                >
                    {/* Glow superior esquerdo */}
                    <div
                        className="
                            pointer-events-none absolute
                            -top-40 -left-40
                            h-96 w-96 rounded-full
                            bg-accent/10
                            blur-[120px]"
                    />
                    {/* Conteúdo limitado */}
                    <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8 xl:px-10">
                        <MainContent />
                    </div>
                </section>

                {/* 02 — Projetos */}
                <section
                    id="projects"
                    className={sections}
                >
                    <div className="mx-auto w-full max-w-7xl px-5 md:px-8 xl:px-10">
                        <Projects />
                    </div>
                </section>

                {/* 03 — Experiência */}
                <section
                    id="experience"
                    className={sections}
                >
                    <div className="mx-auto w-full max-w-7xl px-5 md:px-8 xl:px-10">
                        <Experience />
                    </div>
                </section>

                {/* 04 — Formação */}
                <section
                    id="education"
                    className={sections}
                >
                    <div className="mx-auto w-full max-w-7xl px-5 md:px-8 xl:px-10">
                        <Education />
                    </div>
                </section>

                {/* 05 — Tecnologias */}
                <section
                    id="technologies"
                    className={sections}
                >
                    <div className="mx-auto w-full max-w-7xl px-5 md:px-8 xl:px-10">
                        <Technologies />
                    </div>
                </section>

                {/* 06 — Contato */}
                <section
                    id="contact"
                    className={sections}
                >
                    <div className="mx-auto w-full max-w-7xl px-5 md:px-8 xl:px-10">
                        <Contact />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}