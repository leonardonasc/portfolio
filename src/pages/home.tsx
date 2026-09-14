import Contact from "../components/contact";
import Education from "../components/education";
import Experience from "../components/experience";
import Footer from "../components/footer";
import MainContent from "../components/main";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Technologies from "../components/technologies";

const sections = "border-t border-border py-20";

export default function Home() {
    return (
        <div className="min-h-screen w-full">
            {/* Navbar */}
            <Navbar />

            {/* Conteúdo */}
            <main className="mx-auto w-full max-w-7xl px-5 md:px-8 xl:px-10">
                {/* 01 — Introdução */}
                <section
                    id="main-content"
                    className="py-16 md:py-20"
                >
                    <MainContent />
                </section>

                {/* 02 — Projetos */}
                <section
                    id="projects"
                    className={sections}
                >
                    <Projects />
                </section>

                {/* 03 — Experiência */}
                <section
                    id="experience"
                    className={sections}
                >
                    <Experience />
                </section>

                {/* 04 — Formação */}
                <section
                    id="education"
                    className={sections}
                >
                    <Education />
                </section>

                {/* 05 — Tecnologias */}
                <section
                    id="technologies"
                    className={sections}
                >
                    <Technologies />
                </section>

                {/* 06 — Contato */}
                <section
                    id="contact"
                    className={sections}
                >
                    <Contact />
                </section>
            </main>



            {/* Footer */}
            <Footer />
        </div>
    );
}