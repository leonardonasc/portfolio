import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import type { ProjectImage } from "../data/projects";

type ProjectCarouselProps = {
    images: ProjectImage[];
    label: string;
};

export default function ProjectCarousel({ images, label }: ProjectCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    if (images.length === 0) return null;

    const activeImage = images[activeIndex];
    const hasMultipleImages = images.length > 1;

    function showPrevious() {
        setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
    }

    function showNext() {
        setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }

    return (
        <div className="border border-border bg-foreground">
            <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[#24292d]">
                <button
                    type="button"
                    onClick={() => setIsPreviewOpen(true)}
                    aria-label={`Ampliar imagem: ${activeImage.alt}`}
                    className="flex max-h-[70vh] w-full cursor-zoom-in items-center justify-center"
                >
                    <img
                        src={activeImage.src}
                        alt={activeImage.alt}
                        className="max-h-[70vh] w-full object-contain transition-opacity duration-300"
                    />
                </button>
                {hasMultipleImages && (
                    <>
                        <button
                            type="button"
                            onClick={showPrevious}
                            aria-label={`Imagem anterior de ${label}`}
                            className="absolute left-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center border border-white/30 bg-background/80 text-primary transition-colors hover:border-accent hover:text-accent"
                        >
                            <ChevronLeft className="size-4" />
                        </button>
                        <button
                            type="button"
                            onClick={showNext}
                            aria-label={`Próxima imagem de ${label}`}
                            className="absolute right-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center border border-white/30 bg-background/80 text-primary transition-colors hover:border-accent hover:text-accent"
                        >
                            <ChevronRight className="size-4" />
                        </button>
                    </>
                )}
            </div>
            {hasMultipleImages && (
                <div className="flex items-center justify-between border-t border-border px-4 py-3">
                    <span className="font-geist-mono text-[10px] uppercase tracking-wider text-muted">
                        {label} · {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                    </span>
                    <div className="flex gap-1.5" aria-label={`Selecionar imagem de ${label}`}>
                        {images.map((image, index) => (
                            <button
                                key={image.src}
                                type="button"
                                aria-label={`Ver imagem ${index + 1} de ${label}`}
                                aria-current={index === activeIndex}
                                onClick={() => setActiveIndex(index)}
                                className={`size-1.5 rounded-full transition-colors ${index === activeIndex ? "bg-accent" : "bg-border hover:bg-muted"}`}
                            />
                        ))}
                    </div>
                </div>
            )}
            {isPreviewOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Visualização ampliada: ${activeImage.alt}`}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5 md:p-10"
                    onClick={() => setIsPreviewOpen(false)}
                >
                    <button
                        type="button"
                        onClick={() => setIsPreviewOpen(false)}
                        aria-label="Fechar visualização ampliada"
                        className="absolute right-5 top-5 flex size-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-accent hover:text-accent"
                    >
                        <X className="size-5" />
                    </button>
                    <img
                        src={activeImage.src}
                        alt={activeImage.alt}
                        className="max-h-full max-w-full object-contain"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}