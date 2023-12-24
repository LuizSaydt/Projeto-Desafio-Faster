export interface DrinkImage {
  id: number,
  image: {
    type: "Buffer",
    data: number[]
  },
  drink_id: number,
  created_at: string,
  updated_at: string
}