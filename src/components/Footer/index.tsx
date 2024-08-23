import Link from 'next/link'
import { linksFooter } from './linksFooter'
import { linksSocials } from './linkSocials'
import Image from 'next/image'
import { Button } from '../ui/button'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='py-8 px-5 mt-16'>
      <nav className='flex flex-col gap-8'>
        {/* REDES SOCIAIS */}
        <ul className='flex items-center gap-8'>
          {linksSocials.map((social) => (
            <li
              key={social.name}
              className='size-6 transition-all duration-300 hover:scale-90 hover:opacity-70'
            >
              <Link className='relative z-0' href={social.url}>
                <Image
                  className='object-contain'
                  src={social.icon}
                  alt={`Ícone do ${social.name}`}
                  title={social.name}
                  width={24}
                  height={24}
                  // fill
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* LINKS RODAPÉ */}
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-x-4 gap-y-2'>
          {linksFooter.map((link) => (
            <li key={link.name}>
              <Link
                className='text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-100'
                href={link.url}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* COPYWRITING */}
        <div className='flex flex-col gap-4'>
          <Button
            size='sm'
            className='font-light text-xs text-zinc-300 w-fit rounded-none border border-zinc-300 bg-transparent hover:bg-transparent'
          >
            Código do serviço
          </Button>
          <span className='font-light text-xs text-zinc-300'>
            © 1997-{currentYear} Netflix, Inc.
          </span>
        </div>
      </nav>
    </footer>
  )
}
