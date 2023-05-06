// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  adress: 'м. Одеса, вул. Дерибасівська 5',
}
var footer = {
  social: {
    email: {
      text: 'ivanoc@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: (text = 'Summary'),
        text: (text =
          'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.'),
      },

      experience: {
        title: (text = 'Other experience'),
        text: 'Pet project for parsing sport betting data from different platforms (odds) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlbars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Футбол',
          isMain: true,
        },
        {
          name: 'Книжки',
          isMain: true,
        },
        {
          name: 'Спорт',
          isMain: false,
        },
      ],
    },

    footer,
    // ↙ сюди вводимо JSON дані
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      education: [
        {
          name: 'Садок',
          isEnd: true,
        },
        {
          name: 'Школа',
          isEnd: true,
        },
        {
          name: 'Університет',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Один',
          id: 1,
        },
        {
          name: 'Два',
          id: 2,
        },
        {
          name: 'Три',
          id: 3,
        },
      ],
    },

    footer,
    // ↙ сюди вводимо JSON дані
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      work: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about: 'hcoahoauqu',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: 'dfjodsjfofo',
                },
                {
                  name: 'ewrqtqwrqwro',
                },
              ],
              stackAmount: 5,
              awardAmount: 3,
            },
          ],
        },
      ],
    },

    footer,
    // ↙ сюди вводимо JSON дані
  })
})
// Підключаємо роутер до бек-енду
salary: module.exports = router
