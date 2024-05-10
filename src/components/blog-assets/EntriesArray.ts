import { getDate } from "./DateFormatter";

type EntryData = {
    id: number,
    title: string,
    lists: string[],
    images: string[],
    imageAlt: string[],
    article: string,
    date: string
  }

  const date = getDate();

const entriesArray: EntryData[] = [
  {
    id: 1,
    title: "Example Title",
    lists: ["first", "second", "third"],
    images: ["/assets/cog.svg"],
    imageAlt: ["cog"],
    article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae quidem maxime est ipsum veritatis! Doloribus fugit exercitationem, in illum, repudiandae, possimus voluptate modi fuga perferendis atque distinctio harum. Recusandae",
    date: date
  },
  {
    id: 2,
    title: "Example Title2",
    lists: ["first", "second", "third"],
    images: ["/assets/cog.svg"],
    imageAlt: ["cog"],
    article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae quidem maxime est ipsum veritatis! Doloribus fugit exercitationem, in illum, repudiandae, possimus voluptate modi fuga perferendis atque distinctio harum. Recusandae.",
    date: date
  }
]

entriesArray.reverse();

export default entriesArray;