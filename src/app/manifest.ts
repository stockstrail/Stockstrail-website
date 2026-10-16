import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Stockstrail - Financial Planning & Investment Guidance',
    short_name: 'Stockstrail',
    description:
      'Achieve financial independence with expert financial planning, mutual funds SIP, insurance, and investment guidance from Stockstrail.',
    start_url: '/',
    display: 'standalone',
    background_color: '#012928',
    theme_color: '#00ff97',
    icons: [
      {
        src: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
