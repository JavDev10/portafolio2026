export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  period: string;
  description: string;
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Desarrollador Web (Freelance)",
    company: "FocusTeam",
    duration: "4 meses",
    period: "Abril 2026 - Actualidad",
    description:
      "Desarrollo sitios web para clientes de la agencia mediante iteración directa hasta el resultado óptimo. Automaticé la optimización de imágenes del equipo (reduciendo espacio en hosting) y construí un formulario para que los clientes suban su catálogo e importen productos directo a la tienda.",
    tags: ["PHP", "WordPress", "Woocommerce", "Elementor", "Python", "React/TS/Supabase"],
  },
  {
    role: "Analista Programador Junior",
    company: "ADIPA",
    duration: "1 año",
    period: "Marzo 2025 – Marzo 2026",
    description:
      "Diseñé automatizaciones con n8n que reemplazaron trabajo manual del equipo: un flujo que para gestionar clientes morosos (Mercadopago/Duemint/Sitio Web/Monday), un flujo que creaba productos completos a partir de un documento con la info de multiples equipo, reduciendo el tiempo de creación de 30-50 minutos a menos de 3. Códificacion de vistas balde en el sitio web, diseño de APIs REST propias y QA web con Playwright.",
    tags: ["Laravel", "PHP", "API REST", "WordPress", "MySQL", "Linux", "Docker", "Git", "n8n", "Playwright"],
  },
  {
    role: "Analista TI",
    company: "ADIPA",
    duration: "3 meses",
    period: "2024",
    description:
      "Diseñé desde cero la dockerización local del proyecto de Adipa —reemplazando el entorno LAMP existente—, sin configuración previa que adaptar agilizando la instalación de días a horas. Programé componentes con Laravel/PHP, gestioné contenido en WordPress y desarrollé notebooks de Python para el equipo.",
    tags: ["Laravel", "PHP", "Python", "WordPress", "MySQL", "Linux", "Docker", "Git"],
  },
];
