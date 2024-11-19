export interface TeamMemberType {
  name: string
  phone?: string
}

export interface TeamType {
  cashier?: TeamMemberType[]
  cooks?: TeamMemberType[]
  decoration?: TeamMemberType[]
  volunteers?: TeamMemberType[]
}
