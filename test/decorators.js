import 'babel-polyfill';
import { expect } from 'chai';
import sinon from 'sinon';

import {
  decorate,
  validateMaskDecorator,
  validateIpDecorator,
  validateNetworkAddressDecorator,
  validateBinaryStringDecorator,
  validateBinaryMaskDecorator,
  validateIpNumberDecorator,
  normalizeBinaryStrings
} from '../src/decorators';

describe('Decorators:', () => {
  describe('function decorate', () => {
    it('should be a function', () => {
      expect(decorate).to.be.a('function');
    });

    it('should call decorator and pass function to it', () => {
      const decorator = sinon.spy();
      decorate(42, decorator);

      expect(decorator.calledWith(42)).to.be.true;
    });

    it('should return result of decorator', () => {
      const decorator = sinon.stub().returns(42);

      expect(decorate(21, decorator)).to.equal(42);
    });
  });

  describe('validate mask decorator', () => {
    it('should be a function', () => {
      expect(validateMaskDecorator).to.be.a('function');
    });

    it('should throw error if mask is invalid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateMaskDecorator);

      expect(fn.bind(null, -1)).to.throw(Error);
    });

    it('should call function if mask is valid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateMaskDecorator);
      const mask = 32;

      expect(fn.bind(null, mask)).not.to.throw(Error);
      expect(spy.calledWith(mask)).to.be.true;
    });
  });

  describe('validate IP decorator', () => {
    it('should be a function', () => {
      expect(validateIpDecorator).to.be.a('function');
    });

    it('should throw error if IP is invalid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateIpDecorator);

      expect(fn.bind(null, '')).to.throw(Error);
    });

    it('should call function if IP is valid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateIpDecorator);
      const ip = '192.168.0.1';

      expect(fn.bind(null, ip)).not.to.throw(Error);
      expect(spy.calledWith(ip)).to.be.true;
    });
  });

  describe('validate network address decorator', () => {
    it('should be a function', () => {
      expect(validateNetworkAddressDecorator).to.be.a('function');
    });

    it('should throw error if network address is invalid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateNetworkAddressDecorator);

      expect(fn.bind(null, '')).to.throw(Error);
    });

    it('should call function if network address is valid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateNetworkAddressDecorator);
      const network = '192.168.0.1/32';

      expect(fn.bind(null, network)).not.to.throw(Error);
      expect(spy.calledWith(network)).to.be.true;
    });
  });

  describe('validate binary string decorator', () => {
    it('should be a function', () => {
      expect(validateBinaryStringDecorator).to.be.a('function');
    });

    it('should throw error if binary string is invalid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateBinaryStringDecorator);

      expect(fn.bind(null, '')).to.throw(Error);
    });

    it('should call function if binary string is valid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateBinaryStringDecorator);
      const binaryString = '0'.repeat(32);

      expect(fn.bind(null, binaryString)).not.to.throw(Error);
      expect(spy.calledWith(binaryString)).to.be.true;
    });
  });

  describe('validate binary mask decorator', () => {
    it('should be a function', () => {
      expect(validateBinaryMaskDecorator).to.be.a('function');
    });

    it('should throw error if binary mask is invalid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateBinaryMaskDecorator);

      expect(fn.bind(null, '')).to.throw(Error);
    });

    it('should call function if binary mask is valid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateBinaryMaskDecorator);
      const binaryMask = '1'.repeat(32);

      expect(fn.bind(null, binaryMask)).not.to.throw(Error);
      expect(spy.calledWith(binaryMask)).to.be.true;
    });
  });

  describe('validate IP number decorator', () => {
    it('should be a function', () => {
      expect(validateIpNumberDecorator).to.be.a('function');
    });

    it('should throw error if IP number is invalid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateIpNumberDecorator);

      expect(fn.bind(null, -1)).to.throw(Error);
    });

    it('should call function if IP number is valid', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, validateIpNumberDecorator);
      const ipNumber = 42;

      expect(fn.bind(null, ipNumber)).not.to.throw(Error);
      expect(spy.calledWith(ipNumber)).to.be.true;
    });
  });

  describe('normalize binary strings decorator', () => {
    it('should be a function', () => {
      expect(normalizeBinaryStrings).to.be.a('function');
    });

    it('should normalize input strings to make their lengths same', () => {
      const spy = sinon.spy();
      const fn = decorate(spy, normalizeBinaryStrings);

      fn('0', '1111');
      expect(spy.calledWith('0000', '1111'));
    });
  })
});
