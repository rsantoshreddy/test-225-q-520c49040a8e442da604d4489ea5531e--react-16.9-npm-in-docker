import * as validators from './validators';

export const validate = (elements) => {
  let isValid = false;
  for (let index = 0; index < elements.length; index++) {
    const { validation, value, type } = elements[index];
    if (type !== 'button') {
      const { method, valueInList } = validation;
      if (method) {
        isValid = validators[method](value);
      }
      if (isValid && valueInList && valueInList.length) {
        isValid = valueInList.includes(value);
      }
      if (!isValid) {
        break;
      }
    }
  }

  return isValid;
};
