import { Popover } from "antd"

const textData = [
{
    content: ["The Book Club Brothers is a fullstack website I created that is dedicated to a bookclub I formed with my old school friends in 2020", "I made it with Next.ts in the Frontend; Express.js in the Backend; and I created my own API with the Mongo Database", "It has the following capabilities: jwt account login, Cloudinary photo upload, user statistics, book library, user library, submit and edit book ratings, submit and edit comments, new book suggestion, quiz and book randomiser", "This is my main project and I  constantly have plans for new features, so stay tuned for more!", "I use the free service from Render for deploying the Backend, which means there can be a long loading time for the books and user library. However, if it's long enough, you may encounter a secret quiz I implemented ;) "],
    title: 'The Book Club Brothers + Custom API',
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
    link: "https://bookclub-brothers.vercel.app/",
    Githublink:"https://github.com/DarrellRoberts/BookClubBrothers_Frontend_NextMigration"
    ,
},
{
    title: 'Shark Explorer',
    content: ["Shark Explorer is a 3D-interactive website where the user can explore and learn about different species of sharks. Since childhood I've had a fascination with sharks and in 2012 I participated in a project for the conservation of Great White Sharks.","I made this with vanilla JavaScript, the Three.js library and Vite.js.", "Users can navigate via the x-, y- and z-axis.","I plan to explore Three.js further and am currently learning Blender, a 3D modeling tool. Therefore, this is also a work in progress.", "This has a lot of potential as a 3D website and I'm incredibly excited about it!"],
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
    content: ["The Book Club League is an extension of the Book Club Brothers. On this site the user can input the data from their book club and compare against others across the world. The idea came to me when I realised a common problem for book club members is motivation. Therefore, adding a competitive element I felt motivates users to finish their reading list (myself included)", "For this project I am using Nuxt.ts with TypeScript in the Frontend; and currently I am not sure how to approach the backend but I'm leaning towards a Firebase setup",
    "This is probably the least complete out of all my projects. Nevertheless, I am planning: .csv file upload, chat messaging between clubs, league tables and more",
    "Stay tuned for more."],
    title: 'The Book Club League',
    stack: (
        <>
        <Popover title="Nuxt">
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg" width="50" height="50" alt="Nuxt" />
        </Popover>
        <Popover title="TypeScript"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="50" height="50" alt="TypeScript" />
        </Popover>
        </>
    ),
    link: "TBA",
    Githublink:"https://github.com/DarrellRoberts/BookClubLeague_NuxtMigration"
    ,
},
{
    content: ["TeamUp is a website app I created with three other group members at my Fullstack Developer Bootcamp. It's designed for users new to a city in Germany and want to meet new people via sports", "For this project we used React.js in the Frontend; Express in Backend; and a Mongo Database.", "The app has many features, such as: account creation and login, profile editing, user rating, badges, searching for events, joining events, creating events, liking events, submitting comments, replying to comments and more.", "We were personally selected to present this project at the end of the bootcamp to an audience of over 150 people."
    ],
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
    content: ["This Pokifight game was created by myself and another group member at my Fullstack Developer bootcamp. I took on the role of the Frontend developer whilst they took over the Backend.", "We used React in the Frontend; Express in the Backend; a Mongo Database; and also fetched from a public pokimon API with over 800 characters", "We added multiple features, such as: username entry, enable and disable soundtrack, player selection, tutorial, opponent randomiser, game mechanics and a dynamic player leaderboard"
    ],
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