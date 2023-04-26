import Link from 'next/link'
import { SiTwitter } from '@react-icons/all-files/si/SiTwitter'

export default function Footer() {
    return (
      <footer>
          <div className="container p-6 grid grid-cols-2 gap-5 lg:grid-cols-4 w-full mx-auto border-t-2 mt-5">
            <div className="flex flex-col col-span-1">
              <h3 className='text-3xl font-bold'>Links</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col col-span-1'>
              <h3 className='text-3xl font-bold'>Social</h3>
              <ul className='justify-center'>
                <li className='items-center'>
                  <Link href="http://twitter.com">Twitter</Link>
                </li>
                <li>
                  <Link href="http://instagram.com">Instagram</Link>
                </li>
                <li>
                  <Link href="http://linkedIn.com">LinkedIn</Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col col-span-1'>
              <h3 className='text-3xl font-bold'>Help</h3>
              <ul>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col col-span-1'>
              <h3 className='text-3xl font-bold'>Tell Us</h3>
              <form>
                <input type="text" placeholder='Feedback'/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 focus:outline-none focus:shadow-outline" type="button">Submit</button>
              </form>
            </div>
          </div>

        <div className='text-center'>
          <span className='pt-3 font-light'>Copyright &copy; 2023 AI Image Daily</span>
        </div>

      </footer>
    )
  }