import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_API_KEY
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const api = axios.create({
  baseURL: apiUrl,
  params: {
    api_Key: apiKey,
    language: 'pt-BR',
  },
})
