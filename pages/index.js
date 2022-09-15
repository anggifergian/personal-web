import { useTheme } from 'next-themes'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  const { theme, setTheme } = useTheme()

  // if (!theme) {
  //   return (<div>Loading...</div>)
  // }

  return (
    <div>
      <Header />

      <main>
        <div className='px-6 md:max-w-2xl mx-auto'>
          <div className='flex justify-end py-4'>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='px-4 py-2 border-2 border-slate-300 rounded-lg bg-none text-slate-800 dark:text-white'
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>

          <di className='text-slate-800 dark:text-white'>
            <p className='text-2xl leading-9'>Hello, there!</p>
            <p className='text-2xl pb-2'>I&apos;m <span className='font-semibold'>Anggi Fergian</span>.</p>
            <p className='text-sm italic'>— Software Developer at <span className='font-semibold'>KoinWorks</span></p>
          </di>

          <div className='py-8'>
            <p className='text-slate-800 dark:text-white leading-relaxed'>I&apos;m One Piece lover with 5 years experience as a frontend guy. Mostly built web app with ReactJs & Angular. I would like to travel to popular cities in Australia.</p>
            <div className='border-b-4 border-b-gray-200 border-opacity-60 w-20 pt-2'></div>
          </div>
        </div>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
