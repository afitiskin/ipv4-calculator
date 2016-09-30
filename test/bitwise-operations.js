import 'babel-polyfill';
import { expect } from 'chai';

import {
  and,
  not,
  xor,
  or,
} from '../src/bitwise';

describe('Bitwise operation', () => {
  describe('AND', () => {
    it('should be a function', () => {
      expect(and).to.be.a('function');
    });

    it('should work correctly', () => {
      expect(and('1100', '1010')).to.equal('1000');
      expect(and('0001', '0000001')).to.equal('0000001');
      expect(and('0001', '0000010')).to.equal('0000000');
    });
  });

  describe('OR', () => {
    it('should be a function', () => {
      expect(or).to.be.a('function');
    });

    it('should work correctly', () => {
      expect(or('1100', '1010')).to.equal('1110');
      expect(or('0001', '0000001')).to.equal('0000001');
      expect(or('0001', '0000010')).to.equal('0000011');
    });
  });

  describe('NOT', () => {
    it('should be a function', () => {
      expect(not).to.be.a('function');
    });

    it('should work correctly', () => {
      expect(not('1100')).to.equal('0011');
      expect(not('0001')).to.equal('1110');
      expect(not('0000010')).to.equal('1111101');
    });
  });

  describe('XOR', () => {
    it('should be a function', () => {
      expect(xor).to.be.a('function');
    });

    it('should work correctly', () => {
      expect(xor('1100', '1010')).to.equal('0110');
      expect(xor('0001', '0000001')).to.equal('0000000');
      expect(xor('0001', '0000010')).to.equal('0000011');
    });
  });
});
