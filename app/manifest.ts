import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Eden Garden Heritage Farmstay',
        short_name: 'Eden Garden',
        description: '300-year-old heritage farmstay in Fort Kochi, Kerala',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#059669',
        icons: [
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
