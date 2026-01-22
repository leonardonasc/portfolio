import Language from "./language-selector";
import Projects from "./projects";

export default function Content() {

    const user = "leonardo.nasmt";
    const at = "@";
    const domain = "gmail.com";

    return (
        <div className="md:w-[50%] min-h-screen flex flex-col gap-y-15 py-25 px-10 md:px-30 text-neutral-200">
            <div className="flex flex-col gap-y-10">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-neutral-200">Leonardo Nascimento</h1>
                    <Language />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse atque odit! Amet in quia porro, ratione cumque dolore officiis quasi quidem alias soluta modi, deleniti minus maxime repudiandae esse!</p>
            </div>
            <div className="flex flex-col gap-y-1">
                <h3 className="mb-2 text-md text-neutral-400">Projects</h3>
                <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-3 justify-between">
                    <Projects />
                    <Projects />
                    <Projects />
                </div>
            </div>
            <div className="flex flex-col gap-y-1">
                <h3 className="mb-2 text-md text-neutral-400">Now</h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum perferendis voluptatibus nobis, porro hic ab. Accusamus magni, ullam inventore recusandae sapiente ut maiores quod error molestias in nihil provident?</p>
            </div>
            <div className="flex flex-col gap-y-1">
                <h3 className="mb-2 text-md text-neutral-400">Contact</h3>
                <p className="">You can reach me at <span className="underline decoration-neutral-400">{user}{at}{domain}</span>.</p>
            </div>
        </div>
    )
}
