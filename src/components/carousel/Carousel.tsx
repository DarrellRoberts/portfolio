"use client"
import { useState, useRef } from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { Popover } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';

import "./carousel.css"

const Element = BannerAnim.Element;

interface data {
  pic: string;
  map: string;
  color: string;
  background: string
}

const textData = [
{
  title: 'Shark Explorer (Solo Project - Current Project)',
  content: "Shark Explorer is a 3D-interactive website where the user can explore and learn about different species of sharks. Since childhood I've had a fascination with sharks and in 2012 I participated in a project for the conservation of Great White Sharks. I made this website as a tool to educate all ages of why we need them. I made this with vanilla JavaScript, the Three.js library and Vite.js.",
  stack: (
  <div className="skillsGrid">
  <Popover title="JavaScript">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="50" height="50" alt="JavaScript" />
  </Popover>
  <Popover title="Three.js"><img src="https://seeklogo.com/images/T/three-js-logo-07A32307F1-seeklogo.com.png" width="50" height="50" alt="Three.js" />
  </Popover>
  <Popover title="Vite">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="50" height="50" alt="Vite" />
  </Popover>
  </div>
  ),
  link: "https://shark-explorer.netlify.app/",
  Githublink:"https://github.com/DarrellRoberts/shark_explorer"
  ,
  },
{
  content: "The Book Club Brothers is a website I created that is dedicated to a bookclub I formed with my old school friends in 2020. We all live in different countries so formed the club as a way of keeping in touch, whilst also reading fantastic books. This is a Full Stack project and so far has the following capabilities: jwt account registration and login, Cloudinary photo upload, user statistics, submit and edit book ratings, new book suggestion and book randomiser. This is my current project so bear with me if it's not complete. Stay tuned!",
  title: 'The Book Club Brothers (Solo Project - Current Project)',
  stack: (
  <div className="skillsGrid">
  <Popover title="React">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="50" height="50" alt="React" />
  </Popover>
  <Popover title="TypeScript"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="50" height="50" alt="TypeScript" />
  </Popover>
  <Popover title="Tailwind CSS">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="50" height="50" alt="TailwindCSS" />
  </Popover>
  </div>
  ),
  link: "https://bookclub-brothers.vercel.app/",
  Githublink:"https://github.com/DarrellRoberts/BookClubBrothers_Frontend_NextMigration"
  ,
  },
  {
    content: "This is the API I created for the BookClub Brothers website.",
    title: 'The Book Club Brothers API (Solo Project)',
    stack: (
      <div className="skillsGrid">
      <Popover title="MongoDB">
      <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="50" height="50" alt="MongoDB" />
      </Popover>
      <Popover title="Express.js">
      <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="50" height="50" alt="Express" />
      </Popover>
      <Popover title="Node.js">
      <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="50" height="50" alt="NodeJS" />
      </Popover >
      </div>
      ),
    link: "https://bookclubbrothers-backend.onrender.com/books",
    Githublink:"https://github.com/DarrellRoberts/BookClubBrothers_Backend-API",
    },
    {
      content: "The Book Club League is an extension of the Book Club Brothers. On this site the user can input the data from their book club and compare against others across the world. I felt like most book clubs lacked enthusiasm to finish their books, so realised being able to compare against other clubs would be a great incentive. For this project I am using Vue.js with TypeScript and Tailwind CSS. Similarly, it is a work in progress so stay tuned for more!",
      title: 'The Book Club League (Solo Project - Current Project)',
      stack: (
      <div className="skillsGrid">
      <Popover title="Vue">
      <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg" width="50" height="50" alt="Vue" />
      </Popover>
      <Popover title="TypeScript"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="50" height="50" alt="TypeScript" />
      </Popover>
      <Popover title="Tailwind CSS">
    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="50" height="50" alt="TailwindCSS" />
      </Popover>
      </div>
      ),
      link: "https://bookclub-brothers.vercel.app/",
      Githublink:"https://github.com/DarrellRoberts/BookClubLeague_Frontend"
      ,
      },
{
content: "TeamUp is an app I created with three other group members at my Full-stack Developer Bootcamp. It's designed for users new to a city in Germany and want to meet new people via sports. The app has many features, such as: account creation and login, profile editing, user rating, badges, searching for events, joining events, creating events, liking events, submitting comments, replying to comments and more. We were selected to present this project at the end of the bootcamp to an audience of over 150 people. I along with another team member worked primarily on the Front-end, whilst our other two group members worked on the Back-end",
title: 'TeamUp (Group Project - 4)',
stack: (
<div className="skillsGrid">
<Popover title="MongoDB">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="50" height="50" alt="MongoDB" />
</Popover>
<Popover title="Express.js">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="50" height="50" alt="Express" />
</Popover>
<Popover title="React">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="50" height="50" alt="React" />
</Popover>
<Popover title="Node.js">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="50" height="50" alt="NodeJS" />
</Popover >
</div>
),
link: "https://teamup-de.netlify.app/",
Githublink:"https://github.com/hari-pace/TeamUp"
,
},
{
content: "This Pokifight game was created by myself and another group member. I took on the role of the Front-end developer whilst they took over the Back-end. We used a pokemon API in order to fetch and display over 800 characters. Then we added multiple features, such as: username entry, enable and disable soundtrack, player selection, tutorial, opponent randomiser, game mechanics and a dynamic player leaderboard.",
title: 'Pokifight Game (Group Project - 2)',
stack: (
  <div className="skillsGrid">
  <Popover title="MongoDB">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="50" height="50" alt="MongoDB" />
  </Popover>
  <Popover title="Express.js">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="50" height="50" alt="Express" />
  </Popover>
  <Popover title="React">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="50" height="50" alt="React" />
  </Popover>
  <Popover title="Node.js">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="50" height="50" alt="NodeJS" />
  </Popover >
  </div>
  ),
link: "https://golden-fudge-4d4499.netlify.app/",
Githublink: "https://github.com/DarrellRoberts/pokifight_frontend",
  },
{
  content: "That was just a handful of my projects but be sure to come back as I update this portfolio regularly.",
  title: 'I hope you saw something you liked!',
}
    ]
;

const dataArray:data[] = [
  {
    pic:'https://i.imgur.com/oSfGZm0.jpg',
    map: "",
    color: '#73c5ff',
    background: '#0e90ed',
  },
  {
    pic:'https://i.imgur.com/lKSduux.jpg',
    map: "",
    color: '#808080',
    background: '#000',
  },
  {
    pic: 'https://i.imgur.com/EYl5Yqz.jpg',
    map: '',
    color: 'rgb(72, 150, 72)',
    background: 'rgb(43, 88, 43)',
  },
  {
    pic:'',
    map: "",
    color: '#eb5b5b',
    background: '#d10606',
  },
  {
    pic:'https://i.imgur.com/FQ8lPtR.jpg',
    map: "",
    color: '#93a5ca',
    background: '#8298c6',
  },
  {
    pic: 'https://i.imgur.com/iU2NqKT.jpg',
    map: '',
    color: '#03115c',
    background: '#020a33',
  },
  {
  pic:'',
  map: "https://i.imgur.com/UfNLSSP.png",
  color: '#298e89',
  background: '#FFFFFF'
  }
];
const mapArray = dataArray.map(item => ({ ...item, ...textData }));

export default function Carousel({className = 'details-switch-demo'}) {
    const [showInt, setShowInt] = useState(0);
    const [delay, setDelay] = useState(0);
    const [imgAnim, setImgAnim] = useState([
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ]);
    const [oneEnter, setOneEnter] = useState(false);
  
    // Refs for BannerAnim instances
    const bannerImgRef = useRef(null);
    const bannerTextRef = useRef(null);
  
    const onChange = () => {
      if (!oneEnter) {
        setDelay(300);
        setOneEnter(true);
      }
    };
  
    const onLeft = () => {
      let newShowInt = showInt - 1;
      const newImgAnim = [
        { translateX: [0, -300], opacity: [1, 0] },
        { translateX: [0, 300], opacity: [1, 0] },
      ];
      if (newShowInt < 0) {
        newShowInt = 0;
      }
      setShowInt(newShowInt);
      setImgAnim(newImgAnim);
      bannerImgRef.current.prev(); // Accessing prev method using useRef
      bannerTextRef.current.prev(); // Accessing prev method using useRef
    };
  
    const onRight = () => {
      let newShowInt = showInt + 1;
      const newImgAnim = [
        { translateX: [0, 300], opacity: [1, 0] },
        { translateX: [0, -300], opacity: [1, 0] },
      ];
      if (newShowInt >= mapArray.length) {
        newShowInt = mapArray.length - 1;
      }
      setShowInt(newShowInt);
      setImgAnim(newImgAnim);
      bannerImgRef.current.next(); // Accessing next method using useRef
      bannerTextRef.current.next(); // Accessing next method using useRef
    };
  
    const getDuration = (e) => {
      return e.key === 'map' ? 800 : 1000;
    };
  
    const imgChildren = mapArray.map((item, i) => (
      <Element
        key={i}
        style={{
          background: item.color,
          height: '100%',
          backgroundImage:`${item.map}`, 
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover"
        }}
        leaveChildHide
      >
        <QueueAnim
          animConfig={imgAnim}
          duration={getDuration}
          delay={[!i ? delay : 300, 0]}
          ease={['easeOutCubic', 'easeInQuad']}
          key="img-wrapper"
        >
          <div className={`${className}-map map${i}`} key="map">
            {/* <img src={`${item.map}`} alt="" width="100%" /> */}
          </div>
          <div className={`${className}-pic pic${i}`} key="pic">
            <img src={item.pic} alt="" width="100%" />
          </div>
        </QueueAnim>
      </Element>
    ));
  
    const textChildren = mapArray.map((item, i) => (
      <Element key={i}>
        <QueueAnim type="bottom" duration={1000} delay={[!i ? delay + 500 : 800, 0]}>
          <div className="queueCon">
            <div className="textCon">
          <h1 
          className="carouselTitle"
          style={{color: mapArray[showInt].background === "#000" || mapArray[showInt].background === "rgb(43, 88, 43)" || mapArray[showInt].background === "#020a33" ? "#FFFFFF" : "#000", fontSize: "3rem"}}
          key="h1">
            {item[i].title}
            </h1>

          <em key="em" style={{ background: mapArray[showInt].background === "#000" || mapArray[showInt].background === "rgb(43, 88, 43)" || mapArray[showInt].background === "#020a33" ? "#FFFFFF" : "#000"}} />

          <p 
          style={{color: mapArray[showInt].background === "#000" || mapArray[showInt].background === "rgb(43, 88, 43)" || mapArray[showInt].background === "#020a33" ? "#FFFFFF" : "#000"}}
          key="p">
            {item[i].content}
            </p>
          <span 
          key="span">
            <a
            style={{color: mapArray[showInt].background === "#000" || mapArray[showInt].background === "rgb(43, 88, 43)" || mapArray[showInt].background === "#020a33" ? "#FFFFFF" : "#000"}} 
            key="a" 
            target="_blank" 
            rel="nofollow" 
            href={item[i].link}>{item[i].link ? `URL` : null}</a></span>
          <br/>
          <a
          style={{color: mapArray[showInt].background === "#000" || mapArray[showInt].background === "rgb(43, 88, 43)" || mapArray[showInt].background === "#020a33" ? "#FFFFFF" : "#000"}} 
          key="a" 
          target="_blank" 
          rel="nofollow" 
          href={item[i].Githublink}>{item[i].Githublink ? `GitHub Repository` : null}</a>
          </div>
          <div
          style={{backgroundColor: "white", borderRadius: "30px"}} 
          key="div">
            {item[i].stack}
          </div>
          </div>
        </QueueAnim>
      </Element>
    ));
    return (
      <>
      <div className="bg-primary">
      <div className={className ? `${className}-wrapper projectCon` : `bg-primary h-screen`} style={{ background: mapArray[showInt].background }}>
        <h1 key="a" className="heroTitle" style={{color: mapArray[showInt].background === "#000" || mapArray[showInt].background === "rgb(43, 88, 43)" || mapArray[showInt].background === "#020a33" ? "#FFFFFF" : "#000"}}>
        </h1>
        <div
        key="b"
        className={`${className}`}>
          <BannerAnim
            prefixCls={`${className}-img-wrapper`}
            sync
            type="across"
            duration={1000}
            ease="easeInOutExpo"
            arrow={false}
            thumb={false}
            onChange={onChange}
            dragPlay={false}
            ref={bannerImgRef}
          >
            {imgChildren}
          </BannerAnim>
            {showInt > 0 && (
            <LeftOutlined style={{opacity: "1", color: mapArray[showInt].background === "#000" || mapArray[showInt].background === "rgb(43, 88, 43)" || mapArray[showInt].background === "#020a33" ? "#FFFFFF" : "#000"}} type="left" key="left" onClick={onLeft} />)}
            {showInt < mapArray.length - 1 && 
            (<RightOutlined style={{opacity: "1", color: mapArray[showInt].background === "#000" || mapArray[showInt].background === "rgb(43, 88, 43)" || mapArray[showInt].background === "#020a33" ? "#FFFFFF" : "#000"}} type="right" key="right" onClick={onRight} />)}
        </div>
        <BannerAnim
            prefixCls={`${className}-text-wrapper`}
            sync
            type="across"
            duration={1000}
            arrow={false}
            thumb={false}
            ease="easeInOutExpo"
            dragPlay={false}
            ref={bannerTextRef}
        >
            {textChildren}
        </BannerAnim>
      </div>
      </div>
      </>
    );
  };
  
  Carousel.propTypes = {
    className: PropTypes.string,
  };

