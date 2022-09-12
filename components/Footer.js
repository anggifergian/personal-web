import Image from 'next/image'

const Footer = () => (
  <div>
    <div className='grid grid-cols-4 gap-2'>
      <div className='p-2 text-slate-800 dark:text-white flex space-x-2'>
        <Image
          src={'/icons/Linkedin.svg'}
          width={24}
          height={24}
        />
        <p className='hidden md:block'>Linkedin</p>
      </div>

      <div className='p-2 text-slate-800 dark:text-white flex space-x-2'>
        <Image
          src={'/icons/Github.svg'}
          width={24}
          height={24}
        />
        <p className='hidden md:block'>Github</p>
      </div>

      <div className='p-2 text-slate-800 dark:text-white flex space-x-2'>
        <Image
          src={'/icons/Instagram.svg'}
          width={24}
          height={24}
        />
        <p className='hidden md:block'>Instagram</p>
      </div>

      <div className='p-2 text-slate-800 dark:text-white flex space-x-2'>
        <Image
          src={'/icons/Twitter.svg'}
          width={24}
          height={24}
        />
        <p className='hidden md:block'>Twitter</p>
      </div>
    </div>

    <div>
      <p className='pt-4 text-center'>© 2022 Anggi Fergian Pratama</p>
    </div>
  </div>
)

export default Footer