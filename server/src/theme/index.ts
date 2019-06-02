import color, { IColor } from './color'
import space, { ISpaces } from './space'

interface ITheme {
  color: IColor
  space: ISpaces
}

const Theme: ITheme = {
  color,
  space,
}

export default Theme
