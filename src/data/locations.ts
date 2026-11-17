import locationsJson from './locations.json';
import { LocationDetail } from '@/types';

export const LOCATIONS_MAP = locationsJson as Record<string, LocationDetail>;
export const LOCATIONS_LIST: LocationDetail[] = Object.values(LOCATIONS_MAP);

export function getLocationBySlug(slug: string): LocationDetail | undefined {
  return LOCATIONS_MAP[slug];
}

