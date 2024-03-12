"use client";
import dataArray from "./DataArray"
import textData from "./TextData"
import Image from "next/image";
import styles from "./carousel.module.css"
import {useReducer, useState, useContext} from "react"
import { ThemeContext } from "@/app/context/ThemeContext";

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

const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

const themeStyles = isLightTheme ? light : dark;

const mapArray = dataArray.map(item => ({ ...item, ...textData }));
const textChildren = mapArray.map((item, i) => (
<div className={styles.portfolioCon}>
    <li
    style={{color: themeStyles.mainText, borderBottomColor: themeStyles.secondaryText}}
    className="cursor-pointer"
    onClick={() => {dispatch({type: "toggleShowProject"}); setValue(i)}}>
        {item[i].title}
    </li>
    {value === i ? (
    <div 
    style={{boxShadow: "0px 0px 20px 5px" + themeStyles.secondaryText}} 
    className={state.showProject ? styles.queueCon : styles.queueConOut}>
        <div className={styles.imageCon}>
        <Image alt="project" src={item.pic} width={1000} height={500} />
        </div>
        <div className={styles.textCon}>
            <p style={{color: themeStyles.mainText}}>{item[i].content}</p>
            <span>
                <a
                style={{color: themeStyles.secondaryText}}
                target="_blank" 
                rel="nofollow" 
                href={item[i].link}>
                    {item[i].link ? `URL: ${item[i].link}` : null}
                </a>
            </span>
            <br/>
            <a
            style={{color: themeStyles.secondaryText}}
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
    ) : null}
</div>));

return (
<>
<h1 style={{color: themeStyles.secondaryText}} className={styles.heroHomepageTitle}>Portfolio</h1>
<ol className={styles.portfolioList}>
{textChildren}
</ol>
</>
)
}