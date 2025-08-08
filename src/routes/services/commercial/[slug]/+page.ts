// src/routes/services/[slug]/+page.ts
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { services } from '../../cms'; // 👈 path matters!
import type {Services} from '$lib/types/index'

export const load: PageLoad = ({ params }) => {
  console.log('[+page.ts] slug =', params.slug);
  const service = services[params.slug as keyof typeof services] as unknown as Services;

  if (!service) {
    console.warn('[+page.ts] Service not found for slug:', params.slug);
    throw error(404, `Service not found for slug "${params.slug}"`);
  }

  return { service, slug: params.slug };
};

