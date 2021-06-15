import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

const vinSymbol = /[0-9ABCDEFGHJKLMNPRSTUVWXYZabcdefghjklmnprstuvwxyz]/;

export default {
  map: "https://www.google.com/maps/d/embed?mid=1p9qMxxjO5xPpQX64KjiqyB2b1splxMRR&hl=ru&z=14",
  phoneMask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
  licenseMask: [/\d/, /\d/, /[а-яА-Яa-zA-Z0-9]/, /[а-яА-Яa-zA-Z0-9]/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  datePipe: createAutoCorrectedDatePipe('dd.mm.yyyy'),
  dateMask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/],
  yearMask: [/\d/, /\d/, /\d/, /\d/],
  regNoMask: [/[а-яА-Яa-zA-Z]/, /\d/, /\d/, /\d/, /[а-яА-Яa-zA-Z]/, /[а-яА-Яa-zA-Z]/, ' ', /\d/, /\d/, /\d/],
  vinMask: new Array(17).fill(vinSymbol),
  stsMask: [/\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  sheetUrl: "https://script.google.com/macros/s/AKfycbyCt9wT2fqVlpO7jQ9fwqxKfZHtN4yIkoZGRBJkiQIMeAbHbU8oNlka6lETgnTgHVQ3mQ/exec",
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
