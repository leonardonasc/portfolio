import { MoveUpRight } from "lucide-react";

export default function ContactPlus() {
    return (
        <ul className="flex gap-x-6 md:gap-x-10 text-xs text-muted mx-auto w-full max-w-7xl items-center py-4">
            <li>
                <a href="mailto:leonardo.nasmt@gmail.com" className="hover:text-accent hover:cursor-pointer flex items-center gap-1">
                    E-mail <MoveUpRight className="size-3" />
                </a>
            </li>
            <li>
                <a href="https://github.com/leonardonasc" className="hover:text-accent hover:cursor-pointer flex items-center gap-1">
                    GitHub <MoveUpRight className="size-3" />
                </a>
            </li>
            <li>
                <a href="https://linkedin.com/in/leonardownascimento" className="hover:text-accent hover:cursor-pointer flex items-center gap-1">
                    LinkedIn <MoveUpRight className="size-3" />
                </a>
            </li>
        </ul>
    )
}
