"use client"
import {useReducer} from "react"
import Navbar from "@/components/navbar/Navbar"
import Image from "next/image"
import styles from "./skills.module.css"

type StateType = {
    showFrontend: boolean;
    showBackend: boolean;
    showDatabase: boolean;
    showTools: boolean;
  }

const reducer = (state: StateType, action) => {
    switch (action.type) {
        case "toggleShowFrontend":
            return {showFrontend: !state.showFrontend}
        case "toggleShowBackend":
            return {showBackend: !state.showBackend}
        case "toggleShowDatabase":
            return {showDatabase: !state.showDatabase}
        case "toggleShowTools":
            return {showTools: !state.showTools}
        default:
            return state
    }
}

export default function About() {
const [state, dispatch] = useReducer(reducer, {
    showFrontend: false,
    showBackend: false,
    showDatabase: false,
    showTools: false,
})
    return (
        <>
    <Navbar />
    <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1 className="heroTitle">Skills</h1>
            <div className={styles.skillsCon}>

                <h2 onClick={() => dispatch({type: "toggleShowFrontend"})}> 
                Frontend 
                </h2>
                {state.showFrontend ? (
                <ul className={styles.skillsList}>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>TailwindCSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Next</li>
                    <li>Vite</li>
                    <li>Vercel</li>
                    <li>Netlify</li>
                    <li>Three.js</li>
                </ul>) : (                
                <ul className={styles.skillsListOut}>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>TailwindCSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Next</li>
                    <li>Vite</li>
                    <li>Vercel</li>
                    <li>Netlify</li>
                    <li>Three.js</li>
                </ul>)}

                <h2 onClick={() => dispatch({type: "toggleShowBackend"})}> 
                Backend 
                </h2>
                {state.showBackend ? (
                <ul className={styles.skillsList}>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Render</li>
                </ul> ) : (                
                <ul className={styles.skillsListOut}>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Render</li>
                </ul>)}

                <h2 onClick={() => dispatch({type: "toggleShowDatabase"})}> 
                Database 
                </h2>
                {state.showDatabase ? (
                <ul className={styles.skillsList}>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                </ul> ) : (                
                <ul className={styles.skillsListOut}>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                </ul>)}

                <h2 onClick={() => dispatch({type: "toggleShowTools"})}> 
                Tools 
                </h2>
                {state.showTools ? (
                <ul className={styles.skillsList}>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>Gimp</li>
                    <li>Figma</li>
                </ul>) : (                
                <ul className={styles.skillsListOut}>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>Gimp</li>
                    <li>Figma</li>
                </ul>)}
            </div>
          </div>
        </div>
      </section>
      <Image className={styles.cog} src="/cog.svg" alt="cog" width="400" height="400" />
        </>
    )
}