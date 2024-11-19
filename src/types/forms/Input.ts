import React from 'react'

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string
}
