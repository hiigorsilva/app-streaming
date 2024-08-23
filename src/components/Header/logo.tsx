import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      src='/logo.svg'
      alt='Logo do Netflix'
      width={88}
      height={24}
      draggable={false}
    />
  )
}
