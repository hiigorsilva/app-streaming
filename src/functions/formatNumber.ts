export const formatterNumber = (number: number) => {
  const formatter = new Intl.NumberFormat('pt-BR')
  return formatter.format(number)
}
