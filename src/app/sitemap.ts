import type { MetadataRoute } from 'next';
import { AREAS_LIST } from '@/data/areas';
import { BLOG_POSTS } from '@/data/blog';
import { PLANS_SLUGS } from '@/data/plans';
import { SERVICES_LIST } from '@/data/services';
import { SITE_CONFIG } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-09');
  const base = SITE_CONFIG.baseUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/monthly-meal-plans`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/bulk-orders`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/takeaway`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/todays-menu`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/services`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/areas`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/about-us`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/reviews`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/gallery`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const planRoutes: MetadataRoute.Sitemap = PLANS_SLUGS.map((slug) => ({
    url: `${base}/monthly-meal-plans/${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_LIST.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = AREAS_LIST.map((area) => ({
    url: `${base}/mess-and-tiffin-service-in-${area.slug}-ranchi`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.isoDate),
    changeFrequency: 'monthly',
    priority: 0.65,
  }));

  return [...staticRoutes, ...planRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}

