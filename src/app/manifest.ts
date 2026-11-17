import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Student's Mess Ranchi",
    short_name: "Student's Mess",
    description:
      "Home style veg & non-veg tiffin service, daily rotating mess menu, and bulk catering in Ranchi since 1999.",
    start_url: '/',
    display: 'standalone',
    background_color: '#07150a',
    theme_color: '#07150a',
    icons: [
      {
        src: '/images/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

