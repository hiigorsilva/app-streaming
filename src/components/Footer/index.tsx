import Link from 'next/link'
import { linksFooter } from './linksFooter'
import { linksSocials } from './linkSocials'
import Image from 'next/image'
import { Button } from '../ui/button'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='py-16 px-5'>
      <nav className='flex flex-col gap-8'>
        {/* REDES SOCIAIS */}
        <ul className='flex items-center gap-8'>
          {linksSocials.map((social) => (
            <li
              key={social.name}
              className='relative size-6 transition-all duration-300 hover:scale-90 hover:opacity-70'
            >
              <Link href={social.url}>
                <Image
                  className='object-contain'
                  src={social.icon}
                  alt={`Ícone do ${social.name}`}
                  title={social.name}
                  fill
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* LINKS RODAPÉ */}
        <ul className='grid grid-cols-4 w-full gap-y-2'>
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
