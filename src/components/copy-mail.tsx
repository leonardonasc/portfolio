"use client"

import { Copy, CopyCheck } from "lucide-react"
import { useState } from "react";

export default function CopyMail() {

    const [copy, setCopy] = useState(false);
    const user = "leonardo.nasmt";
    const at = "@";
    const domain = "gmail.com";

    return (
        <div className="border p-1 border-neutral-800/70 flex justify-center items-center  rounded-sm">
            <button
                onClick={() => {
                    navigator.clipboard.writeText(`${user}${at}${domain}`)
                    setCopy(true);
                    setTimeout(() => setCopy(false), 2000);
                }}
                className="hover:cursor-pointer"
            >
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
        </div>
    )
}
