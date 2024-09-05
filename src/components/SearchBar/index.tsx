import { SearchIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export const SearchBar = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/search/${search}`)
    setSearch('')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full flex justify-start items-center gap-3 text-base text-zinc-300 hover:text-red-500 p-4 rounded bg-transparent hover:bg-transparent md:hover:bg-transparent md:hover:text-zinc-50'>
          <SearchIcon size={20} />
          <span className='block md:hidden'>Search</span>
        </Button>
      </DialogTrigger>

      <DialogContent className='max-w-lg w-[90%] rounded-[.5rem] sm:rounded-xl'>
        <DialogHeader className='text-left'>
          <DialogTitle className='text-base sm:text-xl'>
            Busque por filmes e séries
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className='sr-only'>
          Use palavras chaves
        </DialogDescription>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col sm:flex-row items-center gap-2'
        >
          <input
            className='w-full flex-1 min-h-10 rounded text-sm text-zinc-50 px-4 bg-zinc-800 focus:outline-none'
            type='text'
            placeholder='Ex: Breaking Bad...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <DialogTrigger asChild>
            <Button
              type='submit'
              className='min-h-10 w-full sm:max-w-28 text-sm text-zinc-50 hover:text-zinc-50 rounded transition-all bg-red-600 hover:bg-red-700 focus:outline-none'
              disabled={!search}
            >
              Buscar
            </Button>
          </DialogTrigger>
        </form>
      </DialogContent>
    </Dialog>
  )
}
