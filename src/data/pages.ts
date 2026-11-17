import pagesJson from './pages.json';
import { ContentPageEntry } from '@/types';

export const CONTENT_PAGES_MAP = pagesJson as Record<string, ContentPageEntry>;

export function getContentPageBySlug(slug: string): ContentPageEntry | undefined {
  return CONTENT_PAGES_MAP[slug];
}

