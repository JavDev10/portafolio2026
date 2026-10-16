import type { ImageMetadata } from "astro";

import coffee1 from "../assets/sites/CoffeeCenter/coffeecenter.cl-1.jpeg";
import coffee2 from "../assets/sites/CoffeeCenter/coffeecenter.cl-2.jpeg";
import coffee3 from "../assets/sites/CoffeeCenter/coffeecenter.cl-3.jpeg";
import coffee4 from "../assets/sites/CoffeeCenter/coffeecenter.cl-4.jpeg";
import coffee5 from "../assets/sites/CoffeeCenter/coffeecenter.cl-5.jpeg";

import fortium1 from "../assets/sites/FortiumSecurity/fortiumsecurity.cl-1.jpeg";
import fortium2 from "../assets/sites/FortiumSecurity/fortiumsecurity.cl-2.jpeg";
import fortium3 from "../assets/sites/FortiumSecurity/fortiumsecurity.cl-3.jpeg";
import fortium4 from "../assets/sites/FortiumSecurity/fortiumsecurity.cl-4.jpeg";

import gomez1 from "../assets/sites/GomezyAbogados/gomezyabogados.cl-1.jpeg";
import gomez2 from "../assets/sites/GomezyAbogados/gomezyabogados.cl-2.jpeg";
import gomez3 from "../assets/sites/GomezyAbogados/gomezyabogados.cl-3.jpeg";
import gomez4 from "../assets/sites/GomezyAbogados/gomezyabogados.cl-4.jpeg";

import hyer1 from "../assets/sites/Hyer/hyerconstructora.cl-1.jpeg";
import hyer2 from "../assets/sites/Hyer/hyerconstructora.cl-2.jpeg";
import hyer3 from "../assets/sites/Hyer/hyerconstructora.cl-3.jpeg";
import hyer4 from "../assets/sites/Hyer/hyerconstructora.cl-4.jpeg";

import kp3d1 from "../assets/sites/KP3D/kp3d.cl-1.jpeg";
import kp3d2 from "../assets/sites/KP3D/kp3d.cl-2.jpeg";
import kp3d3 from "../assets/sites/KP3D/kp3d.cl-3.jpeg";
import kp3d4 from "../assets/sites/KP3D/kp3d.cl-4.jpeg";

import eduadapta from "../assets/sites/eduadapta.cl.jpeg";
import jesusVillena from "../assets/sites/jesusvillenapsicologo.cl.jpeg";
import opticaDuhalde from "../assets/sites/opticaduhalde.cl.jpeg";

export interface Site {
  title: string;
  domain: string;
  category: string;
  /** Screenshots de página completa; una sola imagen = landing page. */
  pages: ImageMetadata[];
}

export const sites: Site[] = [
  {
    title: "EduAdapta",
    domain: "eduadapta.cl",
    category: "Educación",
    pages: [eduadapta],
  },
  {
    title: "Coffee Center",
    domain: "coffeecenter.cl",
    category: "Cafetería",
    pages: [coffee1, coffee2, coffee3, coffee4, coffee5],
  },
  {
    title: "Hyer Constructora",
    domain: "hyerconstructora.cl",
    category: "Construcción",
    pages: [hyer1, hyer2, hyer3, hyer4],
  },
  {
    title: "Fortium Security",
    domain: "fortiumsecurity.cl",
    category: "Seguridad",
    pages: [fortium1, fortium2, fortium3, fortium4],
  },
  {
    title: "Gómez y Abogados",
    domain: "gomezyabogados.cl",
    category: "Legal",
    pages: [gomez1, gomez2, gomez3, gomez4],
  },
  {
    title: "KP3D",
    domain: "kp3d.cl",
    category: "Impresión 3D · E-commerce",
    pages: [kp3d1, kp3d2, kp3d3, kp3d4],
  },
  {
    title: "Jesús Villena Psicólogo",
    domain: "jesusvillenapsicologo.cl",
    category: "Salud",
    pages: [jesusVillena],
  },
  {
    title: "Óptica Duhalde",
    domain: "opticaduhalde.cl",
    category: "Óptica",
    pages: [opticaDuhalde],
  },
];
