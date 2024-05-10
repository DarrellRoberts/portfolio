"use client"
import {Popover} from "antd";
import {useReducer} from "react"
import Image from "next/image"
import styles from "./skills.module.css"
import {useContext} from "react"
import { ThemeContext } from "@/app/context/ThemeContext";

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

export default function Skills() {
const [state, dispatch] = useReducer(reducer, {
    showFrontend: false,
    showBackend: false,
    showDatabase: false,
    showTools: false,
})

const { light, dark, isLightTheme} = useContext(ThemeContext);

const themeStyles = isLightTheme ? light : dark;

    return (
<div style={{backgroundColor: themeStyles.bg}}>
    <section style={{backgroundColor: themeStyles.bg}} className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1 style={{color: themeStyles.secondaryText}} className="heroTitle">Skills</h1>
            <div className={styles.skillsCon}>
                <div className="flex flex-col">
                <h2 
                style={{color: themeStyles.mainText, borderColor: themeStyles.secondaryText}}
                onClick={() => dispatch({type: "toggleShowFrontend"})}> 
                Frontend
                </h2>
                <ul className={state.showFrontend ? styles.skillsList : styles.skillsListOut}>
                    <Popover 
                    title="HTML5">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="65" height="65" alt="HTML5" />
                    </div>
                    </Popover>
                    <Popover 
                    title="CSS3">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="65" height="65" alt="CSS3" />
                    </div>
                    </Popover>
                    <Popover title="Tailwind CSS">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="65" height="65" alt="TailwindCSS" />
                    </div>
                    </Popover>
                    <Popover title="JavaScript">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="65" height="65" alt="JavaScript" />
                    </div>
                    </Popover>
                    <Popover title="TypeScript">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="65" height="65" alt="TypeScript" />
                    </div>
                    </Popover>
                    <Popover title="React">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="65" height="65" alt="React" />
                    </div>
                    </Popover>
                    <Popover title="Vite">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0.65) grayscale(1)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="65" height="65" alt="Vite" />
                    </div>
                    </Popover>
                    <Popover title="Next">
                    <div className="flex flex-col items-center justify-center">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="65" height="65" alt="NextJs" />
                    </div>
                    </Popover>
                    <Popover title="Vercel">
                    <div className="flex flex-col items-center justify-center">
                    <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" width="65" height="65" alt="Vercel" />
                    </div>
                    </Popover>
                    <Popover title="Three.js">
                    <div className="flex flex-col items-center justify-center">
                    <img src="https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" width="65" height="65" alt="Three.js" />
                    </div>
                    </Popover>
                    <Popover title="React Native">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://devtop.io/wp-content/uploads/2022/10/react-native-1.png" width="120" height="120" alt="React Native" />
                    </div>
                    </Popover>
                    <Popover title="Vue">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0.65) grayscale(1)"} : null} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" width="65" height="65" alt="Vue" />
                    </div>
                    </Popover>
                    <Popover title="Nuxt">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0.65) grayscale(1)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg" width="65" height="65" alt="Nuxt" />
                    </div>
                    </Popover>
                </ul>                
                </div>

                <div className="flex flex-col">
                <h2 
                style={{color: themeStyles.mainText, borderColor: themeStyles.secondaryText}}
                onClick={() => dispatch({type: "toggleShowBackend"})}> 
                Backend 
                </h2>
                <ul className={state.showBackend ? styles.skillsList : styles.skillsListOut}>
                    <Popover title="Node.js">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="65" height="65" alt="NodeJS" />
                    </div>
                    </Popover >
                    <Popover title="Express.js">
                    <div className="flex flex-col items-center justify-center">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="65" height="65" alt="Express" />
                    </div>
                    </Popover>
                    <Popover title="Java">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0.65) grayscale(1)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="65" height="65" alt="Java" />
                    </div>
                    </Popover>
                </ul>                
                </div>

                <div className="flex flex-col">
                <h2 
                style={{color: themeStyles.mainText, borderColor: themeStyles.secondaryText}}
                onClick={() => dispatch({type: "toggleShowDatabase"})}> 
                Database 
                </h2>
                <ul className={state.showDatabase ? styles.skillsList : styles.skillsListOut}>
                    <Popover title="MongoDB">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0.65) grayscale(1)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="65" height="65" alt="MongoDB" />
                    </div>
                    </Popover>
                    <Popover title="MySQL">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0.65) grayscale(1)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="65" height="65" alt="MySQL" />
                    </div>
                    </Popover>
                    <Popover title="PostgreSQL">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0.65) grayscale(1)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="65" height="65" alt="PostgreSQL" />
                    </div>
                    </Popover>
                    <Popover title="Render">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/render-colored.svg" width="65" height="65" alt="Render" />
                    </div>
                    </Popover>
                </ul>               
                </div>

                <div className="flex flex-col">
                <h2 
                style={{color: themeStyles.mainText, borderColor: themeStyles.secondaryText}}
                onClick={() => dispatch({type: "toggleShowTools"})}> 
                Tools 
                </h2>
                <ul className={state.showTools ? styles.skillsList : styles.skillsListOut}>
                    <Popover title="Git">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="65" height="65" alt="Git" />
                    </div>
                    </Popover>
                    <Popover title="Docker">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" width="65" height="65" alt="Docker" />
                    </div>
                    </Popover>
                    <Popover title="Photoshop">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0)"} : null} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg" width="65" height="65" alt="Photoshop" />
                    </div>
                    </Popover>
                    <Popover title="Figma">
                    <div className="flex flex-col items-center justify-center">
                    <img style={!isLightTheme ? {filter: "brightness(0.65) grayscale(1)"} : null} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/512px-Figma-logo.svg.png" width="45" height="45" alt="Figma" />
                    </div>
                    </Popover>
                    <Popover title="Expo Go">
                    <div className="flex flex-col items-center justify-center">
                    <img src="https://seeklogo.com/images/E/expo-go-app-logo-BBBE394CB8-seeklogo.com.png" width="65" height="65" alt="Expo Go" />
                    </div>
                    </Popover>
                </ul>              
                </div>
            </div>
          </div>
          <Image className={styles.cog} src={isLightTheme ? "/assets/cog.svg" : "/assets/cogD.svg"} alt="cog" width="250" height="250" />
        </div>
      </section>
        </div>
    )
}