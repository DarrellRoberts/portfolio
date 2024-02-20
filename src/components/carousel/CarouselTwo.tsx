import dataArray from "./DataArray"
import textData from "./TextData"
import Image from "next/image";
import styles from "./carousel.module.css"

export default function CarouselTwo() {
const mapArray = dataArray.map(item => ({ ...item, ...textData }));
const textChildren = mapArray.map((item, i) => (
<div className={styles.portfolioCon}>
    <li>{item[i].title}</li>
    <div className={styles.queueCon}>
        <div className={styles.imageCon}
        style={{background: `url(${item.pic})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
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
            href={item[i].Githublink}>{item[i].Githublink ? `GitHub Repository: ${item[i].Githublink}`: null}
            </a>
            <div className={styles.stackCon}
            style={{backgroundColor: "white", borderRadius: "30px"}} >
            {item[i].stack}
            </div>
        </div>
    </div>
</div>))

return (
<ol className={styles.portfolioList}>
{textChildren}
</ol>
)
}