import Language from "./language-selector";
import Projects from "./projects";

export default function Content() {
    return (
        <div className="w-[50%] h-screen flex flex-col gap-y-15 py-25 px-30 text-neutral-200">
            <div className="flex flex-col gap-y-10">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold">Leonardo Nascimento</h1>
                    <Language />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse atque odit! Amet in quia porro, ratione cumque dolore officiis quasi quidem alias soluta modi, deleniti minus maxime repudiandae esse!</p>
            </div>
            <div className="flex flex-col gap-y-1">
                <h3 className="mb-2 text-md text-zinc-400">Projects</h3>
                <div className="flex gap-x-3 justify-between">
                    <Projects />
                    <Projects />
                    <Projects />
                </div>
            </div>
            <div className="flex flex-col gap-y-1">
                <h3 className="mb-2 text-md text-zinc-400">Now</h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum perferendis voluptatibus nobis, porro hic ab. Accusamus magni, ullam inventore recusandae sapiente ut maiores quod error molestias in nihil provident?</p>
            </div>
            <div className="flex flex-col gap-y-1">
                <h3 className="mb-2 text-md text-zinc-400">Contact</h3>
                <p className="">You can reach me at</p>
            </div>
        </div>
    )
}
