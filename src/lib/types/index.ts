// Core data types for the WDS application

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
