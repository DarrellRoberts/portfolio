"use client"
import {useReducer} from "react"
import Navbar from "@/components/navbar/Navbar"
import Image from "next/image"
import styles from "./contact.module.css"
import Link from "next/link"
import {useContext} from "react"
import { ThemeContext } from "@/app/context/ThemeContext";

type StateType = {
    showEmail: boolean;
    showLinkedIn: boolean;
    showGithub: boolean;
    showTools: boolean;
  }

const reducer = (state: StateType, action) => {
    switch (action.type) {
        case "toggleShowEmail":
            return {showEmail: !state.showEmail}
        case "toggleShowLinkedIn":
            return {showLinkedIn: !state.showLinkedIn}
        case "toggleShowGithub":
            return {showGithub: !state.showGithub}
        case "toggleShowTools":
            return {showTools: !state.showTools}
        default:
            return state
    }
}

export default function Contact() {
const [state, dispatch] = useReducer(reducer, {
    showEmail: false,
    showLinkedIn: false,
    showGithub: false,
    showTools: false,
})

const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

const themeStyles = isLightTheme ? light : dark;

    return (
<div style={{backgroundColor: themeStyles.bg}} className="h-screen">
    <Navbar />
    <section style={{backgroundColor: themeStyles.bg}} className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1 style={{color: themeStyles.secondaryText}} className="heroTitle">Contact</h1>
            <div className={styles.skillsCon}>
                <div className="flex flex-col">
                <h2 
                style={{color: themeStyles.mainText, borderBottomColor: themeStyles.secondaryText}}
                onClick={() => dispatch({type: "toggleShowEmail"})}> 
                Email
                </h2>
                <ul className={state.showEmail ? styles.skillsList : styles.skillsListOut}>
                    <li style={{color: themeStyles.mainText, borderColor: themeStyles.secondaryText}}>mrdarrellroberts@gmail.com</li>
                </ul>
                </div>

                <div className="flex flex-col">
                <h2 
                style={{color: themeStyles.mainText, borderBottomColor: themeStyles.secondaryText}}
                onClick={() => dispatch({type: "toggleShowLinkedIn"})}> 
                LinkedIn 
                </h2>
                <ul className={state.showLinkedIn ? styles.skillsList : styles.skillsListOut}>
                    <Link target="_blank" href="https://www.linkedin.com/in/droberts-developer/">
                        <li style={{color: themeStyles.mainText, borderColor: themeStyles.secondaryText}}>
                            https://www.linkedin.com/in/droberts-developer/
                        </li>
                    </Link>
                </ul>
                </div>

                <div className="flex flex-col">
                <h2 
                style={{color: themeStyles.mainText, borderBottomColor: themeStyles.secondaryText}}
                onClick={() => dispatch({type: "toggleShowGithub"})}> 
                Github 
                </h2>
                <ul className={state.showGithub ? styles.skillsList : styles.skillsListOut}>
                    <Link target="_blank" href="https://github.com/DarrellRoberts">
                        <li style={{color: themeStyles.mainText, borderColor: themeStyles.secondaryText}}>
                        https://github.com/DarrellRoberts
                        </li>
                    </Link>
                </ul>
                </div>
            </div>
          </div>
          <Image className={styles.mail} src={isLightTheme ? "/assets/mail.svg" : "/assets/mailD.svg"} alt="cog" width="250" height="250" />
        </div>
      </section>
</div>
    )
}