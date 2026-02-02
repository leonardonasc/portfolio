"use client";

import { ArrowUpRight, GithubIcon, Slash } from "lucide-react";
import CopyMail from "./copy-mail";
import Projects from "./projects";
import { useState } from "react";

export default function Content() {

    const [language, setLanguage] = useState<"en" | "pt">("en");


    type Language = "en" | "pt";

    const translations: Record<Language, {
        projects: string; now: string; contactTitle: string;
        contact: string; description: string; currently: string; goal: string
        cardlyDescription: string; kubshDescription: string; instapixDescription: string
    }> = {
        en: {
            projects: "Projects that i've worked on",
            now: "Now",
            contactTitle: "Contact",
            description: "Full Stack Developer. Crafting beautiful, scalable websites and applications. Always seeking new challenges and continuous growth.",
            currently: "Currently focused on building new projects and expanding my knowledge while pursuing my degree. Always learning and improving through hands-on experience.",
            goal: "My goal is to create full-stack applications and charming web experiences driven by creativity and strong visual design. I enjoy turning ideas into real products and building experiences that are both functional and visually appealing.",
            cardlyDescription: "Send meaningful digital cards to anyone, anytime.",
            kubshDescription: "Fast, free, and privacy-focused URL shortening service.",
            instapixDescription: "Simple and secure Pix payments for livestreamers.",
            contact: "Reach me at: "
        },
        pt: {
            projects: "Projetos que eu já trabalhei",
            now: "Atualmente",
            contactTitle: "Contato",
            description: "Desenvolvedor Full Stack focado na criação de aplicações escaláveis, performáticas e visualmente atraentes. Sempre em busca de novos desafios e aprendizado contínuo.",
            currently: "Focado em construir novos projetos e expandir meu conhecimento enquanto curso a faculdade de Análise e Desenvolvimento de Sistemas. Sempre tentando aprender e melhorar cada vez mais através de novas experiências.",
            goal: "Meu objetivo é criar aplicações full-stack e experiências modernas e bem arquitetadas, guiadas pela criatividade e um forte design visual. Gosto de transformar ideias em produtos reais e construir experiências que sejam funcionais e visualmente atraentes.",
            cardlyDescription: "Envie cartões digitais significativos para qualquer pessoa, a qualquer momento.",
            kubshDescription: "Serviço rápido, gratuito e focado na privacidade para encurtar URLs.",
            instapixDescription: "Pagamentos Pix simples e seguros para streamers.",
            contact: "Entre em contato: "
        }
    };

    return (
        <div className="xs:w-full
                        sm:w-full
                        md:w-175
                        lg:w-175
                        xl:w-175
                        2xl:w-175
        min-h-screen flex flex-col gap-y-15 py-25 px-10 sm:px-20 md:px-0 lg:px-0 xl:px-0 2xl:px-0 line-clamp-2 text-neutral-300 leading-6">

            <div className="flex flex-col gap-y-10">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-neutral-200">Leonardo Nascimento</h1>
                    <div className="flex gap-x-2 text-neutral-500 items-center text-sm">
                        <span className="hover:text-neutral-200 hover:underline cursor-pointer underline-offset-2" onClick={() => setLanguage("en")}
                            style={{ textDecoration: language === "en" ? "underline" : "none", color: language === "en" ? "#e5e5e5" : "#71717a" }}
                        >EN</span>
                        <Slash size={14} />
                        <span className="hover:text-neutral-200 hover:underline cursor-pointer underline-offset-2" onClick={() => setLanguage("pt")} style={{ textDecoration: language === "pt" ? "underline" : "none", color: language === "pt" ? "#e5e5e5" : "#71717a" }}>PT</span>
                    </div>
                </div>
                <h2>{translations[language].description}</h2>
            </div>

            <div className="flex flex-col gap-y-1">
                <h3 className="mb-2 text-md text-neutral-400">{translations[language].projects}</h3>
                <div className="flex flex-col sm:flex-row md:flex-row gap-y-3 md:gap-x-3 justify-between">
                    <Projects title="Cardly" description={translations[language].cardlyDescription} />
                    <Projects title="InstaPix" description={translations[language].instapixDescription} />
                    <Projects title="Kub.sh" description={translations[language].kubshDescription} />
                </div>
            </div>

            <div className="flex flex-col gap-y-1">
                <h3 className="mb-4 text-md text-neutral-400">{translations[language].now}</h3>
                <div className="flex flex-col gap-y-6">
                    <p>{translations[language].currently}</p>
                    <p>{translations[language].goal}</p>
                </div>
            </div>

            <div className="flex flex-col gap-y-1">
                <h3 className="mb-6 text-md text-neutral-400">{translations[language].contactTitle}</h3>
                <div className="flex flex-col items-start">
                    <CopyMail />
                    <p className="flex items-center gap-x-2 mt-2"><a style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} href="https://github.com/leonardonasc" target="_blank" className="hover:underline underline-offset-2">github <ArrowUpRight size={12} /></a></p>
                </div>
            </div>

        </div>
    )
}
