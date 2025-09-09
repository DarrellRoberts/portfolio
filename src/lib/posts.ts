import fs from "fs"
import path from "path"

const postsDirectory = path.join(process.cwd(), "src/data")

export function getPostsData() {
  const fullPath = path.join(postsDirectory, "posts.json")
  const fileContents = fs.readFileSync(fullPath, "utf8")
  return JSON.parse(fileContents)
}
