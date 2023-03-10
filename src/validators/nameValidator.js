/**
 * Валидатор для имени, строка может содержать только буквы, пробелы и символы '- внутри слов
 * @param {string} value
 * @returns {boolean}
 */
export default function nameValidator(value) {
  if (typeof value === 'undefined') {
    return true;
  }

  const str = `${value}`;

  if (str === '') {
    return true;
  }

  return /^[а-яА-ЯіІїЇЄєёЁ]+(?:[-'|\u2018\u2019\s][a-zA-Zа-яА-ЯіІїЇЄєёЁ]+)*$/i.test(str);
}
