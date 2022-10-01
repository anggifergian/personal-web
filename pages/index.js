import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useState } from 'react'
import { LightBulbIcon, SunIcon } from '@heroicons/react/24/outline'

import Footer from '../components/Footer'
import Header from '../components/Header'
import useMount from '../hooks/useMount'

const SectionHeader = ({ title, subtitle }) => (
  <div className='flex flex-col items-center pb-8'>
    <p className='text-lg font-bold text-slate-800 dark:text-white'>{title}</p>
    <p className='text-slate-800 dark:text-white'>{subtitle}</p>
  </div>
)

export default function Home() {
  const { theme, setTheme, systemTheme } = useTheme()
  const { mounted } = useMount()

  const [state, setState] = useState({
    expSize: 3,
    isExpMore: false,
    profile: {
      name: 'Anggi Fergian P',
      role: 'Frontend Engineer',
      company: 'Koinworks',
      description: "Experienced as frontend developer since 2019. Mostly built web application with ReactJs & Angular. I would like to travel around popular cities in Indonesia. And I loved One Piece."
    },
    experiences: [
      {
        company: 'KoinWorks',
        status: 'Fulltime',
        position: 'Frontend Engineer',
        startTime: 'Jan 2022',
        endTime: 'present',
      },
      {
        company: 'Prudential',
        status: 'Contract',
        position: 'Frontend Engineer',
        startTime: 'Apr 2021',
        endTime: 'Dec 2021',
      },
      {
        company: 'Gandiwa',
        status: 'Fulltime',
        position: 'Frontend Engineer',
        startTime: 'Aug 2020',
        endTime: 'Jan 2021',
      },
      {
        company: 'Paper.id',
        status: 'Internship',
        position: 'Frontend Engineer',
        startTime: 'Feb 2020',
        endTime: 'Apr 2020',
      },
      {
        company: 'Indorelawan',
        status: 'Internship',
        position: 'Frontend Engineer',
        startTime: 'Aug 2019',
        endTime: 'Oct 2019',
      }
    ],
    projects: [
      {
        key: 'galaxy-store',
        name: 'Galaxy store',
        desc: 'Online music store (inventory & invoice).',
        imagePath: '/images/galaxy-store.png',
        link: 'https://6335ab08940ed438b5f5e390--zesty-travesseiro-65bfe6.netlify.app/#/login',
      },
      {
        key: 'cms-dms',
        name: 'CMS DMS',
        desc: 'Backoffice for maintaining advertising in Jakarta, both content and location.',
        imagePath: '/images/cms-dms.png',
        link: 'http://31.220.6.203:3000/',
      },
      {
        key: 'micanid',
        name: 'Mican.id',
        desc: 'Platform to meet client with talents according to the specific needs of social events, etc.',
        imagePath: '/images/micanid.png',
        link: 'https://mican.id/',
      },
      {
        key: 'dusdusan-cms',
        name: 'Dusdusan CMS',
        desc: 'Backoffice for maintaining and manage business operation for Dusdusan.id',
        imagePath: '/images/dusdusan.png',
        link: 'https://www.dusdusan.com/',
      }
    ]
  })

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleSeeMore = () => {
    setState(prev => ({
      ...prev,
      isExpMore: !prev.isExpMore,
      expSize: prev.isExpMore ? 3 : 5
    }))
  }

  return (
    <div>
      <Header />

      <main className='px-8 md:max-w-2xl mx-auto'>
        <div className='flex justify-end pt-6 py-4'>
          <button
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            className='px-2 py-2 border border-slate-300 rounded-xl bg-transparent hover:bg-slate-100 text-slate-500 dark:text-white dark:bg-transparent dark:hover:bg-slate-900 transition duration-200 ease-in-out'
          >
            {theme === 'dark'
              ? <SunIcon className='h-6 w-6' />
              : <LightBulbIcon className='h-6 w-6' />}
          </button>
        </div>

        <section className='pt-12 pb-8'>
          <div className='text-slate-800 dark:text-white'>
            <p className='text-2xl leading-9'>Hello, there!</p>
            <p className='text-2xl pb-2'>I&apos;m <span className='font-semibold'>{state.profile.name}</span>.</p>
            <p className='text-sm italic'>— {state.profile.role} at <span className='font-semibold'>{state.profile.company}</span></p>
          </div>

          <div className='py-8'>
            <p className='text-slate-600 text-left dark:text-white leading-relaxed'>
              {state.profile.description}
            </p>

            <div className='border-b-4 border-b-gray-200 border-opacity-60 w-20 pt-2'></div>
          </div>
        </section>

        <section className='pb-20'>
          <SectionHeader
            title='Projects'
            subtitle='My personal projects.'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8'>
            {state.projects.map(item => (
              <div key={item.key}>
                <div className='mb-3 overflow-hidden rounded-lg dark:border-0 border-2 border-slate-200 border-opacity-40 hover:shadow-lg hover:border-opacity-0 transition ease-in-out duration-300'>
                  <Image
                    priority={item.key === 'galaxy-store'}
                    alt={item.key}
                    src={item.imagePath}
                    height={300}
                    width={500}
                    layout='responsive'
                    className='w-full object-cover scale-1 hover:scale-110 transition ease-in-out duration-300'
                  />
                </div>
                <h3 className='mb-1 font-bold text-slate-800 dark:text-white'>
                  <a target="_blank" href={item.link} rel="noopener noreferrer" className='hover:text-blue-500'>
                    {item.name}
                  </a>
                </h3>
                <p className='text-slate-800 dark:text-white leading-5 text-sm'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className='pb-16'>
          <SectionHeader
            title='Experience'
            subtitle='My work experiences.'
          />

          <div className='grid grid-cols-1 divide-y divide-gray-200'>
            {state.experiences.slice(0, state.expSize).map((exp, index) => (
              <div key={exp.company} className={`${index > 0 && 'pt-4'} ${index !== state.experiences.length - 1 && 'pb-4'} flex justify-between`}>
                <div>
                  <h3 className='pb-1 font-bold text-slate-800 dark:text-white'>{exp.company}</h3>
                  <p className='text-sm text-slate-700 dark:text-white'>{exp.status}, {exp.position}</p>
                </div>
                <p className='text-sm text-slate-800 dark:text-white'>{exp.startTime} - {exp.endTime}</p>
              </div>
            ))}
          </div>

          <div className='pt-4 flex justify-center'>
            <button
              className='px-6 py-2 rounded-xl border hover:border-blue-500 hover:text-blue-600'
              onClick={handleSeeMore}
            >
              {state.isExpMore ? 'See less' : 'See more'}
            </button>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
