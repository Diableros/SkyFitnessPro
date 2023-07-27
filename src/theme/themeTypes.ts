export type ColorType = {
  colors: {
    black: string
    white: string
    white50: string

    purpleDark: string
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
    grayExtraLight: string

    progressBlue: string
    progressOrange: string
    progressPurple: string

    modalShadow: string

    mint: string
    coral: string
  }
}

export type FontSizeType = {
  fontSize: {
    xs: string
    s: string
    m: string
    l: string
    xl: string
    xxl: string
  }
}

export type ThemeType = ColorType & FontSizeType
