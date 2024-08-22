import Link from 'next/link'
import { links } from './headerLinks'
import { Logo } from './logo'
import { Button } from '../ui/button'
import Image from 'next/image'
import { BellIcon, SearchIcon } from 'lucide-react'

type HeaderProps = {
  blackHeader: boolean
}

export const Header = ({ blackHeader }: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[4.5rem] w-full transition-all ease-in duration-300
      ${blackHeader ? 'bg-zinc-950/95' : 'bg-gradient-to-b from-zinc-950/70 from-20% to-transparent'}`}
    >
      <div className='w-full h-full flex justify-between items-center px-5'>
        <div className='w-full flex justify-between items-center gap-16'>
          {/* LOGO */}
          <Link href='/'>
            <Logo />
          </Link>

          {/* NAVEGAÇÃO */}
          <nav className='flex justify-between items-center w-full'>
            {/* LINKS */}
            <ul className='flex items-center gap-6'>
              {links.map((link) => (
                <li
                  key={link.name}
                  className='text-sm text-zinc-300 hover:text-zinc-50'
                >
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>

            {/* CONTA */}
            <ul className='flex items-center gap-6'>
              <li>
                <Button
                  size='icon'
                  className='text-sm text-zinc-300 hover:text-zinc-50 bg-transparent hover:bg-transparent'
                >
                  <SearchIcon size={24} />
                </Button>
              </li>
              <li>
                <Button
                  size='icon'
                  className='font-normal text-sm text-zinc-300 hover:text-zinc-50 bg-transparent hover:bg-transparent'
                >
                  Infantil
                </Button>
              </li>
              <li>
                <Button
                  size='icon'
                  className='text-sm text-zinc-300 hover:text-zinc-50 bg-transparent hover:bg-transparent'
                >
                  <BellIcon size={24} />
                </Button>
              </li>
              <li>
                <Button
                  size='icon'
                  className='bg-transparent hover:bg-transparent'
                >
                  <Image
                    className='rounded'
                    src='/profile.webp'
                    alt='Foto de perfil'
                    width={32}
                    height={32}
                  />
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
