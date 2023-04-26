import fs from 'fs'
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter'
import Image from 'next/image'
import getPostMetadata from '@/components/getPostMetadata';
import getFormattedDate from '@/utils/getFormattedDate';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content)
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

const PostPage = (props: any) => {
    const slug = props.params.slug
    const post = getPostContent(slug);
    const formattedDate = getFormattedDate(post.data.date)

    return (
        <section className="container max-w-7xl mx-auto p-2">
            <div className="flex flex-col">
            <h1 className="text-3xl md:text-8xl md:text-left font-semibold py-5">{post.data.title}</h1>
                <Image
                    src={post.data.image}
                    alt='Midjourney Golf'
                    width={1600}
                    height={500}
                />

                <div className="max-w-3xl mx-auto justify-start mt-7">

                    <div className='text-light text-2xl'>{formattedDate}</div>
                    <article className='prose py-4'>
                        <Markdown>{post.content}</Markdown>
                    </article>
                </div>
            </div>
        </section>

    )
}

export default PostPage