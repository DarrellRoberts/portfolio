import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/skills', '/portfolio', '/contact', '/blog', '/blog/should-web-developers-learn-wordpress', '/blog/3d-websites-threejs-and-blender', '/blog/learn-a-new-skill-or-strengthen-my-current-one'].map(
    (route) => ({ 
      url: `https://darrellroberts.com${route}`, 
      lastModified: new Date().toISOString().split('T')[0]
    })
  );
  return [...routes];
}