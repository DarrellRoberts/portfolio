"use client";
import dataArray from "./DataArray"
import textData from "./TextData"
import Image from "next/image";
import styles from "./carousel.module.css"
import {useReducer, useState} from "react"

type StateType = {
    showProject: boolean;
}

const reducer = (state: StateType, action) => {
    switch (action.type) {
        case "toggleShowProject":
            return {showProject: !state.showProject}
        default:
            return state
    }
}

export default function Carousel() {
    const [state, dispatch] = useReducer(reducer, {
        showProject: false,
    })
    const [value, setValue] = useState(0);

const mapArray = dataArray.map(item => ({ ...item, ...textData }));
const textChildren = mapArray.map((item, i) => (
<div className={styles.portfolioCon}>
    <li
    className="cursor-pointer"
    onClick={() => {dispatch({type: "toggleShowProject"}); setValue(i)}}>
        {item[i].title}
    </li>
    {state.showProject && value === i ? (
    <div className={styles.queueCon}>
        <div className={styles.imageCon}>
        <Image alt="project" src={item.pic} width={1000} height={500} />
        </div>
        <div className={styles.textCon}>
            <p>{item[i].content}</p>
            <span>
                <a
                target="_blank" 
                rel="nofollow" 
                href={item[i].link}>
                    {item[i].link ? `URL: ${item[i].link}` : null}
                </a>
            </span>
            <br/>
            <a
            target="_blank" 
            rel="nofollow" 
            href={item[i].Githublink}>{item[i].Githublink ? `GitHub Repository`: null}
            </a>
            <div className={styles.stackCon}
            style={{backgroundColor: "white", borderRadius: "30px"}} >
            {item[i].stack}
            </div>
        </div>
    </div>
    ) : (
        <div className={styles.queueConOut}>
        <div className={styles.imageCon}>
        <Image alt="project" src={item.pic} width={1000} height={500} />
        </div>
        <div className={styles.textCon}>
            <p>{item[i].content}</p>
            <span>
                <a
                target="_blank" 
                rel="nofollow" 
                href={item[i].link}>
                    {item[i].link ? `URL: ${item[i].link}` : null}
                </a>
            </span>
            <br/>
            <a
            target="_blank" 
            rel="nofollow" 
            href={item[i].Githublink}>{item[i].Githublink ? `GitHub Repository`: null}
            </a>
            <div className={styles.stackCon}
            style={{backgroundColor: "white", borderRadius: "30px"}} >
            {item[i].stack}
            </div>
        </div>
    </div>
    )}
</div>));

return (
<>
<h1 className={styles.heroHomepageTitle}>Portfolio</h1>
<ol className={styles.portfolioList}>
{textChildren}
</ol>
</>
)
}