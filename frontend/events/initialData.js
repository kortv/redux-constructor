const initialData = {
  Values: {
    id: 4,
    type: 'Values',
    header: 'Наши ценности!',
    text: 'String',
    content: [{
      head: 'Chip Mayer',
      txt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ' +
        'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi ' +
        'beatae vitae dicta sunt explicabo.',
      icon: 'hazardous',
      iconList: false,
    }, {
      head: 'Chip Mayer',
      txt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ' +
        'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi ' +
        'beatae vitae dicta sunt explicabo.',
      icon: 'gears',
      iconList: false,
    }, {
      head: 'Chip Mayer',
      txt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ' +
        'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi ' +
        'beatae vitae dicta sunt explicabo.',
      icon: 'desktop',
      iconList: false,
    }, {
      head: 'Chip Mayer',
      txt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ' +
        'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi ' +
        'beatae vitae dicta sunt explicabo.',
      icon: 'strategy',
      iconList: false,
    }],
  },
  Header: {
    id: 1,
    type: 'Header',
    header: 'Заголовок',
    align: 'center',
    bg: 'img/hero12.jpg',
    text: 'String',
    content: [{
      name: 'one',
      link: '#',
    }, {
      name: 'two',
      link: '#',
    }, {
      name: 'three',
      link: '#',
    }],
  },
  About: {
    id: 1,
    type: 'Header',
    header: 'Заголовок',
    bg: 'img/hero12.jpg',
    text: '',
    content: [{
      name: 'One',
      number: '1',
    }, {
      name: 'Two',
      number: '2',
    }, {
      name: 'Three',
      number: '3',
    }],
  },
  TextComp: {
    id: 12,
    type: 'TextComp',
    header: 'Заголовок',
    text: 'Далеко-далеко за словесными горами в стране, ' +
      'гласных и согласных живут рыбные тексты. Запятой она, ' +
      'продолжил, страну семь пустился грустный семантика букв подзаголовок.',
    content: [],
  },
  Navbar: {
    id: 2,
    type: 'Navbar',
    content: [{
      name: 'one',
      link: '#',
    }, {
      name: 'two',
      link: '#',
    }, {
      name: 'thre',
      link: '#',
    }],
  },
  HistoryComp: {
    id: 5,
    type: 'HistoryComp',
    header: 'Заголовок',
    text: 'Наша компания появилась сравнительно недавно, но уже ' +
      'добилась выдающихся результатов. Мы хотели бы рассказать ' +
      'о ключевых этапах развития Company Name',
    content: [{
      year: 2006,
      head: 'Первые шаги',
      txt: 'За год компания выросла из небольшого бизнеса ' +
        'в крупное производство. Все дети Америки мечтали получить ' +
        'в подарок игрушку Company Name.',
      icon: 'telescope',
      iconList: false,
    }, {
      year: 2009,
      head: 'Заголовок2',
      txt: 'Летом 2011 года Company Name заключила договор ' +
        'с крупнейшим магазином игрушек Shameleys.',
      icon: 'global',
      iconList: false,
    }],
  },
  Team: {
    id: 7,
    type: 'Team',
    header: 'Заголовок',
    text: 'String',
    content: [{
      pic: 'img/team-small-1.png',
      name: 'Имя Фамилия',
      place: 'String',
      txt: 'Lorem ipsum dolor sit amet.',
    }, {
      pic: 'img/team-small-1.png',
      name: 'Имя Фамилия',
      place: 'String',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, natus.',
    }, {
      pic: 'img/team-small-1.png',
      name: 'Имя Фамилия',
      place: 'String',
      txt: 'bla bla bla',
    }],
  },
  Galery: {
    id: 8,
    type: 'Galery',
    header: 'Так мы работаем',
    text: 'Никакие глобальные вещи не создаются в одиночку. А все вместе, ' +
    'командой, мы можем создать что-то большое. Мы усердно работаем, много ' +
    'смеемся, постоянно обсуждаем новые идеи и у нас отлично это получается вместе!',
    content: [{
      pic: 'img/side1.jpg',
      width: 8,
    }, {
      pic: 'img/side2.jpg',
      width: 4,
    }, {
      pic: 'img/side3.jpg',
      width: 4,
    }, {
      pic: 'img/hero4.jpg',
      width: 4,
    }, {
      pic: 'img/hero3.jpg',
      width: 4,
    }],
  },
  Video: {
    id: 9,
    type: 'Video',
    header: 'Познакомьтесь с нашим CEO!',
    text: 'В этот блок вы можете загрузить видео' +
      'с youtube или vimeo. Для этого просто добавьте ссылку на вашу видеозапись.',
    content: [
      { videoLink: 'http://www.youtube.com/embed/SZEflIVnhH8' },
    ],
  },
  Social: {
    id: 11,
    type: 'Social',
    header: 'Заголовок',
    text: 'String',
    content: [{
      twitter: 'https://twitter.com/TheEllenShow',
      fb: 'https://www.facebook.com/webstandardsru/',
      vk: 'http://vk.com/it_joke',
    }],
  },
};
export default initialData;
