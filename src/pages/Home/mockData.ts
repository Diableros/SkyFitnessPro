export type Course = {
	_id: string
	description: string
	directions: string[]
	fitting: string[]
	nameEN: string
	nameRU: string
	order: number
	workouts: string[]
}

export const mockData: Course[] = [
  {
    _id: "6i67sm",
    description: "направление фитнеса, основанное на наборе аэробных упражнений, выполняемых с помощью специальной ступеньки (степ-платформы). Данное направление было разработано в 1989 году Джиной Миллер: травмировав колено, она обратилась к различным методикам восстановления сустава, но наибольший эффект показали простые упражнения в виде шагов на молочном ящике. Впоследствии эти упражнения Миллер положила в основу целого комплекса, который и стал называться степ-аэробикой. Занятия степ-аэробикой состоят из комплексов в виде различного сочетания шагов, выполняемые под музыку с довольно высоким темпом. Каждое занятие длится от 30 до 50 минут в достаточно высоком темпе без остановок на отдых – для передышки используются переходы на простые шаги и наиболее простые упражнения. Такой режим тренировок приводит к эффективному сжиганию калорий, укреплению суставов и общему улучшению состояния здоровья, что и стало основой высокой популярности нового направления.",
    directions: [
      "Для начинающих",
      "Для похудения",
      "Для детей"
    ],
    fitting: [
      "Хотите укрепить дыхательную и сердечно-сосудистой системы",
      "Быстрый сбросить лишние килограммы",
      "Улучшить настроение, повысить жизненный тонус"
    ],
    nameEN: "StepAerobic",
    nameRU: "Степ-аэробика",
    order: 4,
    workouts: [
      "e9ghsb",
      "a1rqtt",
      "mstcbg",
      "t3cpno"
    ]
  },
  {
    _id: "ab1c3f",
    description: "это философия здорового образа жизни. Тот, кто занимается йогой, становится здоровее и выносливее, после занятий чувствует прилив сил, а также с новой силой может ощутить вкус к жизни.  Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.",
    directions: [
      "Йога для новичков",
      "Классическая йога",
      "Йогатерапия",
      "Кундалини-йога",
      "Хатха-йога",
      "Аштанга-йога"
    ],
    fitting: [
      "Давно хотели попробовать йогу, но не решались начать",
      "Хотите укрепить позвоночник, избавиться от болей в спине и суставах",
      "Ищете активность, полезную для тела и души"
    ],
    nameEN: "Yoga",
    nameRU: "Йога",
    order: 1,
    workouts: [
      "3yvozj",
      "hfgxlo",
      "kcx5ai",
      "kt6ah4",
      "mrhuag"
    ]
  },
  {
    _id: "kfpq8e",
    description: "это система упражнений, целью которых является разогрев и растяжка мышц и связок. При этом стретчинг – не просто комплекс упражнений для разминки перед тренировкой, а самостоятельное направление фитнеса, которое может использоваться как в комплексе с другими направлениями, так и самостоятельно. Стретчинг в домашних условиях может использоваться для многих целей: ● Выступает в качестве гимнастики в период восстановления после травм; ● Входит в состав программы для похудения; ● Помогает развить гибкость и пластичность, при правильном подходе вы сядете на шпагат через несколько недель; ● Это эффективный способ расслабиться после трудного дня.",
    directions: [
      "статический",
      "динамический",
      "пассивный",
      "активный"
    ],
    fitting: [
      "Улучшить осанку и координацию",
      "Хотите подтянуть тело, смоделировать мышечный корсет",
      "Улучшить кровообращение и обмен веществ"
    ],
    nameEN: "Stretching",
    nameRU: "Стретчинг",
    order: 2,
    workouts: [
      "9mefwq",
      "9yolz2",
      "pi5vtr"
    ]
  },
  {
    _id: "q02a6i",
    description: "BodyFlex – система, в которой особым образом сочетаются физические упражнения на укрепление и растяжку мышц, и дыхательная гимнастика. Такое сочетание приводит к ряду положительных эффектов, которые практически невозможно достичь с помощью других направлений фитнеса. Одна из самых интересных особенностей данной системы заключается в том, что это эффективный фитнес дома. Весь смысл бодифлекса сводится к правильному дыханию, благодаря которому упражнения на растяжку и укрепление мышц приобретают свою эффективность. При выдыхании воздуха и задержке дыхания организм на короткое время испытывает кислородное голодание, в крови накапливается углекислый газ, что приводит к запуску некоторых физиологических процессов, типичных для ситуации «бей или беги». То есть, организм приходит в состояние повышенной готовности и способен выполнять быстрые и энергичные действия.",
    directions: [
      "базовый",
      "продвинутый"
    ],
    fitting: [
      "Хотите укрепить легкие и снизить вероятность заболеваний дыхательной системы",
      "Улучшить пищеварение",
      "Ускорить метаболизм"
    ],
    nameEN: "BodyFlex",
    nameRU: "Бодифлекс",
    order: 5,
    workouts: [
      "xlpkqy",
      "17oz5f",
      "pyvaec"
    ]
  },
  {
    _id: "ypox9r",
    description: "Фитнес и танцы – что между ними общего? А то, что они могут великолепно сочетаться и оказывать просто восхитительный эффект на ваше тело! Объединение хореографии и аэробики – это необычно и интересно, именно так родился танцевальный фитнес, которым вы теперь можете заниматься дома. Достичь отличной формы и при этом получить удовольствие вам поможет видео для похудения, которое мы представляем на этой странице – делайте упражнения, танцуйте и чувствуйте, как ваше тело меняется в лучшую сторону!",
    directions: [
      "Зумба",
      "Dance-mix",
      "Caribbean-mix"
    ],
    fitting: [
      "Хотите укрепить мышцы, но тренировки в тренажерном зале для вас скучные и однообразные",
      "Хотите сбросить лишний вес, но нет желания мучать себя диетами",
      "Любите танцы и хотите совместить приятное с полезным."
    ],
    nameEN: "DanceFitness",
    nameRU: "Танцевальный фитнес",
    order: 3,
    workouts: [
      "gh7bd5",
      "hwsut5",
      "n18r8v",
      "dq9rzo",
      "rr70ie"
    ]
  }
]