"use client"
import { Button } from "@heroui/react"
import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
} from "../../../locales/client"
import ProjectMosiacHome from "@/components/projects/ProjectMosiacHome"
import Hero from "@/components/hero/Hero"
import Skills from "@/components/skills/Skills"
import Experience from "@/components/experience/Experience"

const Home = () => {
  const t = useI18n()
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <ProjectMosiacHome />
    </main>
  )
}

export default Home
