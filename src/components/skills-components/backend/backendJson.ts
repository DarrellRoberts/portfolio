type Skill = {
    title: string,
    src: string,
    width?: string,
    height?: string
}

const backendJson: Skill[] =
  [
    {
      title: 'Node.js',
      src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg'
    },
    {
      title: 'Express.js',
      src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg'
    },
    {
      title: 'Java',
      src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg'
    }
];

export {backendJson};
