export interface ISpaces {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
}

const spaces = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 64,
}

const spacesWithPx = Object.entries(spaces).reduce(
  (acc, [key, val]) => ({
    ...acc,
    [key]: `${val}px`,
  }),
  {}
)

export default {
  ...spacesWithPx,
} as ISpaces
