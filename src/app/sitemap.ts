import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/skills', '/portfolio', '/contact', '/blog', '/blog/1'].map(
    (route) => ({ 
      url: `https://darrellroberts.com${route}`, 
      lastModified: new Date().toISOString().split('T')[0]
    })
  );
  return [...routes];
}