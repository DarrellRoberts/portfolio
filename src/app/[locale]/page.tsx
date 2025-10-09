import ProjectMosiacHome from "@/components/projects/ProjectMosiacHome"
import Hero from "@/components/hero/Hero"
import SkillsHome from "@/components/skills/SkillsHome"
import ExperienceHome from "@/components/experience/ExperienceHome"
import AboutHome from "@/components/about/AboutHome"
import OpenSourceHome from "@/components/open-source/OpenSourceHome"

const Home = () => {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <AboutHome />
      <SkillsHome />
      <ExperienceHome />
      <ProjectMosiacHome />
      <OpenSourceHome />
    </main>
  )
}

export default Home
