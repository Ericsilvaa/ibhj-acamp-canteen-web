export type OperatingDaysType =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

export interface OperatingHoursType {
  start: string // Horário de início (formato HH:mm)
  end: string // Horário de término (formato HH:mm)
  days: OperatingDaysType[]
}
