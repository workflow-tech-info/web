import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://edengardenkochi.com';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/booking`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
    ]
}
