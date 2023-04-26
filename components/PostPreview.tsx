import Link from 'next/link'
import { PostMetadata } from './PostMetadata'
import Image from 'next/image'

const PostPreview = (props: PostMetadata) => {
    return (
        <div className=''>
            <Image
                      src={props.image}
                      alt='Midjourney Golf'
                      width={200}
                      height={113}
            />
        <Link href={`/posts/${props.slug}`}>
          <h2>{props.title}</h2>
          <div>{props.date}</div>
        </Link>
      </div>
    )
}

export default PostPreview