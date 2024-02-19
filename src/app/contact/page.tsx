"use client"
import {useReducer} from "react"
import Navbar from "@/components/navbar/Navbar"
import Image from "next/image"
import styles from "./contact.module.css"
import Link from "next/link"

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
    return (
        <>
    <Navbar />
    <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1 className="heroTitle">Contact</h1>
            <div className={styles.skillsCon}>
                <div className="flex flex-col">
                <h2 onClick={() => dispatch({type: "toggleShowEmail"})}> 
                Email
                </h2>
                {state.showEmail ? (
                <ul className={styles.skillsList}>
                    <li>mrdarrellroberts@gmail.com</li>
                </ul>) : (                
                <ul className={styles.skillsListOut}>
                    <li>mrdarrellroberts@gmail.com</li>
                </ul>)}
                </div>

                <div className="flex flex-col">
                <h2 onClick={() => dispatch({type: "toggleShowLinkedIn"})}> 
                LinkedIn 
                </h2>
                {state.showLinkedIn ? (
                <ul className={styles.skillsList}>
                    <Link target="_blank" href="https://www.linkedin.com/in/droberts-developer/"><li>https://www.linkedin.com/in/droberts-developer/</li></Link>
                </ul> ) : (                
                <ul className={styles.skillsListOut}>
                    <li>https://www.linkedin.com/in/droberts-developer/</li>
                </ul>)}
                </div>

                <div className="flex flex-col">
                <h2 onClick={() => dispatch({type: "toggleShowGithub"})}> 
                Github 
                </h2>
                {state.showGithub ? (
                <ul className={styles.skillsList}>
                    <Link target="_blank" href="https://github.com/DarrellRoberts"><li>https://github.com/DarrellRoberts</li></Link>

                </ul> ) : (                
                <ul className={styles.skillsListOut}>
                    <li>https://github.com/DarrellRoberts</li>
                </ul>)}
                </div>
            </div>
          </div>
        </div>
      </section>
      <Image className={styles.mail} src="/mail.svg" alt="cog" width="250" height="250" />
        </>
    )
}