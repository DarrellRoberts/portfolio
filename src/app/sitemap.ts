import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/skills', '/portfolio', '/contact', '/blog', '/blog/should-web-developers-learn-wordpress', '/blog/3d-websites-threejs-and-blender', '/blog/learn-a-new-skill-or-strengthen-my-current-one', '/blog/gov-uk-how-to-build-a-government-website','/blog/six-best-youtubers-for-self-taught-or-junior-developers', '/when-not-to-use-ai', '/difference-between-web-and-mobile-app-development', '/the-ethics-of-scraper-bots', '/choosing-your-integrated-development-environment', '/google-web-vitals-measuring-your-frontend-performance'].map(
    (route) => ({ 
      url: `https://darrellroberts.com${route}`, 
      lastModified: new Date().toISOString().split('T')[0]
    })
  );
  return [...routes];
}