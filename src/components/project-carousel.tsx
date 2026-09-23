import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { ProjectImage } from "../data/projects";

type ProjectCarouselProps = {
    images: ProjectImage[];
    label: string;
};

export default function ProjectCarousel({ images, label }: ProjectCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

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
            <div className="relative aspect-video overflow-hidden bg-[#24292d]">
                <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="h-full w-full object-cover transition-opacity duration-300"
                />
                {hasMultipleImages && (
                    <>
                        <button
                            type="button"
                            onClick={showPrevious}
                            aria-label={`Imagem anterior de ${label}`}
                            className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center border border-white/30 bg-background/80 text-primary transition-colors hover:border-accent hover:text-accent"
                        >
                            <ChevronLeft className="size-4" />
                        </button>
                        <button
                            type="button"
                            onClick={showNext}
                            aria-label={`Próxima imagem de ${label}`}
                            className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center border border-white/30 bg-background/80 text-primary transition-colors hover:border-accent hover:text-accent"
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
        </div>
    );
}