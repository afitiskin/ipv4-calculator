import 'babel-polyfill';
import { expect } from 'chai';

import {
  isMaskValid,
  isIpValid,
  isNetworkValid,
  isBinaryStringValid,
  isBinaryMaskValid,
  isIpNumberValid,
} from '../src/validators';

describe('Validator', () => {
  describe('is mask valid', () => {
    it('should be a function', () => {
      expect(isMaskValid).to.be.a('function');
    });

    it('should return true if mask valid', () => {
      expect(isMaskValid(0)).to.be.true;
      expect(isMaskValid(15)).to.be.true;
      expect(isMaskValid(32)).to.be.true;
    });

    it('should return false if mask invalid', () => {
      expect(isMaskValid()).to.be.false;
      expect(isMaskValid(-1)).to.be.false;
      expect(isMaskValid(33)).to.be.false;
    });
  });

  describe('is network valid', () => {
    it('should be a function', () => {
      expect(isNetworkValid).to.be.a('function');
    });

    it('should return true if network valid', () => {
      expect(isNetworkValid('0.0.0.0/0')).to.be.true;
      expect(isNetworkValid('192.168.0.29/16')).to.be.true;
      expect(isNetworkValid('255.255.255.255/32')).to.be.true;
    });

    it('should return false if network invalid', () => {
      expect(isNetworkValid('')).to.be.false;
      expect(isNetworkValid('192.168.0.1')).to.be.false;
      expect(isNetworkValid('/15')).to.be.false;
      expect(isNetworkValid('192.168.0.1/33')).to.be.false;
      expect(isNetworkValid('192.256.0.1/30')).to.be.false;
    });
  });

  describe('is IP valid', () => {
    it('should be a function', () => {
      expect(isIpNumberValid).to.be.a('function');
    });

    it('should return true if IP valid', () => {
      expect(isIpNumberValid('0.0.0.0')).to.be.true;
      expect(isIpNumberValid('192.168.0.29')).to.be.true;
      expect(isIpNumberValid('255.255.255.255')).to.be.true;
    });

    it('should return false if IP invalid', () => {
      expect(isNetworkValid('')).to.be.false;
      expect(isNetworkValid('192.256.0.1')).to.be.false;
      expect(isNetworkValid('192.250.0.1.1')).to.be.false;
    });
  });

  describe('is binary string valid', () => {
    it('should be a function', () => {
      expect(isBinaryStringValid).to.be.a('function');
    });

    it('should return true if binary string valid', () => {
      expect(isBinaryStringValid('00000000000000000000000000000000')).to.be.true;
      expect(isBinaryStringValid('11111111111111111111111111111111')).to.be.true;
      expect(isBinaryStringValid('01010101010101010101010101010101')).to.be.true;
    });

    it('should return false if binary string invalid', () => {
      expect(isBinaryStringValid('')).to.be.false;
      expect(isBinaryStringValid('22222222222222222222222222222222')).to.be.false;
      expect(isBinaryStringValid('010101010101010101010101010101011')).to.be.false;
    });
  });

  describe('is binary mask valid', () => {
    it('should be a function', () => {
      expect(isBinaryMaskValid).to.be.a('function');
    });

    it('should return true if binary mask valid', () => {
      expect(isBinaryMaskValid('00000000000000000000000000000000')).to.be.true;
      expect(isBinaryMaskValid('11111111111111111111111111111111')).to.be.true;
      expect(isBinaryMaskValid('11111111111111100000000000000000')).to.be.true;
    });

    it('should return false if binary mask invalid', () => {
      expect(isBinaryMaskValid('')).to.be.false;
      expect(isBinaryMaskValid('111111111111111111111111111111111')).to.be.false;
      expect(isBinaryMaskValid('11111111111111111000000000000001')).to.be.false;
    });
  });

  describe('is IP number valid', () => {
    it('should be a function', () => {
      expect(isIpNumberValid).to.be.a('function');
    });

    it('should return true if IP number valid', () => {
      expect(isIpNumberValid(0)).to.be.true;
      expect(isIpNumberValid(321)).to.be.true;
      expect(isIpNumberValid(4294967295)).to.be.true;
    });

    it('should return false if IP number invalid', () => {
      expect(isIpNumberValid()).to.be.false;
      expect(isIpNumberValid(-5)).to.be.false;
      expect(isIpNumberValid(4294967295 + 1)).to.be.false;
    });
  });
});
