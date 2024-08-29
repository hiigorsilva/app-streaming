'use client'

import Link from 'next/link'
import { links } from './headerLinks'
import { Logo } from './logo'
import { Button } from '../ui/button'
import Image from 'next/image'
import { BellIcon, MenuIcon, SearchIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export const Header = () => {
  const [blackHeader, setBlackHeader] = useState(false)
  const [isMobileMenu, setIsMobileMenu] = useState(false)

  useEffect(() => {
    const handleMobileMenu = () => {
      const widthScreen = window.innerWidth
      const breakPoint = 768
      setIsMobileMenu(widthScreen < breakPoint)
    }
    handleMobileMenu()

    window.addEventListener('resize', handleMobileMenu)
    return () => window.removeEventListener('resize', handleMobileMenu)
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      return window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false)
    }
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

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

          {/* MENU DESKTOP */}
          <nav className='hidden md:flex justify-between items-center w-full'>
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
                    draggable={false}
                  />
                </Button>
              </li>
            </ul>
          </nav>

          {/* MENU MOBILE */}
          {isMobileMenu && (
            <Sheet>
              <SheetTrigger>
                <div className='p-1 rounded bg-zinc-900/30 hover:bg-transparent'>
                  <MenuIcon size={28} />
                </div>
              </SheetTrigger>
              <SheetContent className='space-y-4 overflow-y-auto'>
                <SheetHeader className='text-left space-y-8'>
                  <SheetTitle className='w-fit'>
                    <Logo />
                  </SheetTitle>
                  <SheetDescription className='w-full flex justify-start items-center gap-3 text-zinc-200 bg-transparent hover:bg-transparent'>
                    <Image
                      className='rounded'
                      src='/profile.webp'
                      alt='Foto de perfil'
                      width={28}
                      height={28}
                      draggable={false}
                    />
                    Bem vindo, Higor!
                  </SheetDescription>
                </SheetHeader>

                <ul className='space-y-4'>
                  <div className='w-full h-px bg-zinc-800/50' />

                  <div className='space-y-2'>
                    <li>
                      <Link
                        href='/'
                        className='w-full flex justify-start items-center gap-3 text-sm text-zinc-300 hover:text-red-500 p-2 rounded bg-transparent hover:bg-zinc-900/50'
                      >
                        <SearchIcon size={20} />
                        Search
                      </Link>
                    </li>

                    <li>
                      <Link
                        href='/'
                        className='w-full flex justify-start items-center gap-3 text-sm text-zinc-300 hover:text-red-500 p-2 rounded bg-transparent hover:bg-zinc-900/50'
                      >
                        <BellIcon size={20} />
                        Notificações
                      </Link>
                    </li>
                  </div>

                  <div className='w-full h-px bg-zinc-800/50' />

                  <div className='space-y-2'>
                    {links.map((link) => (
                      <li
                        key={link.name}
                        className='text-sm text-zinc-200 hover:text-red-500 p-2 rounded hover:bg-zinc-900/50'
                      >
                        <Link
                          href={link.url}
                          className='flex items-center gap-3'
                        >
                          {link.icon}
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
