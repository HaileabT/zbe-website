/* Content comes from https://zbepowereng.com.
   Gallery titles describe the photos and should be confirmed by the company. */
import type { StaticImageData } from "next/image";

import smartBanking from "@/assets/photos/smart-banking.jpg";
import forecourt from "@/assets/photos/forecourt-lighting.jpg";
import highRise from "@/assets/photos/high-rise.jpg";
import office from "@/assets/photos/office-building.jpg";
import westin from "@/assets/photos/westin-addis.png";
import coldRoom from "@/assets/photos/cold-room.jpg";
import minaye from "@/assets/photos/minaye-office-park.jpg";

import alemSteel from "@/assets/logos/alem-steel.png";
import dashen from "@/assets/logos/dashen-bank.png";
import dezacon from "@/assets/logos/dezacon.jpg";
import marriott from "@/assets/logos/marriott.png";
import minayeLogo from "@/assets/logos/minaye.png";
import moh from "@/assets/logos/ministry-of-health.webp";
import multichoice from "@/assets/logos/multichoice.svg";
import universal from "@/assets/logos/universal-construction.png";
import visa from "@/assets/logos/visa-ethiopia.png";
import yema from "@/assets/logos/yema-architecture.jpg";
import zias from "@/assets/logos/zias.jpg";
export { default as zbeLogo } from "@/assets/logos/zbe-logo.jpg";

export type Project = { title: string; img: StaticImageData };

export const PROJECTS: Project[] = [
  { title: "Smart Banking Branch", img: smartBanking },
  { title: "Forecourt & Landscape Lighting", img: forecourt },
  { title: "High-rise Tower", img: highRise },
  { title: "Office Building", img: office },
  { title: "Westin Addis Ababa", img: westin },
  // { title: "Cold Room Installation", img: coldRoom },
  { title: "Minaye Office Park", img: minaye },
];

/** Indexes into PROJECTS for the hero rotation. */
export const FEATURED = [0, 4, 5, 2] as const;

/** Hero wall columns (indexes into PROJECTS). */
export const WALL_A = [0, 2, 4] as const;
export const WALL_B = [1, 3, 5] as const;

export type Service = { title: string; text: string };

/** The six services, same order and descriptions as the live site. */
export const SERVICES: Service[] = [
  { title: "Comprehensive Electrical Solutions", text: "A full spectrum of services for your electrical needs, from installation to maintenance." },
  { title: "Custom PCB Design and Manufacturing", text: "Tailored electronic designs created to meet specific client requirements, delivered with our advanced manufacturing process." },
  { title: "ICT Infrastructure Development", text: "Expertise in building and developing robust ICT infrastructure for diverse applications." },
  { title: "Prototyping Services", text: "End-to-end prototyping and testing in our state-of-the-art electronics laboratory." },
  { title: "Consultation and Assessment", text: "Thorough assessments and consultations to ensure all electrical installations meet safety and efficiency standards." },
  { title: "24/7 Emergency Support", text: "Reliable emergency support for electrical issues at any time, ensuring your safety and peace of mind." },
];

export const CLIENTS: { name: string; logo: StaticImageData }[] = [
  { name: "Dashen Bank", logo: dashen },
  { name: "Ministry of Health – Ethiopia", logo: moh },
  { name: "Marriott International", logo: marriott },
  { name: "MultiChoice", logo: multichoice },
  { name: "VISA", logo: visa },
  { name: "Minaye Group", logo: minayeLogo },
  { name: "Universal Construction", logo: universal },
  { name: "ZIAS", logo: zias },
  { name: "Dezacon", logo: dezacon },
  { name: "Yema Architecture", logo: yema },
  { name: "Alem Steel", logo: alemSteel },
];

export const TESTIMONIALS = [
  { title: "Exceptional Service and Expertise", text: "The team at zbepowereng.com provided us with outstanding electrical installation systems. Their professionalism and attention to detail were evident throughout the project." },
  { title: "Innovative Solutions and Quality Work", text: "We partnered with zbepowereng for our ICT infrastructure, and they delivered reliable, state-of-the-art solutions that exceeded our expectations." },
  { title: "Highly Recommend for Custom Electronic Needs", text: "Their expertise in designing and manufacturing electronic PCB boards was invaluable to our project. We appreciated the bespoke service and high-quality results." },
] as const;

export const SITE = {
  name: "ZBE Power Engineering",
  url: "https://zbepowereng.com",
  tagline: "Electrical installation systems and ICT infrastructure",
  description:
    "ZBE Power Engineering specializes in electrical installation systems, ICT infrastructure, custom PCB design and prototyping in Addis Ababa, Ethiopia.",
  email: "sales@zbepowereng.com",
  phones: [
    { label: "+251 911 488 066", href: "tel:+251911488066" },
    { label: "+251 988 488 066", href: "tel:+251988488066" },
  ],
  address: { street: "Bole Sub City", city: "Addis Ababa", country: "Ethiopia", countryCode: "ET" },
} as const;
