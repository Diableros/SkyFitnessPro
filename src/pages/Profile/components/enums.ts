
export enum InputName {
    Password = 'password',
    PasswordRepeat = 'passwordRepeat',
}

export enum InputErrorText {
    Short = 'Пароль должен содержать более 8 знаков',
    Long = 'Пароль должен содержать менее 20 знаков',

    Mismatch = 'Пароли не совпадают. Попробуйте ещё раз.'
}
