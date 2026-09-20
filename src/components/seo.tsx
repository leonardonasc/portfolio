import { useEffect } from "react";

type SeoProps = {
    title: string;
    description: string;
    path: string;
};

const siteUrl = "https://leonardonascimento.site";

export default function Seo({ title, description, path }: SeoProps) {
    useEffect(() => {
        const canonicalUrl = `${siteUrl}${path}`;
        document.title = title;

        const updateMeta = (selector: string, content: string) => {
            const element = document.querySelector<HTMLMetaElement>(selector);
            if (element) element.content = content;
        };

        updateMeta('meta[name="description"]', description);
        updateMeta('meta[property="og:title"]', title);
        updateMeta('meta[property="og:description"]', description);
        updateMeta('meta[property="og:url"]', canonicalUrl);
        updateMeta('meta[name="twitter:title"]', title);
        updateMeta('meta[name="twitter:description"]', description);

        const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        canonical?.setAttribute("href", canonicalUrl);
    }, [description, path, title]);

    return null;
}
