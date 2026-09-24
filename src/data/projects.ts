export type ProjectCategory = "Front-end" | "Full stack" | "Mobile" | "SaaS";

export type ProjectImage = {
    src: string;
    alt: string;
};

export type Project = {
    id: number;
    slug: string;
    title: string;
    category: ProjectCategory;
    type: string[];
    inDev: boolean;
    description: string;
    image: string;
    imageSrcSet?: string;
    desktopImages?: ProjectImage[];
    mobileImages?: ProjectImage[];
    overview: string;
    problem: string;
    solution: string;
    experience: string;
    features: string[];
    frontEnd?: string[];
    backEnd?: string[];
    tools?: string[];
    repo?: string;
    demo?: string;
};

export const projects: Project[] = [
    {
        id: 1,
        slug: "newtion",
        title: "Newtion",
        category: "Full stack",
        type: ["Web", "Full-Stack", "Sistema organizacional"],
        inDev: true,
        description: "Uma central de organização pessoal para transformar planos espalhados em próximos passos claros.",
        image: "/projects/newtion/desktop/newtion-landing.webp",
        imageSrcSet: "/projects/newtion/desktop/newtion-landing-640.webp 640w, /projects/newtion/desktop/newtion-landing-960.webp 960w, /projects/newtion/desktop/newtion-landing-1280.webp 1280w",
        desktopImages: [
            { src: "/projects/newtion/desktop/newtion-landing.webp", alt: "Tarefas do Newtion" },
            { src: "/projects/newtion/desktop/newtion-dashboard.webp", alt: "Dashboard do Newtion" },
            { src: "/projects/newtion/desktop/newtion-dashboard-dark.webp", alt: "Dashboard do Newtion (modo dark)" },
            { src: "/projects/newtion/desktop/newtion-notes.webp", alt: "Notas do Newtion" },
            { src: "/projects/newtion/desktop/newtion-404.webp", alt: "Página não encontrada" },
        ],
        mobileImages: [
            { src: "/projects/newtion/mobile/newtion-mobile-dashboard.webp", alt: "Dashboard do Newtion" },
            { src: "/projects/newtion/mobile/newtion-mobile-nav.webp", alt: "Notas do Newtion" },
        ],
        overview: "Newtion reúne tarefas, dashboard, wishlists, planejamento de viagens e calendário de eventos em uma única experiência. O projeto nasceu da vontade de criar um espaço pessoal que acompanhasse a complexidade da vida sem parecer uma planilha.",
        problem: "As ferramentas de organização costumam separar cada parte da rotina em produtos diferentes. Essa fragmentação cria atrito, espalha o contexto e dificulta enxergar o que realmente merece atenção.",
        solution: "Uma plataforma modular, com visão geral rápida e espaços dedicados para cada tipo de plano. A arquitetura permite evoluir cada módulo sem perder consistência visual ou os dados que conectam a rotina.",
        experience: "A experiência privilegia hierarquia, respiro e ações curtas. Decidi manter o dashboard enxuto e deixar a profundidade aparecer sob demanda, com estados claros para tarefas, eventos e planos em andamento.",
        features: ["Dashboard pessoal", "Tarefas e calendário", "Wishlists", "Planejamento de viagens"],
        frontEnd: ["Next.js", "TypeScript", "Tailwind CSS"],
        backEnd: ["Drizzle ORM", "PostgreSQL", "Better Auth"],
        tools: ["Zod", "Vercel", "GitHub"],
        repo: "https://github.com/leonardonasc/newtion-planner",
        demo: "https://newtion-planner.vercel.app/",
    },
    {
        id: 2,
        slug: "diogo-defante",
        title: "Diogo Defante",
        category: "Front-end",
        type: ["Web", "Landing page"],
        inDev: false,
        description: "Uma landing page editorial para reunir conteúdo, playlists, newsletter e os principais canais do influenciador.",
        image: "/projects/defante.webp",
        imageSrcSet: "/projects/defante-640.webp 640w, /projects/defante-960.webp 960w, /projects/defante-1280.webp 1280w",
        overview: "A página funciona como uma porta de entrada para o universo do Diogo Defante. O conteúdo foi organizado para que cada visita encontre rapidamente um vídeo, uma playlist ou um canal para acompanhar.",
        problem: "A audiência estava distribuída entre várias plataformas, sem um ponto central que desse contexto e conduzisse a pessoa para o conteúdo certo.",
        solution: "Uma interface leve, direta e com personalidade, que transforma links dispersos em uma narrativa visual simples de explorar.",
        experience: "A composição foi pensada para leitura rápida: blocos com bastante contraste, chamadas objetivas e uma navegação que prioriza o conteúdo em vez da ornamentação.",
        features: ["Links de conteúdo", "Playlists", "Newsletter", "Redes sociais"],
        frontEnd: ["Next.js", "TypeScript", "Tailwind CSS"],
        backEnd: ["Integrações externas"],
        tools: ["Vercel", "Figma", "GitHub"],
        demo: "https://www.defante.com.br/",
    },
    {
        id: 3,
        slug: "cardly",
        title: "Cardly",
        category: "Mobile",
        type: ["Mobile", "Aplicativo"],
        inDev: false,
        description: "Cartões digitais personalizados para compartilhar contato e identidade profissional em poucos toques.",
        image: "/projects/cardly.webp",
        imageSrcSet: "/projects/cardly-640.webp 640w, /projects/cardly-960.webp 960w, /projects/cardly-1280.webp 1280w",
        overview: "Cardly leva o cartão de visitas para uma experiência digital mais flexível. Cada perfil pode apresentar informações de contato com uma identidade própria e fácil de atualizar.",
        problem: "Cartões físicos são difíceis de manter atualizados e não oferecem espaço para mostrar o trabalho ou os canais de contato de uma pessoa.",
        solution: "Um aplicativo mobile focado em criação, personalização e compartilhamento instantâneo de cartões digitais.",
        experience: "O fluxo foi reduzido ao essencial: escolher uma base, editar informações, visualizar o resultado e compartilhar. A interface mantém o foco na identidade do cartão e evita configurações escondidas.",
        features: ["Cartões personalizados", "Compartilhamento rápido", "Perfil profissional", "Pré-visualização"],
        frontEnd: ["React Native", "Expo", "TypeScript"],
        backEnd: ["API de perfis"],
        tools: ["Figma", "Expo Go", "GitHub"],
    },
    {
        id: 4,
        slug: "landing-exposicao",
        title: "Exposição Belas Artes PUCPR",
        category: "Front-end",
        type: ["Landing Page", "Web"],
        inDev: false,
        description: "Uma landing page para divulgar a exposição de trabalhos de alunos do curso de Artes Visuais da PUCPR.",
        image: "/projects/kay/kay.webp",
        overview: "A landing page apresenta os trabalhos de alunos do curso de Artes Visuais da PUCPR, com informações sobre a exposição, datas e horários, além de links para redes sociais e contato.",
        problem: "A exposição precisava de uma presença online para divulgar os trabalhos dos alunos e atrair visitantes, mas não havia um site dedicado para isso.",
        desktopImages: [
            { src: "/projects/kay/kay.webp", alt: "Landing page da exposição" },
            { src: "/projects/kay/kay2.webp", alt: "Landing page da exposição" },
        ],
        mobileImages: [
            { src: "/projects/kay/kay-mobile.webp", alt: "Landing page da exposição mobile" },
            { src: "/projects/kay/kay-mobile2.webp", alt: "Landing page da exposição mobile" },
            { src: "/projects/kay/kay-mobile3.webp", alt: "Landing page da exposição mobile" },
        ],
        solution: "Uma landing page simples e direta, com foco na apresentação dos trabalhos e nas informações essenciais sobre a exposição.",
        experience: "A experiência do usuário foi pensada para ser intuitiva e agradável, com navegação fácil e rápida, além de um design visualmente atraente que valoriza os trabalhos dos alunos.",
        features: ["Cartões personalizados", "Compartilhamento rápido", "Perfil profissional", "Pré-visualização"],
        frontEnd: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: 5,
        slug: "kubsh",
        title: "kub.sh",
        category: "Full stack",
        type: ["SaaS", "Web"],
        inDev: false,
        description: "Uma plataforma de encurtamento de links com foco em performance, agilidade e recursos avançados de personalização.",
        image: "/projects/kubsh/kubsh.webp",
        overview: "O kub.sh foi uma plataforma de encurtamento de links que permitia aos usuários criar e gerenciar URLs personalizadas, com planos gratuitos e pagos. A aplicação oferece recursos avançados de geolocalização, rastreamento de acessos, assinaturas e otimização de SEO, incluindo funcionalidades exclusivas para usuários premium.",
        problem: "Usuários e empresas precisavam de uma maneira rápida e eficiente de encurtar e gerenciar links, com maior controle sobre seus destinos, métricas de acesso e personalização. A plataforma também precisava oferecer recursos avançados para usuários premium, mantendo uma experiência simples e performática.",
        solution: "Uma plataforma de encurtamento de links desenvolvida com foco em performance e agilidade, oferecendo criação de slugs personalizados, recursos de geolocalização, otimização de SEO, rastreamento de acessos e planos gratuitos e pagos com funcionalidades exclusivas.",
        experience: "A experiência foi pensada para ser rápida e intuitiva, permitindo que os usuários criem e gerenciem links com facilidade. Recursos como slugs personalizados, geolocalização, assinaturas e ferramentas avançadas de SEO ampliam as possibilidades de uso, enquanto a estrutura da aplicação prioriza desempenho e eficiência.",
        features: [
            "Encurtamento de links",
            "Slugs personalizados",
            "Geolocalização de acessos",
            "Otimização de SEO",
            "Planos gratuitos e premium",
            "Sistema de assinaturas",
            "Rastreamento de acessos",
        ],
        frontEnd: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Radix UI",
            "Framer Motion",
            "React Hook Form",
            "Zod",
        ],
        backEnd: [
            "AdonisJS",
            "MySQL",
            "Lucid ORM",
            "JWT",
            "Argon2",
            "Stripe",
            "Resend",
            "AWS S3",
        ],
        tools: [
            "Git",
            "Vercel",
        ],
    },
];

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug);
}
