import {
  decorate,
  normalizeBinaryStrings,
} from './decorators';

export const and = decorate((a, b) => {
  let result = '';

  for (let i = 0; i < a.length; i++) {
    result += (a[i] || 0) & (b[i] || 0);
  }

  return result;
}, normalizeBinaryStrings);

export const or = decorate((a, b) => {
  let result = '';

  for (let i = 0; i < a.length; i++) {
    result += (a[i] || 0) | (b[i] || 0);
  }

  return result;
}, normalizeBinaryStrings);

export const xor = decorate((a, b) => {
  let result = '';

  for (let i = 0; i < a.length; i++) {
    result += (a[i] || 0) ^ (b[i] || 0);
  }

  return result;
}, normalizeBinaryStrings);

export const not = (a) => {
  let result = '';

  for (let i = 0; i < a.length; i++) {
    result += (a[i] == '1' ? '0' : '1');
  }

  return result;
};
