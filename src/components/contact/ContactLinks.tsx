import { DarkContext } from "@/context/DarkContext"
import { Link } from "@heroui/react"
import React, { useContext } from "react"

const ContactLinks = () => {
  const { isDark } = useContext(DarkContext)

  const socialJson = [
    {
      text: "mrdarrellroberts@gmail.com",
      imageUrl: "gmail.webp",
      href: "mailto:mrdarrellroberts@gmail.com",
    },
    {
      text: "DarrellRoberts",
      imageUrl: "github.webp",
      href: "https://github.com/DarrellRoberts",
    },
    {
      text: "d-j-roberts",
      imageUrl: "linkedin.svg",
      href: "https://www.linkedin.com/in/d-j-roberts/",
    },
  ]
  return (
    <div className="w-full grid grid-cols-3 max-sm:flex max-sm:flex-col max-sm:justify-evenly max-sm:h-1/2 max-sm:gap-6">
      {socialJson.map((social) => (
        <Link
          key={social.text}
          className="flex flex-col items-center gap-2 justify-center"
          href={social.href}
          target="_blank"
        >
          <div
            className={`${
              social.text === "DarrellRoberts" && isDark && "invert-100"
            } col-span-1`}
            style={{
              backgroundImage: `url(/contact-logos/${social.imageUrl})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "50px",
              height: "50px",
            }}
          />
          <span>{social.text}</span>
        </Link>
      ))}
    </div>
  )
}

export default ContactLinks
