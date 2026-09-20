import { motion } from "motion/react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
};

export default function ScrollReveal({ children, className }: ScrollRevealProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}