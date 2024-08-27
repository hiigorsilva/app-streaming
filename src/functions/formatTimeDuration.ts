export const formatTimeDuration = (time: number) => {
  const hours = Math.floor(time / 60)
  const minutesRest = time % 60

  return `${hours}h ${minutesRest}min`
}
