"use client"
import { Button } from "@heroui/react"
import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
} from "../../../locales/client"
import ProjectMosiacHome from "@/components/projects/ProjectMosiacHome"

const Home = () => {
  const t = useI18n()
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()
  return (
    <main>
      <Button color="primary" className="font-bold">
        {t("welcome")}
      </Button>
      <p>Current locale: {locale}</p>
      <Button onPress={() => changeLocale("en")}>English</Button>
      <Button onPress={() => changeLocale("de")}>Deutsch</Button>
      <ProjectMosiacHome />
    </main>
  )
}

export default Home
