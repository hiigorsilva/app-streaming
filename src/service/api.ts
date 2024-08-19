import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_API_KEY
const apiUrl = 'https://api.themoviedb.org/3'

export const api = axios.create({
  baseURL: apiUrl,
  params: {
    api_key: apiKey,
    language: 'pt-BR',
  },
})
