/**
 * Валидатор номера телефона украинских операторов мобильной связи
 * @param {string} value
 * @returns {boolean}
 */
export default function phoneValidator(value) {
  const str = `${value}`;

  if (str === '') {
    return true;
  }

  return /^(\+38)?\s?0(50|63|66|67|68|73|91|92|93|94|95|96|97|98|99)\s?\d{3}\s?\d{2}\s?\d{2}$/.test(str);
}
