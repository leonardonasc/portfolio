import TextClock from "./text-clock"

export default function Footer() {

    return (
        <div className="w-full flex justify-center items-center border-t border-t-zinc-600 text-zinc-400">
            <div className="w-full md:w-[50%] py-4 flex gap-x-1 justify-center md:justify-end items-center font-mono text-sm">
                Santa Catarina, Brazil - <TextClock />
            </div>
        </div>
    )
}
