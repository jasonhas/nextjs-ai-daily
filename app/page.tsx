import { Anton, Poppins } from 'next/font/google'
import cslx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import getPostsByDate from '@/components/getPostsByDate'
import getFormattedDate from '@/utils/getFormattedDate'

const anton = Anton({
  weight:['400'],
  subsets: ['latin']
})

const poppins = Poppins({
  weight:['400','500','600'],
  subsets:['latin']
})

export const metadata = {
  title: 'This is the actual blog post',
  description: 'Golfing is fun, I wish I had a view like this on my local course',
  keywords: 'Golf, Midjourney, prompts, Artificial Intelligent Images, text to image'
}

const Homepage = () => {
  
  const postsByDate = getPostsByDate();
  const first = postsByDate.slice(0,1).map((item) => {
    const date = getFormattedDate(item.date)

    return (
      <>
      <div className='relative px-2'>
      <Image
        src={item.image}
        alt='Midjourney generated Image'
        width={1600}
        height={500}
        priority={true}
      />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='px-2 pt-4 md:py-4'>
          <h2 className='text-4xl font-semibold hover:text-blue-500'><Link href={`/posts/${item.slug}`}>{item.title}</Link></h2>
          <div className='text-2xl font-light pb-2 md:py-4 text-slate-500'>{date}</div>
        </div>
        <div className='px-2 py-2 md:py-4 font-serif text-xl'>
          {item.subtitle}
        </div>
      </div>      
      </>
    )
  })

  const minor = postsByDate.slice(1,3).map((item) => {
    const date = getFormattedDate(item.date)
    return (
      <div className='overflow-hidden shadow-lg'>
      <img className="w-full" src={item.image} alt="AI Generated"/>
      <div className="px-6 py-4">
        <div className="text-3xl mb-2"><Link href={`/posts/${item.slug}`} className='hover:text-blue-500'>{item.title}</Link></div>
        <div className='text-xl font-light'>{date}</div>
        <p className='text-gray-700 text-base py-3'>{item.subtitle}</p>
      </div>
    </div>

    )
  })


  return (
    <main className='max-w-7xl mx-auto'>
      <section className="grid grid-cols-1 pb-8">
        <h1 className={cslx("text-8xl p-2", anton.className)}>BLOG.</h1>
        {first}
      </section>
      <section className='p-2'>
        <h3 className={cslx("text-3xl p-2", poppins.className)}>Yesterday's News</h3>
        <div className='grid grid-cols-1 gap-x-4 md:grid-cols-2'>
        {minor}
        </div>
      </section>
    </main>

  )
}

export default Homepage