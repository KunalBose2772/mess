import areasJson from './areas.json';
import { AreaItem } from '@/types';

export const AREAS_MAP = areasJson as Record<string, AreaItem>;
export const AREAS_LIST: AreaItem[] = Object.values(AREAS_MAP);

export function getAreaBySlug(slug: string): AreaItem | undefined {
  return AREAS_MAP[slug];
}

