import {
  MIN_MASK_VALUE,
  MAX_MASK_VALUE,

  MIN_IP_NUMBER,
  MAX_IP_NUMBER,
} from './constants';

import {
  isMaskValid,
  isIpValid,
  isNetworkValid,
  isBinaryStringValid,
  isBinaryMaskValid,
  isIpNumberValid,
} from './validators';

export const decorate = (fn, decorator) => decorator(fn);

export const validateMaskDecorator = fn => mask => {
  if (!isMaskValid(mask)) {
    throw new Error(`Network mask is invalid. Should be a number between ${MIN_MASK_VALUE} and ${MAX_MASK_VALUE}, ${mask} given`);
  }

  return fn(mask);
};

export const validateIpDecorator = fn => ip => {
  if (!isIpValid(ip)) {
    throw new Error(`IP address "${ip}" is invalid. Should be IPv4 address in format xxx.xxx.xxx.xxx`);
  }

  return fn(ip);
};

export const validateNetworkAddressDecorator = fn => networkAddress => {
  if (!isNetworkValid(networkAddress)) {
    throw new Error(`Network address "${networkAddress}" is invalid. Should be IPv4 network address in format xxx.xxx.xxx.xxx/yy`);
  }

  return fn(networkAddress);
};

export const validateBinaryStringDecorator = fn => binaryString => {
  if (!isBinaryStringValid(binaryString)) {
    throw new Error(`Invalid binary string. Should be a string that contains only "0" and "1" with length of 32`);
  }

  return fn(binaryString);
};

export const validateBinaryMaskDecorator = fn => binaryMask => {
  if (!isBinaryMaskValid(binaryMask)) {
    throw new Error(`Invalid binary mask. Should be a valid binary representation of network mask`);
  }

  return fn(binaryMask);
};

export const validateIpNumberDecorator = fn => ipNumber => {
  if (!isIpNumberValid(ipNumber)) {
    throw new Error(`IP number "${ipNumber}" is invalid. Should be number between ${MIN_IP_NUMBER} and ${MAX_IP_NUMBER}, ${ipNumber} given.`);
  }

  return fn(ipNumber);
};

export const normalizeBinaryStrings = fn => (a, b) => {
  const length = Math.max(a.length, b.length);
  const aNormal = ['0'.repeat(length - a.length), a].join('');
  const bNormal = ['0'.repeat(length - b.length), b].join('');
  return fn(aNormal, bNormal);
};
