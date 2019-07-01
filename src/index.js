import * as bitwise from './bitwise';
import {
  ipToBinaryStringRaw,
  binaryStringToIpRaw,
  binaryStringToIpAsArrayRaw,

  maskToBinaryStringRaw,

  ipToNumberRaw,
  ipNumberToIpRaw,
} from './utils';

import {
  decorate,
  validateNetworkAddressDecorator,
  validateMaskDecorator,
} from './decorators';

const getNetworkFirstIpAsArrayRaw = (network) => {
  const [ ip, mask ] = network.split('/');
  return binaryStringToIpAsArrayRaw(bitwise.and(ipToBinaryStringRaw(ip), maskToBinaryStringRaw(mask)));
};

const getNetworkFirstIpRaw = (network) => {
  const [ ip, mask ] = network.split('/');
  return binaryStringToIpRaw(bitwise.and(ipToBinaryStringRaw(ip), maskToBinaryStringRaw(mask)));
};

const getNetworkBroadcastIpAsArrayRaw = (network) => {
  const [ ip, mask ] = network.split('/');
  return binaryStringToIpAsArrayRaw(bitwise.or(ipToBinaryStringRaw(ip), bitwise.not(maskToBinaryStringRaw(mask))));
};

const getNetworkBroadcastIpRaw = (network) => {
  const [ ip, mask ] = network.split('/');
  return binaryStringToIpRaw(bitwise.or(ipToBinaryStringRaw(ip), bitwise.not(maskToBinaryStringRaw(mask))));
};


const getNetworkIpsQuantityByMaskRaw = (mask) => {
  return Math.pow(2, 32 - mask);
};

const getNetworkIpsQuantityRaw = (network) => {
  const [ ip, mask ] = network.split('/'); // eslint-disable-line no-unused-vars

  return getNetworkIpsQuantityByMask(mask);
};

const getNetworkIpsRaw = (network) => {
  const result = [];
  const first = ipToNumberRaw(getNetworkFirstIp(network));
  const last = ipToNumberRaw(getNetworkBroadcastIp(network));

  for (let i = first; i <= last; i++) {
    result.push(ipNumberToIpRaw(i));
  }

  return result;
};

export const getNetworkFirstIp = decorate(getNetworkFirstIpRaw, validateNetworkAddressDecorator);
export const getNetworkFirstIpAsArray = decorate(getNetworkFirstIpAsArrayRaw, validateNetworkAddressDecorator);

export const getNetworkBroadcastIp = decorate(getNetworkBroadcastIpRaw, validateNetworkAddressDecorator);
export const getNetworkBroadcastIpAsArray = decorate(getNetworkBroadcastIpAsArrayRaw, validateNetworkAddressDecorator);

export const getNetworkIpsQuantityByMask = decorate(getNetworkIpsQuantityByMaskRaw, validateMaskDecorator);
export const getNetworkIpsQuantity = decorate(getNetworkIpsQuantityRaw, validateNetworkAddressDecorator);
export const getNetworkIps = decorate(getNetworkIpsRaw, validateNetworkAddressDecorator);
