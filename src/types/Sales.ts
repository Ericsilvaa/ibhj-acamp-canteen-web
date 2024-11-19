import { TransactionType } from './Transaction'

export interface SalesType {
  profit: number
  totalRevenue?: number
  totalExpenses?: number
  transactions?: TransactionType[]
}

export type SalesHistoryType = {
  transactionId: string
  date: string
  totalAmount: string
  products: string[]
}
