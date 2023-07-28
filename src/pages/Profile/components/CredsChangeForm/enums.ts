
export enum InputName {
    Password = 'password',
    PasswordRepeat = 'passwordRepeat',
    Login = 'login',
}

export enum InputErrorText {
    ShortPassword = 'Пароль должен содержать более 8 знаков',
    LongPassword = 'Пароль должен содержать менее 20 знаков',

    Mismatch = 'Пароли не совпадают. Попробуйте ещё раз.',

    ShortLogin = 'Логин должен содержать более 3 знаков',
    LongLogin = 'Логин должен содержать менее 10 знаков',
}

export enum InputType {
    Password = 'Password',
    Login = 'Login',
}