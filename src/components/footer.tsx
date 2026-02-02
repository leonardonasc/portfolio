import { Minus } from "lucide-react"

import { TextClock } from "./text-clock"

export default function Footer() {

    return (
        <div className="w-full flex justify-center items-center border-t border-t-zinc-800 text-zinc-400">

            <div className="w-full sm:w-full md:w-175 lg:w-175
              px-10 sm:px-20 md:px-0 lg:px-0 xl:px-0 2xl:px-0 py-3 flex justify-between items-center 
            font-mono text-sm">
                <span className="">2026</span>
                <div className="flex gap-x-1">
                    Santa Catarina, Brasil <Minus size={20} /> <TextClock />
                </div>
            </div>

        </div>
    )
}
