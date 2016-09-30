import {
  DECIMAL_BASE,

  IP_BYTES_COUNT,
  MIN_IP_BYTE_VALUE,
  MAX_IP_BYTE_VALUE,

  MIN_IP_NUMBER,
  MAX_IP_NUMBER,

  MIN_MASK_VALUE,
  MAX_MASK_VALUE,
} from './constants';

export function isNetworkValid(networkAddress) {
  const [ ip, mask, ...rest ] = (networkAddress + '').split('/');
  return rest.length === 0 && isIpValid(ip) && isMaskValid(mask);
}

export function isIpValid(ip) {
  const parsedIp = (ip + '').split('.').map(byte => parseInt(byte, DECIMAL_BASE));
  return (parsedIp.length === IP_BYTES_COUNT) && parsedIp.every(byte => !isNaN(byte) && byte >= MIN_IP_BYTE_VALUE && byte <= MAX_IP_BYTE_VALUE);
}

export function isMaskValid(mask) {
  const parsedMask = parseInt(mask, DECIMAL_BASE);
  return !isNaN(parsedMask) && parsedMask >= MIN_MASK_VALUE && parsedMask <= MAX_MASK_VALUE;
}

export function isBinaryStringValid(binaryString) {
  return /^[0,1]{32}$/.test(binaryString + '');
}

export function isBinaryMaskValid(binaryMask) {
  return isBinaryStringValid(binaryMask) && /^[1]*[0]*$/.test(binaryMask + '');
}

export function isIpNumberValid(ipNumber) {
  const parsedIpNumber = parseInt(ipNumber, DECIMAL_BASE);
  return !isNaN(parsedIpNumber) && parsedIpNumber >= MIN_IP_NUMBER && parsedIpNumber <= MAX_IP_NUMBER;
}
