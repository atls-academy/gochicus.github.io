export interface Row {
  system?: {
    boxSizing: boolean
    overflowX: boolean
    overflowY: boolean
  }
  layout?: string
  space?: string
  color?: string
  boxShadow?: string
  boxSizing?: string
  position?: string
  border?: string
  display?: string
  justifyContent?: string
  alignItems?: string
  minWidth?: string
  flexBasis?: string
}

export interface RowType {
  width: string
  display: string
  flexDirection?: string
}
export interface LayoutType {
  display?: string
  margin?: string
  maxWidth?: string
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
}