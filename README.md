# IPv4 networks calculator
Get IPs list for any network, first network IP address and broadcast IP address.

## Installation
```
npm install ipv4-calculator --save
```

## Usage
```
import * as ipCalculator from 'ipv4-calculator';

ipCalculator.getNetworkFirstIp('192.210.0.11/30'); // '192.210.0.8'
ipCalculator.getNetworkBroadcastIp('192.210.0.25/28'); // '192.210.0.31'
ipCalculator.getNetworkIps('192.210.0.25/30'); // ['192.210.0.24', '192.210.0.25', '192.210.0.26', '192.210.0.27']
ipCalculator.getNetworkIpsQuantity('192.210.0.25/30'); // 4
ipCalculator.getNetworkIpsQuantityByMask(30); // 4
```

## Other
You are able to use utils, validators and decorators from this package

### Utils
```
import * as utils from 'ipv4-calculator/dist/utils';

utils.numberToBinaryString(2); // '10'
utils.binaryStringToNumber('10'); // 2

utils.ipToBinaryString('192.168.0.29'); // '11000000101010000000000000011101'
utils.binaryStringToIp('11000000101010000000000000011101'); // '192.168.0.29'

utils.ipToNumber('192.168.0.29'); // 3232235549
utils.ipNumberToIp(3232235549); // '192.168.0.29'

utils.ipNumberToBinaryString(3232235549); // '11000000101010000000000000011101'

utils.maskToBinaryString(31); // '11111111111111111111111111111110'
utils.binaryStringToMask('11111111111111111111111111111110'); // 31
```

### Validators
```
import * as validator from 'ipv4-calculator/dist/validators';

validator.isMaskValid(15); // true
validator.isMaskValid(150); // false

validator.isIpValid('192.169.0.10'); // true
validator.isIpValid('0.0.0.256'); // false

validator.isIpNumberValid(4294967295); // true
validator.isIpNumberValid(4294967295 + 1); // false

validator.isBinaryStringValid('01010101010101010101010101010101'); // true
validator.isBinaryStringValid('22'); // false

validator.isBinaryMaskValid('11111111111111100000000000000000'); // true
validator.isBinaryMaskValid('11111111111111100000000000000001'); // false

validator.isNetworkValid('0.0.0.0/0'); // true
validator.isNetworkValid('0.0.0.0/33'); // false
```

### Decorators
```
import * as decorators from 'ipv4-calculator/dist/decorators';

class SomeClass {
  @decorators.validateMaskDecorator // throw Error if mask is invalid
  doSomethingWithNetworkMask(mask) {
    // ...
  }

  @decorators.validateIpDecorator // throw Error if IP is invalid
  doSomethingWithIpAddress(ip) {
    // ...
  }

  @decorators.validateNetworkAddressDecorator // throw Error if network is invalid
  doSomethingWithIpNetwork(network) {
    // ...
  }

  @decorators.validateBinaryStringDecorator // throw Error if binary string is invalid
  doSomethingWithBinaryString(string) {
    // ...
  }

  @decorators.validateBinaryMaskDecorator  // throw Error if binary mask is invalid
  doSomethingWithBinaryMask(mask) {
    // ...
  }

  @decorators.validateIpNumberDecorator // throw Error if IP number is invalid
  doSomethingWithIpNumber(ipNumber) {
    // ...
  }
}

// or use decorate util to decorate any function
const myFunc = decorators.decorate(ip => {
  // only if IP valid
  // in other case Error will be throwed
}, decorators.validateIpDecorator);
```
