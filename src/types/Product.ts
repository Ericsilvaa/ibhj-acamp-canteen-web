export interface ProductType {
  productId: string
  name: string
  price: number
  stock: number
  category: string // Ex.: "food", "drink"
  sold: number // Quantidade vendida
}
