import { Slash } from "lucide-react";

export default function Language() {
    return (
        <div className="flex gap-x-2 text-neutral-500 items-center text-sm">
            <span className="hover:text-neutral-200 hover:underline">EN</span>
            <Slash size={14} />
            <span className="hover:text-neutral-200 hover:underline">PT</span>
        </div>
    )
}
