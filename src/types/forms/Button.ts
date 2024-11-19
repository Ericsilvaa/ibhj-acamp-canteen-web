import React from 'react'

export type VariantButton = 'primary' | 'secondary' | 'outline'

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantButton
  loading?: boolean
  icon?: React.ReactNode
  title: string
}
