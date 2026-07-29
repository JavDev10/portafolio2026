import type { ImageMetadata } from "astro";

import eduAdaptaFondo from "../assets/projects/EduAdapta/fondo-edu.jpg";

import wooloader1 from "../assets/projects/wooloader/wooloader-1.png";
import wooloader2 from "../assets/projects/wooloader/wooloader-2.png";
import wooloader3 from "../assets/projects/wooloader/wooloader-3.png";
import wooloader4 from "../assets/projects/wooloader/wooloader-4.png";
import wooloader5 from "../assets/projects/wooloader/wooloader-5.png";

import pTitulo1 from "../assets/projects/p.titulo/p.titulo-1.webp";
import pTitulo2 from "../assets/projects/p.titulo/p.titulo-2.webp";
import pTitulo3 from "../assets/projects/p.titulo/p.titulo-3.webp";
import pTitulo4 from "../assets/projects/p.titulo/p.titulo-4.webp";
import pTitulo5 from "../assets/projects/p.titulo/p.titulo-5.webp";
import pTitulo6 from "../assets/projects/p.titulo/p.titulo-6.webp";
import pTitulo7 from "../assets/projects/p.titulo/p.titulo-7.webp";
import pTitulo8 from "../assets/projects/p.titulo/p.titulo-8.webp";

import doro1 from "../assets/projects/dorodoro/doro1.jpg";
import doro2 from "../assets/projects/dorodoro/doro2.jpg";
import doro3 from "../assets/projects/dorodoro/doro3.jpg";
import doro4 from "../assets/projects/dorodoro/doro4.jpg";
import doro5 from "../assets/projects/dorodoro/doro5.jpg";
import doro6 from "../assets/projects/dorodoro/doro6.jpg";
import doro7 from "../assets/projects/dorodoro/doro7.jpg";

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
  images?: ImageMetadata[];
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
    images: [eduAdaptaFondo],
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
    images: [wooloader1, wooloader2, wooloader3, wooloader4, wooloader5],
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
    images: [pTitulo1, pTitulo2, pTitulo3, pTitulo4, pTitulo5, pTitulo6, pTitulo7, pTitulo8],
  },
  {
    slug: "APP DE ESCRITORIO",
    title: "DoroDoro",
    year: "2025",
    role: "Full-stack",
    description: "Timer pomodoro de escritorio con temas visuales personalizables. Construido deliberadamente sin framework ni bundler — un solo archivo HTML/JS cargado directo en Electron. 22 descargas orgánicas en itch.io sin promoción.",
    tags: ["ELECTRON", "JAVASCRIPT", "TAILWIND"],
    href: "https://javidev12.itch.io/dorodoro",
    images: [doro1, doro2, doro3, doro4, doro5, doro6, doro7],
  },
];
