export type BuyerType = {
  name: string
  memberOfChurch: boolean
}

export interface TransactionType {
  transactionId: string
  date: string
  amount: number
  products: string[]
  buyer: BuyerType
}

// Tipagem de Doações
export interface DonationType {
  donor: string
  amount: number
  date: string // ISO 8601
  note?: string
}
