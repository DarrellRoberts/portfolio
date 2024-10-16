"use client";
import { useReducer } from "react";
import Image from "next/image";
import styles from "./contact.module.css";
import Link from "next/link";

type StateType = {
  showEmail: boolean;
  showLinkedIn: boolean;
  showGithub: boolean;
  showTools: boolean;
};

const reducer = (state: StateType, action) => {
  switch (action.type) {
    case "toggleShowEmail":
      return { showEmail: !state.showEmail };
    case "toggleShowLinkedIn":
      return { showLinkedIn: !state.showLinkedIn };
    case "toggleShowGithub":
      return { showGithub: !state.showGithub };
    case "toggleShowTools":
      return { showTools: !state.showTools };
    default:
      return state;
  }
};

export default function Contact() {
  const [state, dispatch] = useReducer(reducer, {
    showEmail: false,
    showLinkedIn: false,
    showGithub: false,
    showTools: false,
  });
  return (
    <div className="h-screen">
      <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1 className="heroTitle">Contact</h1>
            <div className={styles.skillsCon}>
              <div className="flex flex-col">
                <h2 onClick={() => dispatch({ type: "toggleShowEmail" })}>
                  Email
                </h2>
                <ul
                  className={
                    state.showEmail ? styles.skillsList : styles.skillsListOut
                  }
                >
                  <li>mrdarrellroberts@gmail.com</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h2 onClick={() => dispatch({ type: "toggleShowLinkedIn" })}>
                  LinkedIn
                </h2>
                <ul
                  className={
                    state.showLinkedIn
                      ? styles.skillsList
                      : styles.skillsListOut
                  }
                >
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/d-j-roberts/"
                  >
                    <li>https://www.linkedin.com/in/d-j-roberts/</li>
                  </Link>
                </ul>
              </div>

              <div className="flex flex-col">
                <h2 onClick={() => dispatch({ type: "toggleShowGithub" })}>
                  Github
                </h2>
                <ul
                  className={
                    state.showGithub ? styles.skillsList : styles.skillsListOut
                  }
                >
                  <Link
                    target="_blank"
                    href="https://github.com/DarrellRoberts"
                  >
                    <li>https://github.com/DarrellRoberts</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <Image
            className={styles.mail + " heroImage"}
            src="/assets/mail.svg"
            alt="cog"
            width="250"
            height="250"
          />
        </div>
      </section>
    </div>
  );
}
