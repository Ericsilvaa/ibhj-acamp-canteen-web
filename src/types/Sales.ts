import { TransactionType } from './Transaction'

export interface SalesType {
  totalRevenue: number
  totalExpenses: number
  profit: number
  transactions: TransactionType[]
}
