import Contact from "../components/contact";
import ContactPlus from "../components/contact-plus";
import Education from "../components/education";
import Experience from "../components/experience";
import Footer from "../components/footer";
import MainContent from "../components/main";
import Navbar from "../components/navbar";
import Projects from "../components/projects";

export default function Home() {
    return (
        <div className="w-full flex flex-col p-5 md:px-96">
            <Navbar />
            {/* divider */}
            <div className="w-full h-px bg-border" />

            {/* Conteúdo principal 01 */}
            <div className="py-4" id='main-content'>
                <MainContent />
            </div>

            <div className="w-full h-px bg-border my-15" />

            {/* Projetos 02 */}
            <div className="py-4" id='projects'>
                <Projects />
            </div>

            <div className="w-full h-px bg-border my-15" />

            {/* Experiência 03 */}
            <div className="py-4" id='experience'>
                <Experience />
            </div>

            <div className="w-full h-px bg-border my-15" />

            {/* Educação 04 */}
            <Education />

            <div className="w-full h-px bg-border my-15" />

            <div className="py-4" id='contact' >
                <Contact />
            </div>

            <div className="w-full h-px bg-border mt-15 mb-6" />

            <ContactPlus />

            <Footer />
        </div>
    )
}
