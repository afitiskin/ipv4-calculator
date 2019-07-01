import { expect } from 'chai';

import {
  numberToBinaryString,
  binaryStringToNumber,

  ipToBinaryString,
  binaryStringToIp,

  ipToNumber,
  ipNumberToIp,

  ipNumberToBinaryString,
  maskToBinaryString,
  binaryStringToMask,
} from '../src/utils';

describe('Utils', () => {
  describe('number to binary string', () => {
    it('should be a function', () => {
      expect(numberToBinaryString).to.be.a('function');
    });

    it('should convert any number into binary representation', () => {
      expect(numberToBinaryString(0)).to.equal('0');
      expect(numberToBinaryString(2)).to.equal('10');
      expect(numberToBinaryString(9)).to.equal('1001');

      expect(numberToBinaryString(0, 3)).to.equal('000');
      expect(numberToBinaryString(2, 5)).to.equal('00010');
      expect(numberToBinaryString(9, 1)).to.equal('1001');
    });
  });

  describe('binary string to number', () => {
    it('should be a function', () => {
      expect(binaryStringToNumber).to.be.a('function');
    });

    it('should convert any binary string to number', () => {
      expect(binaryStringToNumber('000')).to.equal(0);
      expect(binaryStringToNumber('10')).to.equal(2);
      expect(binaryStringToNumber('1001')).to.equal(9);
    });
  });

  describe('IP to binary string', () => {
    it('should be a function', () => {
      expect(ipToBinaryString).to.be.a('function');
    });

    it('should throw error if IP is invalid', () => {
      expect(ipToBinaryString.bind(null, '256.256.256.256')).to.throw(Error);
    });

    it('should convert IP address into binary string', () => {
      expect(ipToBinaryString('0.0.0.0')).to.equal('00000000000000000000000000000000');
      expect(ipToBinaryString('192.168.0.29')).to.equal('11000000101010000000000000011101');
      expect(ipToBinaryString('255.255.255.255')).to.equal('11111111111111111111111111111111');
    });
  });

  describe('binary string to IP', () => {
    it('should be a function', () => {
      expect(binaryStringToIp).to.be.a('function');
    });

    it('should throw error if binary string is invalid', () => {
      expect(binaryStringToIp.bind(null, '20000000000000000000000000000000')).to.throw(Error);
    });

    it('should convert binary string to IP string', () => {
      expect(binaryStringToIp('00000000000000000000000000000000')).to.equal('0.0.0.0');
      expect(binaryStringToIp('11000000101010000000000000011101')).to.equal('192.168.0.29');
      expect(binaryStringToIp('11111111111111111111111111111111')).to.equal('255.255.255.255');
    });
  });

  describe('IP to number', () => {
    it('should be a function', () => {
      expect(ipToNumber).to.be.a('function');
    });

    it('should throw error if IP is invalid', () => {
      expect(ipToNumber.bind(null, '256.256.256.256')).to.throw(Error);
    });

    it('should convert IP string to IP number', () => {
      expect(ipToNumber('0.0.0.0')).to.equal(0);
      expect(ipToNumber('192.168.0.29')).to.equal(3232235549);
      expect(ipToNumber('255.255.255.255')).to.equal(4294967295);
    });
  });

  describe('IP number to IP', () => {
    it('should be a function', () => {
      expect(ipNumberToIp).to.be.a('function');
    });

    it('should throw error if IP number is invalid', () => {
      expect(ipNumberToIp.bind(null, -1)).to.throw(Error);
    });

    it('should convert IP number to IP string', () => {
      expect(ipNumberToIp(0)).to.equal('0.0.0.0');
      expect(ipNumberToIp(3232235549)).to.equal('192.168.0.29');
      expect(ipNumberToIp(4294967295)).to.equal('255.255.255.255');
    });
  });

  describe('IP number to binary string', () => {
    it('should be a function', () => {
      expect(ipNumberToBinaryString).to.be.a('function');
    });

    it('should throw error if IP number is invalid', () => {
      expect(ipNumberToBinaryString.bind(null, -1)).to.throw(Error);
    });

    it('should convert IP number to binary string', () => {
      expect(ipNumberToBinaryString(0)).to.equal('00000000000000000000000000000000');
      expect(ipNumberToBinaryString(3232235549)).to.equal('11000000101010000000000000011101');
      expect(ipNumberToBinaryString(4294967295)).to.equal('11111111111111111111111111111111');
    });
  });

  describe('mask to binary string', () => {
    it('should be a function', () => {
      expect(maskToBinaryString).to.be.a('function');
    });

    it('should throw error if mask is invalid', () => {
      expect(maskToBinaryString.bind(null, -1)).to.throw(Error);
    });

    it('should convert mask to binary string', () => {
      expect(maskToBinaryString(0)).to.equal('00000000000000000000000000000000');
      expect(maskToBinaryString(16)).to.equal('11111111111111110000000000000000');
      expect(maskToBinaryString(32)).to.equal('11111111111111111111111111111111');
    });
  });

  describe('binary string to mask', () => {
    it('should be a function', () => {
      expect(binaryStringToMask).to.be.a('function');
    });

    it('should throw error if binary string is invalid', () => {
      expect(binaryStringToMask.bind(null, '')).to.throw(Error);
    });

    it('should convert binary string into mask', () => {
      expect(binaryStringToMask('00000000000000000000000000000000')).to.equal(0);
      expect(binaryStringToMask('11111111111111110000000000000000')).to.equal(16);
      expect(binaryStringToMask('11111111111111111111111111111111')).to.equal(32);
    });
  });
});
