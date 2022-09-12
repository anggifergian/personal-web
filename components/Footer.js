import { useState } from 'react'
import { LinkedinFilled, GithubFilled, InstagramFilled, TwitterOutlined } from '@ant-design/icons'

const Footer = () => {
  const [socmed] = useState([
    {
      id: 1,
      label: 'Linkedin',
      icon: <LinkedinFilled style={{ fontSize: 20 }} />,
      link: 'https://www.linkedin.com/in/anggifergian/',
    },
    {
      id: 2,
      label: 'Github',
      icon: <GithubFilled style={{ fontSize: 20 }} />,
      link: 'https://github.com/anggifergian',
    },
    {
      id: 3,
      label: 'Instagram',
      icon: <InstagramFilled style={{ fontSize: 20 }} />,
      link: 'https://www.instagram.com/anggifergian/?hl=en',
    },
    {
      id: 4,
      label: 'Twitter',
      icon: <TwitterOutlined style={{ fontSize: 20 }} />,
      link: 'https://twitter.com/anggifergian',
    }
  ])

  return (
    <div className='pt-6 pb-4 md:max-w-2xl mx-auto border-t-2 border-t-gray-200'>
      <div className='flex justify-center'>
        {socmed.map(item => (
          <a key={item.id} href={item.link} target='_blank' rel="noreferrer">
            <div className='px-4 text-slate-900 dark:text-white flex space-x-2 items-center'>
              {item.icon}
              <p className='hidden md:block'>{item.label}</p>
            </div>
          </a>
        ))}
      </div>

      <div>
        <p className='p-4 text-center text-slate-900 dark:text-white'>© 2022 Anggi Fergian Pratama</p>
      </div>
    </div>
  )
}

export default Footer