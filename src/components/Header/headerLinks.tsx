import { BabyIcon, ClapperboardIcon, PopcornIcon, StarIcon } from 'lucide-react'

export const links = [
  { name: 'Filmes', url: '/movies', icon: <ClapperboardIcon size={20} /> },
  { name: 'Séries', url: '/series', icon: <PopcornIcon size={20} /> },
  { name: 'Infantil', url: '/infantil', icon: <BabyIcon size={20} /> },
  { name: 'Minha lista', url: '#', icon: <StarIcon size={20} /> },
]
