type Skill = {
  title: string;
  src: string;
  width?: string;
  height?: string;
};

export const toolsJson: Skill[] = [
  {
    title: "Git",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
  },
  {
    title: "Docker",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
  },
  {
    title: "Photoshop",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg",
  },
  {
    title: "Figma",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/512px-Figma-logo.svg.png",
    width: "50",
    height: "50"
  },
  {
    title: "Expo Go",
    src: "https://seeklogo.com/images/E/expo-go-app-logo-BBBE394CB8-seeklogo.com.png",
    width: "50",
    height: "50"
  },
];
