import { useRouter } from 'next/router'

const MovieDetailsPage = () => {
  const { query } = useRouter()
  const movieId = query?.id

  return (
    <section className='relative h-dvh w-full'>
      <h2>{movieId}</h2>
    </section>
  )
}
export default MovieDetailsPage
