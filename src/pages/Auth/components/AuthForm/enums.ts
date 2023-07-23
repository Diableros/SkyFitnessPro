export enum FieldsList {
  Email = 'email',
  Password = 'password',
  PasswordConfirm = 'passwordConfirm',
}

export enum FieldPlaceholderText {
  Email = 'e-mail',
  Password = 'Пароль',
  PasswordConfirm = 'Повторите пароль',
}

export enum FieldInputLength {
  EmailMinLength = '6',
  EmailMaxLength = '30',

  PasswordMinLength = '8',
  PasswordMaxLength = '20',
}

export enum FieldErrorText {
  ShortEmail = 'Слишком короткий адрес',
  LongEmail = 'Слишком длинный адрес',

  ShortPassword = 'Слишком короткий пароль',
  LongPassword = 'Слишком длинный пароль',

  MismatchPasswords = 'Пароли не совпадают',

  Required = 'Поле обязательно для заполнения',

  UserNotFound = 'Не верный пользователь или пароль',

  UnknownError = 'Неизвесная ошибка',
  SignUpFiled = 'Регистрация не пройдена',
}

export enum ButtonTitle {
  SignUpLoader = 'Отправка данных...',
  SignUpTitle = 'Зарегистрироваться',

  LoginLoader = 'Логинимся',
  LoginTitle = 'Войти',
}
