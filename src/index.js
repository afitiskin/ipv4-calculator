import * as bitwise from './bitwise';
import {
  ipToBinaryString,
  binaryStringToIp,

  maskToBinaryString,

  ipToNumber,
  ipNumberToIp,
} from './utils';

import {
  decorate,
  validateNetworkAddressDecorator
} from './decorators';


export const getNetworkFirstIp = decorate(network => {
  const [ ip, mask ] = network.split('/');

  return binaryStringToIp(bitwise.and(ipToBinaryString(ip), maskToBinaryString(mask)));
}, validateNetworkAddressDecorator);

export const getNetworkBroadcastIp = decorate(network => {
  const [ ip, mask ] = network.split('/');

  return binaryStringToIp(bitwise.or(ipToBinaryString(ip), bitwise.not(maskToBinaryString(mask))));
}, validateNetworkAddressDecorator);

export const getNetworkIps = decorate(network => {
  const result = [];

  for (let i = ipToNumber(getNetworkFirstIp(network)); i <= ipToNumber(getNetworkBroadcastIp(network)); i++) {
    result.push(ipNumberToIp(i));
  }

  return result;
}, validateNetworkAddressDecorator);
