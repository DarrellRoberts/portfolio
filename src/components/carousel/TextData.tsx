import { Popover } from "antd"

const textData = [
{
    content: "The Book Club Brothers is a website I created that is dedicated to a bookclub I formed with my old school friends in 2020. We all live in different countries so formed the club as a way of keeping in touch, whilst also reading fantastic books. This is a Full Stack project and so far has the following capabilities: jwt account registration and login, Cloudinary photo upload, user statistics, submit and edit book ratings, new book suggestion and book randomiser. This is my current project so bear with me if it's not complete. Stay tuned!",
    title: 'The Book Club Brothers',
    stack: (
        <>
        <Popover title="Next">
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="50" height="50" alt="Next" />
        </Popover>
        <Popover title="TypeScript"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="50" height="50" alt="TypeScript" />
        </Popover>
        <Popover title="Tailwind CSS">
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="50" height="50" alt="TailwindCSS" />
        </Popover>
        </>
    ),
    link: "https://bookclub-brothers.vercel.app/",
    Githublink:"https://github.com/DarrellRoberts/BookClubBrothers_Frontend_NextMigration"
    ,
},
{
    content: "This is the API I created for the BookClub Brothers website.",
    title: 'The Book Club Brothers API',
    stack: (
        <>
        <Popover title="MongoDB">
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="50" height="50" alt="MongoDB" />
        </Popover>
        <Popover title="Express.js">
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="50" height="50" alt="Express" />
        </Popover>
        <Popover title="Node.js">
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="50" height="50" alt="NodeJS" />
        </Popover >
        </>
    ),
    link: "https://bookclubbrothers-backend.onrender.com/books",
    Githublink:"https://github.com/DarrellRoberts/BookClubBrothers_Backend-API",
},
{
    content: "The Book Club League is an extension of the Book Club Brothers. On this site the user can input the data from their book club and compare against others across the world. I felt like most book clubs lacked enthusiasm to finish their books, so realised being able to compare against other clubs would be a great incentive. For this project I am using Vue.js with TypeScript. This is a work in progress so stay tuned for more!",
    title: 'The Book Club League',
    stack: (
        <>
        <Popover title="Vue">
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg" width="50" height="50" alt="Vue" />
        </Popover>
        <Popover title="TypeScript"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="50" height="50" alt="TypeScript" />
        </Popover>
        </>
    ),
    link: "TBA",
    Githublink:"https://github.com/DarrellRoberts/BookClubLeague_Frontend"
    ,
},
{
    title: 'Shark Explorer',
    content: "Shark Explorer is a 3D-interactive website where the user can explore and learn about different species of sharks. Since childhood I've had a fascination with sharks and in 2012 I participated in a project for the conservation of Great White Sharks. I made this website as a tool to educate all ages of why we need them. I made this with vanilla JavaScript, the Three.js library and Vite.js.",
    stack: (
        <>
        <Popover title="JavaScript">
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="50" height="50" alt="JavaScript" />
        </Popover>
        <Popover title="Three.js"><img src="https://seeklogo.com/images/T/three-js-logo-07A32307F1-seeklogo.com.png" width="50" height="50" alt="Three.js" />
        </Popover>
        <Popover title="Vite">
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="50" height="50" alt="Vite" />
        </Popover>
        </>
    ),
    link: "https://shark-explorer.netlify.app/",
    Githublink:"https://github.com/DarrellRoberts/shark_explorer"
    ,
},
{
    content: "TeamUp is an app I created with three other group members at my Full-stack Developer Bootcamp. It's designed for users new to a city in Germany and want to meet new people via sports. The app has many features, such as: account creation and login, profile editing, user rating, badges, searching for events, joining events, creating events, liking events, submitting comments, replying to comments and more. We were selected to present this project at the end of the bootcamp to an audience of over 150 people. I along with another team member worked primarily on the Front-end, whilst our other two group members worked on the Back-end",
    title: 'TeamUp (Group Project - 4)',
    stack: (
        <>
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
        </>
    ),
    link: "https://teamup-de.netlify.app/",
    Githublink:"https://github.com/hari-pace/TeamUp"
    ,
},
{
    content: "This Pokifight game was created by myself and another group member. I took on the role of the Front-end developer whilst they took over the Back-end. We used a pokemon API in order to fetch and display over 800 characters. Then we added multiple features, such as: username entry, enable and disable soundtrack, player selection, tutorial, opponent randomiser, game mechanics and a dynamic player leaderboard.",
    title: 'Pokifight Game (Group Project - 2)',
    stack: (
        <>
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
        </>
    ),
    link: "https://golden-fudge-4d4499.netlify.app/",
    Githublink: "https://github.com/DarrellRoberts/pokifight_frontend",
},
];

export default textData