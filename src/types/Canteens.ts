import { OperatingHoursType } from './Operating'
import { ProductType } from './Product'
import { SalesType } from './Sales'
import { ResponsibleType, TeamType } from './TeamMember'

export type CanteenType = 'ACAMPAMENTO' | 'MC' | 'MM'
export type CanteenStatus = 'active' | 'inactive' | 'archived'

export type CanteenOptionType = {
  value: CanteenType
  label: string
}

export type CanteenStatusOptionType = {
  value: CanteenStatus
  label: string
}

export interface Canteen {
  canteenId: string
  name: string
  type: CanteenType
  responsible: ResponsibleType
  team: TeamType
  products: ProductType[]
  sales: SalesType
  operatingHours: OperatingHoursType
  createdAt: string // ISO 8601
  updatedAt: string // ISO 8601
  status: CanteenStatus
  // donations: DonationType[]
}
