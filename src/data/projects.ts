export type ProjectCategory = "Front-end" | "Full stack" | "Mobile";

export type Project = {
    id: number;
    slug: string;
    title: string;
    category: ProjectCategory;
    type: string[];
    inDev: boolean;
    description: string;
    image: string;
    overview: string;
    problem: string;
    solution: string;
    experience: string;
    features: string[];
    frontEnd: string[];
    backEnd: string[];
    tools: string[];
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
        image: "https://imgur.com/e9GHrJv.png",
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
        image: "https://imgur.com/2DKAhgb.png",
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
        image: "https://imgur.com/RfVnu6Q.png",
        overview: "Cardly leva o cartão de visitas para uma experiência digital mais flexível. Cada perfil pode apresentar informações de contato com uma identidade própria e fácil de atualizar.",
        problem: "Cartões físicos são difíceis de manter atualizados e não oferecem espaço para mostrar o trabalho ou os canais de contato de uma pessoa.",
        solution: "Um aplicativo mobile focado em criação, personalização e compartilhamento instantâneo de cartões digitais.",
        experience: "O fluxo foi reduzido ao essencial: escolher uma base, editar informações, visualizar o resultado e compartilhar. A interface mantém o foco na identidade do cartão e evita configurações escondidas.",
        features: ["Cartões personalizados", "Compartilhamento rápido", "Perfil profissional", "Pré-visualização"],
        frontEnd: ["React Native", "Expo", "TypeScript"],
        backEnd: ["API de perfis"],
        tools: ["Figma", "Expo Go", "GitHub"],
        demo: "https://cardly.bluepaper.com.br/",
    },
];

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug);
}
