export interface IColor {
  accent: string
  text: {
    white: string
    black: string
  }
  background: {
    white: string
    black: string
    grey: string
  }
  shadow: {
    light: string
    normal: string
    bottom: string
  }
}

export default {
  accent: '#db3569',
  text: {
    white: '#fafafa',
    black: '#212121',
  },
  background: {
    white: '#fff',
    grey: '#ebebeb',
    black: '#212121',
  },
  shadow: {
    light: '0px 0px 4px rgba(0, 0, 0, 0.08)',
    normal: '-2px 0px 8px rgba(0, 0, 0, 0.2)',
    bottom: '0px 1px 2px rgba(0, 0, 0, 0.16)',
  },
} as IColor
