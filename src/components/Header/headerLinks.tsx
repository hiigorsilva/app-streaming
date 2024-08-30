import {
  ClapperboardIcon,
  PopcornIcon,
  StarIcon,
  TrendingUpIcon,
} from 'lucide-react'

export const links = [
  { name: 'Filmes', url: '/movies', icon: <ClapperboardIcon size={20} /> },
  { name: 'Séries', url: '/series', icon: <PopcornIcon size={20} /> },
  { name: 'Minha lista', url: '#', icon: <StarIcon size={20} /> },
  { name: 'Bombando', url: '#', icon: <TrendingUpIcon size={20} /> },
]
