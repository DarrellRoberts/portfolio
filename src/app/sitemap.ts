import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/skills",
    "/portfolio",
    "/contact",
    "/blog",
    "/blog/should-web-developers-learn-wordpress",
    "/blog/3d-websites-threejs-and-blender",
    "/blog/learn-a-new-skill-or-strengthen-my-current-one",
    "/blog/gov-uk-how-to-build-a-government-website",
    "/blog/six-best-youtubers-for-self-taught-or-junior-developers",
    "/when-not-to-use-ai",
    "/difference-between-web-and-mobile-app-development",
    "/the-ethics-of-scraper-bots",
    "/choosing-your-integrated-development-environment",
    "/google-web-vitals-measuring-your-frontend-performance",
    "/how-culture-shapes-website-design",
    "/the-importance-of-testing",
    "finding-a-job-in-tech-a-modern-day-dante-inferno",
    "/should-i-create-a-website-mobile-app-or-software",
    "/what-are-the-signs-of-an-interesting-project",
    "/how-to-handle-rejections",
    "/web-security-basics"
  ].map((route) => ({
    url: `https://darrellroberts.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  return [...routes];
}
