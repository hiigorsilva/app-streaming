export const Loading = () => {
  return (
    <div className='absolute inset-0 z-[100] w-full h-full flex justify-center items-center bg-zinc-950'>
      <div className='size-24 border-8 rounded-full border-solid border-red-600 border-t-transparent border-r-transparent animate-spin duration-1000' />
    </div>
  )
}
