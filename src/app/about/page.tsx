"use client";
import { useReducer } from "react";
import Loader from "@/components/loader/Loader";
import styles from "./about.module.css";

type StateType = {
  showSummary: boolean;
  showEducation: boolean;
  showExperience: boolean;
  showTools: boolean;
};

const reducer = (state: StateType, action) => {
  switch (action.type) {
    case "toggleShowSummary":
      return { showSummary: !state.showSummary };
    case "toggleShowEducation":
      return { showEducation: !state.showEducation };
    case "toggleShowExperience":
      return { showExperience: !state.showExperience };
    case "toggleShowTools":
      return { showTools: !state.showTools };
    default:
      return state;
  }
};

export default function About() {
  const [state, dispatch] = useReducer(reducer, {
    showSummary: false,
    showEducation: false,
    showExperience: false,
    showTools: false,
  });

  return (
    <div
      className={
        state.showSummary ||
        state.showEducation ||
        state.showExperience ||
        state.showTools
          ? ""
          : "h-screen"
      }
    >
      <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1 className="heroTitle">About Me</h1>
            <div className={styles.skillsCon}>
              <div className="flex flex-col">
                <h2 onClick={() => dispatch({ type: "toggleShowSummary" })}>
                  Summary
                </h2>
                <ul
                  className={
                    state.showSummary ? styles.skillsList : styles.skillsListOut
                  }
                >
                  <li>
                    Career changer with four years' background in digital
                    marketing
                  </li>
                  <li>
                    Had a passion for coding since{" "}
                    <a
                      className="underline"
                      href="https://github.com/DarrellRoberts/microbit-competition"
                      target="_blank"
                    >
                      winning a Microbit competition in 2018
                    </a>
                  </li>
                  <li>Now a Freelance Fullstack Developer</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h2 onClick={() => dispatch({ type: "toggleShowEducation" })}>
                  Education
                </h2>
                <ul
                  className={
                    state.showEducation
                      ? styles.skillsList
                      : styles.skillsListOut
                  }
                >
                  <li>
                    Master of Research in History from University of Edinburgh.
                    This equipped me with vital research skills in order to
                    learn and teach myself anything.
                  </li>
                  <li>
                    Graduated as a Fullstack Developer from WBS Coding School in
                    November 2023. The bootcamp gave me a solid foundation for
                    web development{" "}
                  </li>
                  <li>
                    Completed Udemy's Data Structures and Algorithms course in
                    Januaray 2024. I learn from this course big O Notation,
                    fundamental data structures such as Linked Lists, Binary
                    Search Trees and Hash Tables, as well as common sorting,
                    searching and recursive algorithms
                  </li>
                  <li>
                    I focus on learning something new every week. My philosophy
                    is: if the motivation is there, you can learn anything
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h2 onClick={() => dispatch({ type: "toggleShowExperience" })}>
                  Experience
                </h2>
                <ul
                  className={
                    state.showExperience
                      ? styles.skillsList
                      : styles.skillsListOut
                  }
                >
                  <li>
                    I currently volunteer at the{" "}
                    <a
                      className="underline"
                      href="https://openlibrary.org/"
                      target="_blank"
                    >
                      Internet Archive's Open Library
                    </a>
                    . It is a open source digital library with over 5 million
                    books. I help implement frontend features, such as Dark
                    Mode, participate in weekly calls and respond to GitHub
                    issues (Web.py, Docker, Less CSS, JavaScript)
                  </li>
                  <li>I am also currently working on three main projects:</li>
                  <ul className={styles.experienceList}>
                    <li id={styles.experienceItem}>The Book Club Brothers</li>
                    <li id={styles.experienceItem}>The Book Club League</li>
                    <li id={styles.experienceItem}> Shark Explorer</li>
                  </ul>
                  <li>
                    To view these projects and more, see my portfolio{" "}
                    <a className="underline" href="/portfolio" target="_blank">
                      here{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Loader />
        </div>
      </section>
    </div>
  );
}
