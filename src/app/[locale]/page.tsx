import ProjectMosiacHome from "@/components/projects/ProjectMosiacHome"
import Hero from "@/components/hero/Hero"
import SkillsHome from "@/components/skills/SkillsHome"
import ExperienceHome from "@/components/experience/ExperienceHome"

const Home = () => {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <SkillsHome />
      <ExperienceHome />
      <ProjectMosiacHome />
    </main>
  )
}

export default Home
