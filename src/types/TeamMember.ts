export interface TeamMemberType {
  name: string
  phone: string
  memberOfChurch: boolean
  specialty?: string
  role?: string
  availability?: string
  tasks?: string[]
}

export interface TeamType {
  cashier: TeamMemberType[]
  cooks: TeamMemberType[]
  decoration: TeamMemberType[]
  volunteers: TeamMemberType[]
}

export interface ResponsibleType {
  name: string
  phone: string
  role: string
  department: string
}
