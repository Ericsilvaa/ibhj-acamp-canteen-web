import React from 'react'

export interface CustomSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  value: string
  options: { value: string; label: string }[]
}
