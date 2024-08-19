export const formatRating = (rating: number) => {
  return Math.round(rating * 10).toFixed(0)
}
