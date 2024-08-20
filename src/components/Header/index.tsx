import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  const links = [
    { name: 'Filmes', url: '#' },
    { name: 'Séries', url: '#' },
    { name: 'Minha lista', url: '#' },
    { name: 'Bombando', url: '#' },
  ]

  return (
    <header className='fixed top-0 left-0 right-0 z-50 h-[4.5rem] w-full bg-gradient-to-b from-zinc-950/70 from-20% to-transparent'>
      <div className='w-full h-full flex justify-between items-center px-5'>
        <div className='flex items-center gap-12'>
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt='Logo do Netflix'
              width={88}
              height={24}
            />
          </Link>
          <nav className=''>
            <ul className='flex items-center gap-6'>
              {links.map((link) => (
                <li
                  key={link.name}
                  className='text-sm text-zinc-200 hover:text-zinc-50'
                >
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
