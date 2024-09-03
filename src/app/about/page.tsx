"use client";
import { useReducer } from "react";
import Loader from "@/components/loader/Loader";
import { useContext } from "react";
import { ThemeContext } from "@/components/context/ThemeContext";
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

  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  return (
    <div
      style={{ backgroundColor: themeStyles.bg }}
      className={
        state.showSummary ||
        state.showEducation ||
        state.showExperience ||
        state.showTools
          ? ""
          : "h-screen"
      }
    >
      <section
        style={{ backgroundColor: themeStyles.bg }}
        className={styles.homepageCon}
      >
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1
              style={{ color: themeStyles.secondaryText }}
              className="heroTitle"
            >
              About Me
            </h1>
            <div
              style={{ backgroundColor: themeStyles.bg }}
              className={styles.skillsCon}
            >
              <div className="flex flex-col">
                <h2
                  style={{
                    color: themeStyles.mainText,
                    borderBottomColor: themeStyles.secondaryText,
                  }}
                  onClick={() => dispatch({ type: "toggleShowSummary" })}
                >
                  Summary
                </h2>
                <ul
                  className={
                    state.showSummary ? styles.skillsList : styles.skillsListOut
                  }
                >
                  <li style={{ color: themeStyles.mainText }}>
                    Career changer with four years' background in digital
                    marketing
                  </li>
                  <li style={{ color: themeStyles.mainText }}>
                    Had a passion for coding since{" "}
                    <a
                      style={{ color: themeStyles.secondaryText }}
                      className="underline"
                      href="https://github.com/DarrellRoberts/microbit-competition"
                      target="_blank"
                    >
                      winning a Microbit competition in 2018
                    </a>
                  </li>
                  <li style={{ color: themeStyles.mainText }}>
                    Now a Freelance Fullstack Developer
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h2
                  style={{
                    color: themeStyles.mainText,
                    borderBottomColor: themeStyles.secondaryText,
                  }}
                  onClick={() => dispatch({ type: "toggleShowEducation" })}
                >
                  Education
                </h2>
                <ul
                  className={
                    state.showEducation
                      ? styles.skillsList
                      : styles.skillsListOut
                  }
                >
                  <li style={{ color: themeStyles.mainText }}>
                    Master of Research in History from University of Edinburgh.
                    This equipped me with vital research skills in order to learn and teach myself anything.
                  </li>
                  <li style={{ color: themeStyles.mainText }}>
                    Graduated as a Fullstack Developer from WBS Coding School in
                    November 2023. The bootcamp gave me a solid foundation for
                    web development{" "}
                  </li>
                  <li style={{ color: themeStyles.mainText }}>
                    Completed Udemy's Data Structures and Algorithms course in
                    Januaray 2024. I learn from this course big O Notation,
                    fundamental data structures such as Linked Lists, Binary
                    Search Trees and Hash Tables, as well as common sorting,
                    searching and recursive algorithms
                  </li>
                  <li style={{ color: themeStyles.mainText }}>
                    I focus on learning something new every week. My philosophy
                    is: if the motivation is there, you can learn anything
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h2
                  style={{
                    color: themeStyles.mainText,
                    borderBottomColor: themeStyles.secondaryText,
                  }}
                  onClick={() => dispatch({ type: "toggleShowExperience" })}
                >
                  Experience
                </h2>
                <ul
                  className={
                    state.showExperience
                      ? styles.skillsList
                      : styles.skillsListOut
                  }
                >
                  <li style={{ color: themeStyles.mainText }}>
                    I currently volunteer at the {" "}
                      <a
                        style={{ color: themeStyles.secondaryText }}
                        className="underline"
                        href="https://openlibrary.org/"
                        target="_blank"
                      >
                        Internet Archive's Open Library
                      </a>
                       . It is a open source digital library with over 5 million books. I
                      help implement frontend features, such as Dark Mode, participate in weekly calls and respond to GitHub issues (Web.py, Docker, Less CSS, JavaScript)
                    </li>
                  <li style={{ color: themeStyles.mainText }}>
                    I am also currently working on three main projects:
                  </li>
                  <ul className={styles.experienceList}>
                    <li
                      style={{ color: themeStyles.mainText }}
                      id={styles.experienceItem}
                    >
                      The Book Club Brothers
                    </li>
                    <li
                      style={{ color: themeStyles.mainText }}
                      id={styles.experienceItem}
                    >
                      The Book Club League
                    </li>
                    <li
                      style={{ color: themeStyles.mainText }}
                      id={styles.experienceItem}
                    >
                      {" "}
                      Shark Explorer
                    </li>
                  </ul>
                  <li style={{ color: themeStyles.mainText }}>
                    To view these projects and more, see my portfolio{" "}
                    <a
                      style={{ color: themeStyles.secondaryText }}
                      className="underline"
                      href="/portfolio"
                      target="_blank"
                    >
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
