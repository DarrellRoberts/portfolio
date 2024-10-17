"use client";

import { useReducer } from "react";
import Image from "next/image";
import styles from "./skills.module.css";
import FrontendList from "@/components/skills-components/frontend/FrontendList";
import BackendList from "@/components/skills-components/backend/BackendList";
import DatabaseList from "@/components/skills-components/database/DatabaseList";
import ToolsList from "@/components/skills-components/tools/ToolsList";

type StateType = {
  showFrontend: boolean;
  showBackend: boolean;
  showDatabase: boolean;
  showTools: boolean;
};

const reducer = (state: StateType, action) => {
  switch (action.type) {
    case "toggleShowFrontend":
      return { showFrontend: !state.showFrontend };
    case "toggleShowBackend":
      return { showBackend: !state.showBackend };
    case "toggleShowDatabase":
      return { showDatabase: !state.showDatabase };
    case "toggleShowTools":
      return { showTools: !state.showTools };
    default:
      return state;
  }
};

export default function Skills() {
  const [state, dispatch] = useReducer(reducer, {
    showFrontend: false,
    showBackend: false,
    showDatabase: false,
    showTools: false,
  });

  return (
    <div>
      <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1 className="heroTitle">Skills</h1>
            <div className={styles.skillsCon}>
              <div className="flex flex-col">
                <h2 onClick={() => dispatch({ type: "toggleShowFrontend" })}>
                  Frontend
                </h2>
                <ul
                  className={
                    state.showFrontend
                      ? styles.skillsList
                      : styles.skillsListOut
                  }
                >
                  <FrontendList />
                </ul>
              </div>

              <div className="flex flex-col">
                <h2 onClick={() => dispatch({ type: "toggleShowBackend" })}>
                  Backend
                </h2>
                <ul
                  className={
                    state.showBackend ? styles.skillsList : styles.skillsListOut
                  }
                >
                  <BackendList />
                </ul>
              </div>

              <div className="flex flex-col">
                <h2 onClick={() => dispatch({ type: "toggleShowDatabase" })}>
                  Database
                </h2>
                <ul
                  className={
                    state.showDatabase
                      ? styles.skillsList
                      : styles.skillsListOut
                  }
                >
                  <DatabaseList />
                </ul>
              </div>

              <div className="flex flex-col">
                <h2 onClick={() => dispatch({ type: "toggleShowTools" })}>
                  Tools
                </h2>
                <ul
                  className={
                    state.showTools ? styles.skillsList : styles.skillsListOut
                  }
                >
                  <ToolsList />
                </ul>
              </div>
            </div>
          </div>
          <Image
            className={styles.cog + " heroImage"}
            src="/assets/cog.svg"
            alt="cog"
            width="250"
            height="250"
          />
        </div>
      </section>
    </div>
  );
}
