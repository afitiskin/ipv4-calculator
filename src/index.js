import * as bitwise from './bitwise';
import {
  ipToBinaryStringRaw,
  binaryStringToIpRaw,

  maskToBinaryStringRaw,

  ipToNumberRaw,
  ipNumberToIpRaw,
} from './utils';

import {
  decorate,
  validateNetworkAddressDecorator,
  validateMaskDecorator,
} from './decorators';


export const getNetworkFirstIp = decorate((network) => {
  const [ ip, mask ] = network.split('/');

  return binaryStringToIpRaw(bitwise.and(ipToBinaryStringRaw(ip), maskToBinaryStringRaw(mask)));
}, validateNetworkAddressDecorator);

export const getNetworkBroadcastIp = decorate((network) => {
  const [ ip, mask ] = network.split('/');

  return binaryStringToIpRaw(bitwise.or(ipToBinaryStringRaw(ip), bitwise.not(maskToBinaryStringRaw(mask))));
}, validateNetworkAddressDecorator);

export const getNetworkIpsQuantityByMask = decorate((mask) => {
  return Math.pow(2, 32 - mask);
}, validateMaskDecorator);

export const getNetworkIpsQuantity = decorate((network) => {
  const [ ip, mask ] = network.split('/'); // eslint-disable-line no-unused-vars

  return getNetworkIpsQuantityByMask(mask);
}, validateNetworkAddressDecorator);

export const getNetworkIps = decorate((network) => {
  const result = [];

  for (let i = ipToNumberRaw(getNetworkFirstIp(network)); i <= ipToNumberRaw(getNetworkBroadcastIp(network)); i++) {
    result.push(ipNumberToIpRaw(i));
  }

  return result;
}, validateNetworkAddressDecorator);
