"use client"
import { Button, Card, CardHeader, CardBody, Image } from "@heroui/react"
import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
} from "../../../locales/client"

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
      <Card className="py-4 w-80">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
      <Card className="py-4 w-80">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
      <Card className="py-4 w-80">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    </main>
  )
}

export default Home
