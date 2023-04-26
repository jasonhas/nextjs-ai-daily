import fs from 'fs'
import path from "path"
import matter from "gray-matter"

type Frontmatter = {
    title: string
    subtitle: string
    date: string
    image: string
}

const postsDirectory = path.join(process.cwd(), "posts")

const getBlogPostData = () => {
    const filenames = fs.readdirSync(postsDirectory)
    const allPostsData = filenames.map((filename) => {
        const slug = filename.replace(/\.md$/, "")
        const fullPath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        const matterResult = matter(fileContents)

        return {
            slug,
            ...(matterResult.data as Frontmatter)
        }
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        return -1;
    })
}

export default getBlogPostData