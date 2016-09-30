import leftPad from 'left-pad';

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
  return leftPad(parseInt(byte, DECIMAL_BASE).toString(BINARY_BASE), length, '0');
};

export const binaryStringToNumber = (binaryString) => {
  return parseInt(binaryString, BINARY_BASE);
};

export const ipToBinaryString = decorate(ip => {
  return (ip + '').split('.').map(byte => numberToBinaryString(byte, 8)).join('');
}, validateIpDecorator);

export const ipToNumber = decorate(ip => {
  return binaryStringToNumber(ipToBinaryString(ip));
}, validateIpDecorator);

export const binaryStringToIp = decorate(binaryString => {
  return (binaryString + '').match(/[0,1]{8}/g).map(binaryStringToNumber).join('.');
}, validateBinaryStringDecorator);

export const ipNumberToIp = decorate(ipNumber => {
  return binaryStringToIp(ipNumberToBinaryString(ipNumber));
}, validateIpNumberDecorator);

export const ipNumberToBinaryString = decorate(ipNumber => {
  return numberToBinaryString(ipNumber, 32);
}, validateIpNumberDecorator);

export const maskToBinaryString = decorate(mask => {
  const parsedMask = parseInt(mask, DECIMAL_BASE);
  return '1'.repeat(parsedMask) + '0'.repeat(32 - parsedMask);
}, validateMaskDecorator);

export const binaryStringToMask = decorate(binaryString => {
  return binaryString.replace(/[0]/g, '').length;
}, validateBinaryStringDecorator);
