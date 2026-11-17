import servicesJson from './services.json';
import { ServiceItem } from '@/types';

export const SERVICES_MAP = servicesJson as Record<string, ServiceItem>;
export const SERVICES_LIST: ServiceItem[] = Object.values(SERVICES_MAP);

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_MAP[slug];
}

