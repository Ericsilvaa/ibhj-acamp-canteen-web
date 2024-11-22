export type MenuItemType = {
  icon: React.ElementType
  label: string
  href: (id: string) => string
  tooltip?: string
}
