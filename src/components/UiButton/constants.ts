import { theme } from '@/theme/constants'
import { ButtonSize, ButtonState, ButtonTheme } from './enums'

export const buttonPalette = {
  [ButtonTheme.Purple]: {
    [ButtonState.Regular]: theme.colors.purpleDark,
    [ButtonState.Hover]: theme.colors.purpleMiddle,
    [ButtonState.Active]: theme.colors.purpleLight,
    [ButtonState.TextColor]: theme.colors.white,
  },
  [ButtonTheme.PurpleBright]: {
    [ButtonState.Regular]: theme.colors.purpleBright,
    [ButtonState.Hover]: theme.colors.purpleBrightDark,
    [ButtonState.Active]: theme.colors.purpleNormal,
    [ButtonState.TextColor]: theme.colors.white,
  },
  [ButtonTheme.Salad]: {
    [ButtonState.Regular]: theme.colors.saladNormal,
    [ButtonState.Hover]: theme.colors.saladMiddle,
    [ButtonState.Active]: theme.colors.saladLight,
    [ButtonState.TextColor]: theme.colors.black,
  },
  [ButtonTheme.White]: {
    [ButtonState.Regular]: theme.colors.white,
    [ButtonState.Hover]: theme.colors.grayLight,
    [ButtonState.Active]: theme.colors.grayNormal,
    [ButtonState.TextColor]: theme.colors.black,
  },
}

export const buttonSize = {
  [ButtonSize.S]: {
    padding: '5px 1rem 9px',
    minWidth: 'auto',
  },
  [ButtonSize.M]: {
    padding: '7px 1.5rem 9px',
    minWidth: 'auto',
  },
  [ButtonSize.L]: {
    padding: '12px 1rem 16px',
    minWidth: '17rem',
  },
}
