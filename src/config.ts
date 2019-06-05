import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

export default {
  map: "https://yandex.ru/map-widget/v1/?um=constructor%3A2ad08e0e1b8345abd7c4142850047fca2852c71da0df4591b93fa7986f20e0c4&amp;source=constructor",
  phoneMask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
  licenseMask: [/\d/, /\d/, /[а-яА-Яa-zA-Z]/, /[а-яА-Яa-zA-Z]/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  datePipe: createAutoCorrectedDatePipe('dd.mm.yyyy'),
  dateMask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/],
  yearMask: [/\d/, /\d/, /\d/, /\d/],
  regNoMask: [/[а-яА-Яa-zA-Z]/, /\d/, /\d/, /\d/, /[а-яА-Яa-zA-Z]/, /[а-яА-Яa-zA-Z]/, ' ', /\d/, /\d/, /\d/],
  sheetUrl: "https://script.google.com/macros/s/AKfycbzqvtwrV9YhI2v835a571-S0FJiMYUuBpfovfCV6oRooEniIAKv/exec",
  viberUrl: "https://chatapi.viber.com/pa/post",
  viberToken: "49c89d39cd67d3c7-30d035d370be9de0-c4a52f4c8bf66181",
  towns: [
    "Санкт-Петербург",
    "Калининград",
    "Мурманск",
    "Петрозаводск",
    "Сыктывкар",
    "В.Новгород",
    "Ломоносов",
    "Петергоф",
    "Кр Село",
    "Иркутск",
    "Владивосток",
    "Хабаровск"
  ]
}
