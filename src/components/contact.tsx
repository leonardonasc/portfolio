import { MoveUpRight } from "lucide-react";
import ContactPlus from "./contact-plus";
import Title from "./title";

export default function Contact() {
    return (
        <div>
            <Title subtitle="Vamos conversar" number="06" />

            <p className="my-4 mb-9 text-4xl font-medium md:w-full md:text-7xl lg:w-175">
                Vamos criar algo <span className="text-accent">relevante</span> juntos?
            </p>

            <a
                href="mailto:leonardo.nasmt@gmail.com"
                className="group mb-5 flex w-fit items-center gap-2 bg-accent px-5 py-4 text-sm font-semibold text-background transition-colors hover:bg-accent/80"
            >
                Entrar em contato

                <MoveUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <section id="contact-plus">
                <ContactPlus />
            </section>
        </div>
    )
}
