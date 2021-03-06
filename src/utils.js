import {
  DECIMAL_BASE,
  BINARY_BASE,
} from './constants';

import {
  decorate,

  validateIpDecorator,
  validateIpNumberDecorator,
  validateBinaryStringDecorator,
  validateMaskDecorator,
} from './decorators';

export const numberToBinaryString = (byte, length) => {
  const string = parseInt(byte, DECIMAL_BASE).toString(BINARY_BASE);
  return length > string.length ? ['0'.repeat(length - string.length), string].join('') : string;
};

export const binaryStringToNumber = (binaryString) => {
  return parseInt(binaryString, BINARY_BASE);
};

export const ipToBinaryStringRaw = (ip) => {
  return (ip + '').split('.').map(byte => numberToBinaryString(byte, 8)).join('');
};

export const ipToNumberRaw = (ip) => {
  return binaryStringToNumber(ipToBinaryString(ip));
};

export const binaryStringToIpAsArrayRaw = (binaryString) => {
  return (binaryString + '').match(/[0,1]{8}/g).map(binaryStringToNumber);
};

export const binaryStringToIpRaw = (binaryString) => {
  return binaryStringToIpAsArrayRaw(binaryString).join('.');
};

export const ipNumberToIpAsArrayRaw = (ipNumber) => {
  return binaryStringToIpAsArrayRaw(ipNumberToBinaryStringRaw(ipNumber));
};

export const ipNumberToIpRaw = (ipNumber) => {
  return binaryStringToIpRaw(ipNumberToBinaryStringRaw(ipNumber));
};

export const ipNumberToBinaryStringRaw = (ipNumber) => {
  return numberToBinaryString(ipNumber, 32);
};

export const maskToBinaryStringRaw = (mask) => {
  const parsedMask = parseInt(mask, DECIMAL_BASE);
  return '1'.repeat(parsedMask) + '0'.repeat(32 - parsedMask);
};

export const binaryStringToMaskRaw = (binaryString) => {
  return binaryString.replace(/[0]/g, '').length;
};

export const ipToBinaryString = decorate(ipToBinaryStringRaw, validateIpDecorator);
export const ipToNumber = decorate(ipToNumberRaw, validateIpDecorator);
export const binaryStringToIp = decorate(binaryStringToIpRaw, validateBinaryStringDecorator);
export const binaryStringToIpAsArray = decorate(binaryStringToIpAsArrayRaw, validateBinaryStringDecorator);
export const ipNumberToIp = decorate(ipNumberToIpRaw, validateIpNumberDecorator);
export const ipNumberToIpAsArray = decorate(ipNumberToIpAsArrayRaw, validateIpNumberDecorator);
export const ipNumberToBinaryString = decorate(ipNumberToBinaryStringRaw, validateIpNumberDecorator);
export const maskToBinaryString = decorate(maskToBinaryStringRaw, validateMaskDecorator);
export const binaryStringToMask = decorate(binaryStringToMaskRaw, validateBinaryStringDecorator);
