import { DarkContext } from "@/context/DarkContext"
import { Card, CardBody, Link } from "@heroui/react"
import React, { useContext } from "react"

const ContactLinks = () => {
  const { isDark } = useContext(DarkContext)
  return (
    <div className="flex w-full justify-evenly items-center max-sm:flex-col max-sm:h-1/2">
      <Link
        className="flex flex-col items-center gap-2 justify-center"
        href="mailto:mrdarrellroberts@gmail.com"
        target="_blank"
      >
        <div
          style={{
            backgroundImage: `url('/contact-logos/gmail.webp')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "50px",
            height: "50px",
          }}
        />
        <span>mrdarrellroberts@gmail.com</span>
      </Link>
      <Link
        className="flex flex-col items-center gap-2 justify-center"
        href="https://github.com/DarrellRoberts"
        target="_blank"
      >
        <div
          style={{
            backgroundImage: `url('/contact-logos/github.webp')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "50px",
            height: "50px",
          }}
          className={`${isDark && "invert-100"} col-span-1`}
        />
        <span>DarrellRoberts</span>
      </Link>
      <Link
        className="flex flex-col items-center gap-2 justify-center"
        href="https://www.linkedin.com/in/d-j-roberts/"
        target="_blank"
      >
        <div
          style={{
            backgroundImage: `url('/contact-logos/linkedin.svg')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "50px",
            height: "50px",
          }}
          className="col-span-1"
        />
        <span>d-j-roberts</span>
      </Link>
    </div>
  )
}

export default ContactLinks
