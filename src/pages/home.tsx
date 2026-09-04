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
            <MainContent />

            <div className="w-full h-px bg-border my-15" />

            {/* Projetos 02 */}
            <Projects />

            <div className="w-full h-px bg-border my-15" />

            {/* Experiência 03 */}
            <Experience />

            <div className="w-full h-px bg-border my-15" />

            {/* Educação 04 */}
            <Education />

            <div className="w-full h-px bg-border my-15" />

            <Contact />

            <div className="w-full h-px bg-border mt-15 mb-6" />

            <ContactPlus />

            <Footer />
        </div>
    )
}
