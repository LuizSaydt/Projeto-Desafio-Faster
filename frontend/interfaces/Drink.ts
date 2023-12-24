export interface Drink {
  id: number,
  name: string,
  description: string,
  category: string,
  created_at: string,
  updated_at: string,
  image?: {
    id: number,
    drink_id: number
  },
  favorite?: boolean
}