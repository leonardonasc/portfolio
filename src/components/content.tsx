import CopyMail from "./copy-mail";
import Language from "./language-selector";
import Projects from "./projects";

export default function Content() {

    // const user = "leonardo.nasmt";
    // const at = "@";
    // const domain = "gmail.com";

    return (
        <div className="md:w-[50%] min-h-screen flex flex-col gap-y-15 py-25 px-10 md:px-30 text-neutral-200">

            <div className="flex flex-col gap-y-10">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-neutral-200">Leonardo Nascimento</h1>
                    <Language />
                </div>
                <p>Full Stack Developer. <span className="underline underline-offset-2 font-mono decoration-neutral-600">Crafting</span> beautiful, scalable websites and applications. Always seeking new challenges and continuous growth.</p>
            </div>

            <div className="flex flex-col gap-y-1">
                <h3 className="mb-2 text-md text-neutral-400">Projects that i've worked on</h3>
                <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-3 justify-between">
                    <Projects title="Cardly" description="Send meaningful digital cards to anyone, anytime." />
                    <Projects title="InstaPix" description="Simple and secure Pix payments for livestreamers." />
                    <Projects title="Kub.sh" description="Fast, free, and privacy-focused URL shortening service." />
                </div>
            </div>

            <div className="flex flex-col gap-y-1">
                <h3 className="mb-4 text-md text-neutral-400">Now</h3>
                <div className="flex flex-col gap-y-6">
                    <p>Currently focused on building new projects and expanding my knowledge while pursuing my degree. Always learning and improving through hands-on experience.</p>
                    <p>My goal is to create full-stack applications and charming web experiences driven by creativity and strong visual design. I enjoy turning ideas into real products and building experiences that are both functional and visually appealing.</p>
                </div>
            </div>

            <div className="flex flex-col gap-y-1">
                <h3 className="mb-2 text-md text-neutral-400">Contact</h3>
                <div className="flex flex-col md:items-center md:flex-row">
                    <p>Reach me at:</p>
                    <CopyMail />
                </div>
            </div>

        </div>
    )
}
