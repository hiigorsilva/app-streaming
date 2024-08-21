import Link from 'next/link'
import { links } from './headerLinks'
import { Logo } from './logo'

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
        <div className='flex items-center gap-12'>
          <Link href='/'>
            <Logo />
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
