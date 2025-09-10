import React from "react"
import EmLightImage1 from "../../../public/portfolio-screenshots/eMission/em_circle_dashboard_light_hover.webp"
import EmLightImage2 from "../../../public/portfolio-screenshots/eMission/em_mobile_dashboard_light.webp"
import EmLightImage3 from "../../../public/portfolio-screenshots/eMission/em_video_player_light.webp"
import EmLightImage4 from "../../../public/portfolio-screenshots/eMission/em_carousel_dashboard_light.webp"
import BcbLightImage1 from "../../../public/portfolio-screenshots/bcb/bcb_homepage_light.webp"
import BcbLightImage2 from "../../../public/portfolio-screenshots/bcb/bcb_aboutpage_light.webp"
import BcbLightImage3 from "../../../public/portfolio-screenshots/bcb/bcb_3dbookpage_light.webp"
import BcbLightImage4 from "../../../public/portfolio-screenshots/bcb/bcb_profilepage_light.webp"
import ProjectMosiac from "./ProjectMosiac"
import { useI18n } from "../../../locales/client"

const ProjectMosiacHome = () => {
  const t = useI18n()
  const projectArray = [
    {
      title: "e-Mission GmbH",
      tech: "Vue, Nuxt, TypeScript",
      lightImages: [
        EmLightImage1.src,
        EmLightImage2.src,
        EmLightImage3.src,
        EmLightImage4.src,
      ],
    },
    {
      title: "Book Club Brothers",
      tech: "React, Next, TypeScript",
      lightImages: [
        BcbLightImage1.src,
        BcbLightImage2.src,
        BcbLightImage3.src,
        BcbLightImage4.src,
      ],
    },
  ]
  return (
    <div className="flex flex-col gap-10">
      <h2 className="min-sm:text-6xl underline">{t("project.projects")}</h2>
      {projectArray.map((project) => (
        <ProjectMosiac project={project} key={project.title} />
      ))}
    </div>
  )
}

export default ProjectMosiacHome
