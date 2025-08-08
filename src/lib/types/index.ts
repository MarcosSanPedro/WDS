import type { SvelteComponent } from 'svelte';

export type SvelteComponentType = new (...args: any) => SvelteComponent;


import type { Icon } from "lucide-svelte";

export interface Project {
	id: string;
	title: string;
	description: string;
	images: string[];
	category: string;
	slug: string;
	featured?: boolean;
}

export interface Service {
	id: string;
	title: string;
	description: string;
	features: string[];
	image: string;
	slug: string;
	icon?: string;
}

export interface Testimonial {
	id: string;
	name: string;
	role: string;
	company?: string;
	content: string;
	rating: number;
	image?: string;
}

export interface ContactForm {
	name: string;
	email: string;
	phone?: string;
	service?: string;
	message: string;
}

export interface NavigationItem {
	label: string;
	href: string;
	external?: boolean;
}

export interface SEOMeta {
	title: string;
	description: string;
	keywords?: string;
	image?: string;
	url?: string;
}

export interface ProcessStep {
	id: string;
	title: string;
	description: string;
	icon: string;
	order: number;
}

export interface Stat {
	id: string;
	value: string;
	label: string;
	suffix?: string;
}


export type StyleKey = 'modern' | 'traditional' | 'contemporary';



export interface Services {
  slug: string; // e.g., "kitchen-renovations"
  title: string; // e.g., "Kitchen Renovations"
  goldTittle: string;
  subTittle: string;
  meta: {
    description: string;
    heroImage: string;
    priceTag: string; // e.g., "From $25k"
    timeline: string; // e.g., "4–8 weeks"
  };
  overview: {
    heading: string;
    paragraph: string;
  };
  trends: {
    title: string;
    description: string;
    icon: SvelteComponentType;
  }[];
  featuresTittle: string;
  featuresSubtittle: string;
  features: {
    title: string;
    description: string;
	icon: SvelteComponentType;
  }[];
  process: { title: string; desc: string }[];
  styles: Record<StyleKey, string[]>; // galleries
  faqs: { question: string; answer: string }[];
  cta: {
    heading: string;
    subheading: string;
    button: string;
  };
}
