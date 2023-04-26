import Image from 'next/image'
import { Anton} from 'next/font/google'
import cslx from 'clsx'
import getPostsByDate from '@/components/getPostsByDate'
import PostPreview from '@/components/PostPreview'

const anton = Anton({
    weight:['400'],
    subsets: ['latin']
})

const BlogList = () => {
    const postDates = getPostsByDate();
    
    const postPreviews = postDates.map((post) => (
        <PostPreview key={post.slug} {...post} />
      ))


    return (
        <section className="max-w-7xl mx-auto">
            <h1 className={cslx("text-8xl p-2", anton.className)}>The Archive</h1>
        {postPreviews}
      </section>
    )

}

export default BlogList