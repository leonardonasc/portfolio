import { Activity, Ellipsis, Minus } from "lucide-react"
import TextClock from "./text-clock"

export default function Footer() {

    return (
        <div className="w-full flex justify-center items-center border-t border-t-zinc-600 text-zinc-400">

            <div className="w-full md:w-[50%] py-4 flex gap-x-1 md:px-30 justify-center md:justify-between items-center font-mono text-sm">
                <span className="hidden md:block">2026</span>
                <div className="flex gap-x-1">
                    Santa Catarina, Brazil <Minus size={20}/> <TextClock />
                </div>
            </div>
        </div>
    )
}
