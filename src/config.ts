import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

export default {
  map: "https://yandex.ru/map-widget/v1/?um=constructor%3A2ad08e0e1b8345abd7c4142850047fca2852c71da0df4591b93fa7986f20e0c4&amp;source=constructor",
  phoneMask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
  licenseMask: [/\d/, /\d/, /[а-яА-Яa-zA-Z]/, /[а-яА-Яa-zA-Z]/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  datePipe: createAutoCorrectedDatePipe('dd.mm.yyyy'),
  dateMask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/],
  yearMask: [/\d/, /\d/, /\d/, /\d/],
  regNoMask: [/[а-яА-Яa-zA-Z]/, /\d/, /\d/, /\d/, /[а-яА-Яa-zA-Z]/, /[а-яА-Яa-zA-Z]/, /\d/, /\d/, /\d/],
  sheetUrl: "https://script.google.com/macros/s/AKfycby3wNX6c6ZX9n35JqBdQZyc9s5WCCWC-KRkgcH52oLhF757pddR/exec",
}
