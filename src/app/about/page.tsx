"use client"
import {useReducer} from "react"
import Navbar from "@/components/navbar/Navbar"
import Image from "next/image"
import Loader from "@/components/loader/Loader"
import styles from "./about.module.css"

type StateType = {
    showSummary: boolean;
    showEducation: boolean;
    showExperience: boolean;
    showTools: boolean;
  }

const reducer = (state: StateType, action) => {
    switch (action.type) {
        case "toggleShowSummary":
            return {showSummary: !state.showSummary}
        case "toggleShowEducation":
            return {showEducation: !state.showEducation}
        case "toggleShowExperience":
            return {showExperience: !state.showExperience}
        case "toggleShowTools":
            return {showTools: !state.showTools}
        default:
            return state
    }
}

export default function About() {
const [state, dispatch] = useReducer(reducer, {
    showSummary: false,
    showEducation: false,
    showExperience: false,
    showTools: false,
})
    return (
        <>
    <Navbar />
    <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1 className="heroTitle">About Me</h1>
            <div className={styles.skillsCon}>
                <div className="flex flex-col">
                <h2 onClick={() => dispatch({type: "toggleShowSummary"})}> 
                Summary
                </h2>
                {state.showSummary ? (
                <div className={styles.skillsList}>
                  <p>I'm a career changer who originally worked for four years in the digital marketing industry. However, I always had a passion for coding, ever since I won a 
                  <a  className="underline"href="https://github.com/DarrellRoberts/microbit-competition" target="_blank"> Microbit coding competition in 2018 </a>. 
                  My biggest regret was not changing careers then and there. </p>
                  <p>Nevertheless, I finally made the change in July 2023 when I enrolled in a Fullstack Developer Bootcamp. Now I can't imagine a future without coding as it brings me such joy!</p>
                </div>) : (                
                <div className={styles.skillsListOut}>
                  <p>I'm a career changer who originally worked for four years in the digital marketing industry. However, I always had a passion for coding, ever since I won a 
                  <a  className="underline"href="https://github.com/DarrellRoberts/microbit-competition" target="_blank"> Microbit coding competition in 2018 </a>. 
                  My biggest regret was not changing careers then and there. </p>
                  <p>Nevertheless, I finally made the change in July 2023 when I enrolled in a Fullstack Developer Bootcamp. Now I can't imagine a future without coding as it brings me such joy!</p>
                </div>)}
                </div>

                <div className="flex flex-col">
                <h2 onClick={() => dispatch({type: "toggleShowEducation"})}> 
                Education 
                </h2>
                {state.showEducation ? (
                <div className={styles.skillsList}>
                  <p>I have a Master of Research in History from the University of Edinburgh. This equipped me with in-depth research skills that I am able to transfer to coding. From my perspective, everything is researchable and no subject is too eclectic.</p>
                  <p>In November 2023 I finished a Fullstack Developer Bootcamp at WBS Coding school. Here I learnt a range of Frontend, Backend and Database technology, including (but not exclusive to): HTML5, CSS3, JavaScript, React.js, SQL, Node.js, Express.js and MongoDB</p>
                  <p>Since the Bootcamp, I have been challenging myself every week to learn something new. For example, I taught myself TypeScript, Tailwind CSS, Docker and basic Java.</p>
                  <p>I firmly believe that if the motivation is there, you can learn anything</p>
                </div> ) : (                
                <div className={styles.skillsListOut}>
                  <p>I have a Master of Research in History from the University of Edinburgh. This equipped me with in-depth research skills that I am able to transfer to coding. From my perspective, everything is researchable and no subject is too eclectic.</p>
                  <p>In November 2023 I finished a Fullstack Developer Bootcamp at WBS Coding school. Here I learnt a range of Frontend, Backend and Database technology, including (but not exclusive to): HTML5, CSS3, JavaScript, React.js, SQL, Node.js, Express.js and MongoDB</p>
                  <p>Since the Bootcamp, I have been challenging myself every week to learn something new. For example, I taught myself TypeScript, Tailwind CSS, Docker and basic Java.</p>
                  <p>I firmly believe that if the motivation is there, you can learn anything</p>
                </div>)}
                </div>

                <div className="flex flex-col">
                <h2 onClick={() => dispatch({type: "toggleShowExperience"})}> 
                Experience 
                </h2>
                {state.showExperience ? (
                <div className={styles.skillsList}>
                <p>With my four years' experience in digital marketing, I learnt to perfect project management and meet either the company's or clients' deadlines. I ran multi-million euro (annual) budgets for clients such as Easyjet, to overseeing far smaller expenditures from various Berlin startups. </p>
                <p>The Fullstack Developer Bootcamp I completed in 2023 allowed me to accelerate my coding experience, with either solo or group projects. I routinely worked in a team, mostly for weekly projects but also for one-day Hackathons 
                <a href="https://github.com/DarrellRoberts/flag-app" className="underline" target="_blank"> (one of which I won with my team). </a>
                </p>
                <p> Currently, I am working on not only my own projects but also contributing towards open source repositories.</p>
                <p> If you are interested in some of my work, check out <a href="./portfolio">my porfolio </a></p>
                </div> ) : (                
                <div className={styles.skillsListOut}>
                  <p>With my four years' experience in digital marketing, I learnt to perfect project management and meet either the company's or clients' deadlines. I ran multi-million euro (annual) budgets for clients such as Easyjet, to overseeing far smaller expenditures from various Berlin startups. </p>
                  <p>The Fullstack Developer Bootcamp I completed in 2023 allowed me to accelerate my coding experience, with either solo or group projects. I routinely worked in a team, mostly for weekly projects but also for one-day Hackathons 
                  <a href="https://github.com/DarrellRoberts/flag-app" className="underline" target="_blank"> (one of which I won with my team). </a>
                  </p>
                  <p> Currently, I am working on not only my own projects but also contributing towards open source repositories.</p>
                  <p> If you are interested in some of my work, check out <a className="underline" href="./portfolio">my porfolio </a></p>
                </div>)}
                </div>
            </div>
          </div>
        </div>
      </section>
      <Loader />
        </>
    )
}