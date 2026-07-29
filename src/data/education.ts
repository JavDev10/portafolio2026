// PLACEHOLDER — reemplazar con tus datos reales de universidad y certificaciones.

export const university = {
  degree: "Ingeniería en Informática",
  institution: "Santo Tomas",
  period: "2021 — 2024",
  status: "Finalizado con Excelencia Académica",
  description: "Durante mi formación desarrollé competencias técnicas y analíticas en el área de las tecnologías de la información, enfocándome en la programación, el diseño de sistemas, la administración de redes y la seguridad informática, entre otros ámbitos clave del rubro.",
};

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export const certifications: Certification[] = [
  { name: "Claude Code in Action", issuer: "ANTHROPIC", year: "2026", link: "https://verify.skilljar.com/c/e3tq87h27578" },
  { name: "Git y Github", issuer: "IBM", year: "2026", link: "https://www.coursera.org/account/accomplishments/verify/SBMERXS8WIWK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
  { name: "Linux Commands and Shell Scripting", issuer: "IBM", year: "2026", link: "https://coursera.org/verify/PQ97JMOU95VZ" },
  { name: "Introduction to Software Engineering", issuer: "IBM", year: "2026", link: "https://coursera.org/verify/PML59Y6UBDRU" },
  { name: "Curso de N8N", issuer: "Platzi", year: "2025", link: "https://platzi.com/p/javier8576/curso/12028-course/diploma/detalle/" },
  { name: "Curso Práctico de Wordpress", issuer: "Platzi", year: "2025", link: "https://platzi.com/p/javier8576/curso/1812-course/diploma/detalle/" },
  
];
