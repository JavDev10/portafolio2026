export interface Project {
  slug: string;
  title: string;
  year: string;
  role: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
  spotlight?: boolean;
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "SAAS EDUCATIVO",
    title: "EduAdapta",
    year: "2026",
    role: "Full-stack",
    description:
      "Plataforma SaaS para educación diferencial (discapacidad intelectual, síndrome de Down como caso ancla) que permite a docentes de programas PIE crear actividades personalizadas con un motor pedagógico basado en método Troncoso y ayudas graduadas. Diseño con minimización de datos alineado a la Ley 21.719 y seguridad multi-tenant a nivel de base de datos. En desarrollo activo (fase 2 de 6) · seleccionado entre los 20 mejores proyectos en Mercado E (Santo Tomás). Nace de mi proyecto de título, validado con el Instituto Down de Concepción.",
    tags: ["REACT", "TYPESCRIPT", "SUPABASE", "POSTGRESQL"],
    featured: true,
    spotlight: true,
    href: "#",
    images: [
      "/projects/EduAdapta/fondo-edu.jpg",
    ],
    
  },
  {
    slug: "HERRAMIENTA · CÓDIGO ABIERTO",
    title: "Wooloader",
    year: "2026",
    role: "Full-stack",
    description:
      "Herramienta open-source para importar productos a WooCommerce de forma masiva vía interfaz visual, exportando CSV compatible con el importador nativo. Evolucionó de un tool interno para clientes freelance a un producto independiente con autenticación por usuario y modo demo público.",
    tags: ["REACT", "TYPESCRIPT", "SUPABASE", "VITE"],
    href: "https://wooloader.com/",
    featured: true,
    images: [
      "/projects/wooloader/wooloader-1.png",
      "/projects/wooloader/wooloader-2.png",
      "/projects/wooloader/wooloader-3.png",
      "/projects/wooloader/wooloader-4.png",
      "/projects/wooloader/wooloader-5.png",
    ],
  },
  {
    slug: "PROYECTO ACADÉMICO",
    title: "Proyecto de título",
    year: "2024",
    role: "Full-stack",
    description:
      "Aplicación web educativa para el Instituto Down de Concepción, como herramienta de apoyo docente para alumnos con síndrome de Down. Proyecto de titulación con excelencia académica — origen de EduAdapta.",
    tags: ["REACT", "TYPESCRIPT", "FIREBASE"],
    featured: true,
    href: "https://www.youtube.com/watch?v=9LxU09u9mXY",
    images: [
      "/projects/p.titulo/p.titulo-1.webp",
      "/projects/p.titulo/p.titulo-2.webp",
      "/projects/p.titulo/p.titulo-3.webp",
      "/projects/p.titulo/p.titulo-4.webp",
      "/projects/p.titulo/p.titulo-5.webp",
      "/projects/p.titulo/p.titulo-6.webp",
      "/projects/p.titulo/p.titulo-7.webp",
      "/projects/p.titulo/p.titulo-8.webp",
    ],
  },
  {
    slug: "APP DE ESCRITORIO",
    title: "DoroDoro",
    year: "2025",
    role: "Full-stack",
    description: "Timer pomodoro de escritorio con temas visuales personalizables. Construido deliberadamente sin framework ni bundler — un solo archivo HTML/JS cargado directo en Electron. 21 descargas orgánicas en itch.io sin promoción.",
    tags: ["ELECTRON", "JAVASCRIPT", "TAILWIND"],
    href: "https://javidev12.itch.io/dorodoro",
    images: [
      "/projects/dorodoro/doro1.jpg",
      "/projects/dorodoro/doro2.jpg",
      "/projects/dorodoro/doro3.jpg",
      "/projects/dorodoro/doro4.jpg",
      "/projects/dorodoro/doro5.jpg",
      "/projects/dorodoro/doro6.jpg",
      "/projects/dorodoro/doro7.jpg",
    ],
  },
];
