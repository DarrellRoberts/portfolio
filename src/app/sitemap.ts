import { MetadataRoute } from "next"
import { projectSlugs } from "@/data/projects"

const SITE_URL = "https://darrellroberts.com"
const locales = ["en", "de"]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const allRoutes: MetadataRoute.Sitemap = []

  const staticPaths = [""]

  staticPaths.forEach((path) => {
    const pathBase = path === "" ? "" : path

    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${SITE_URL}/${locale}${pathBase}`])
    )

    // Generate an entry for each locale
    locales.forEach((locale) => {
      allRoutes.push({
        url: `${SITE_URL}/${locale}${pathBase}`,
        lastModified: lastModified,
        alternates: {
          languages: languages,
        },
      })
    })
  })

  projectSlugs.forEach((slug) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [
        locale,
        `${SITE_URL}/${locale}/projects/${slug}`,
      ])
    )

    locales.forEach((locale) => {
      allRoutes.push({
        url: `${SITE_URL}/${locale}/projects/${slug}`,
        lastModified: lastModified,
        alternates: {
          languages: languages,
        },
      })
    })
  })

  return allRoutes
}
