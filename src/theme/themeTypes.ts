type ColorType = {
  colors: {
    black: string
    white: string

    puprpleDark: string
    purpleNormal: string
    purpleMiddle: string
    purpleLight: string
    purpleBright: string
    purpleBrightDark: string

    saladNormal: string
    saladMiddle: string
    saladLight: string

    gray: string
    grayDark: string
    grayNormal: string
    grayLight: string

    progressBlue: string
    progressOrange: string
    progressPurple: string

    mint: string
    coral: string
  }
}

type FontSizeType = {
  fontSize: {
    s: string
    m: string
    l: string
    xl: string
    xxl: string
  }
}

export type ThemeType = ColorType & FontSizeType
