'use client'

import { usersProfile } from '@/data/allUsers'
import { LockKeyholeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const UserSelectedPage = () => {
  return (
    <section className='fixed inset-0 z-[100] min-h-dvh flex flex-col justify-center items-center gap-3 bg-zinc-950'>
      <div className='relative w-full h-8'>
        <Image
          className='object-contain'
          src='/logo.svg'
          alt='Logo da Netflix'
          fill
        />
      </div>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='font-semibold text-2xl text-zinc-50'>
          Quem está assistindo?
        </h1>

        <ul className='min-w-72 w-fit flex justify-center gap-8 mx-auto p-8 rounded-xl bg-zinc-600/10 backdrop-blur-sm border border-zinc-50/15'>
          {usersProfile.map((user) => (
            <li key={user.name} className='relative'>
              <Link
                href={user.lock ? '' : '/home'}
                className={`flex flex-col items-center gap-2 p-0 bg-transparent hover:bg-transparent transition-all ${user.lock ? 'cursor-not-allowed' : 'hover:scale-95'}`}
              >
                <div className='relative size-16'>
                  <Image
                    className='object-cover rounded'
                    src={user.img}
                    alt={`Foto de perfil de ${user.name}`}
                    fill
                  />

                  {user.lock && (
                    <div className='absolute inset-0 w-full h-full flex justify-center items-center bg-zinc-950/50'>
                      <LockKeyholeIcon />
                    </div>
                  )}
                </div>
                <h2 className='text-zinc-200'>{user.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default UserSelectedPage
