"use client";

import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

export default function CopyMail() {
    const [copy, setCopy] = useState(false);

    const user = "leonardo.nasmt";
    const at = "@";
    const domain = "gmail.com";

    const email = `${user}${at}${domain}`;

    return (
        <div className="relative group p-1 flex justify-center items-center rounded-sm">
            <button
                onClick={() => {
                    navigator.clipboard.writeText(email);
                    setCopy(true);
                    setTimeout(() => setCopy(false), 2000);
                }}
                className="hover:cursor-pointer flex gap-x-2 items-center"
                aria-label="Copy email"
            >
                <span className="underline decoration-neutral-600">{email}</span>
                {copy ? (
                    <span className="flex items-center gap-x-1 text-green-600">
                        <CopyCheck size={16} />
                    </span>
                ) : (
                    <span className="flex items-center gap-x-1 hover:text-neutral-200">
                        <Copy size={16} />
                    </span>
                )}
            </button>

            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-neutral-700/30 px-2 py-1 text-xs text-neutral-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {copy ? "Email copied" : "Copy email"}
            </span>

        </div>
    );
}
