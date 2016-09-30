# IPv4 networks calculator
Get IPs list for any network, first network IP address and broadcast IP address.

## Installation
```
npm install ipv4-calculator --save
```

## Usage
```
import * as ipCalculator from 'ipv4-calculator';

ipCalculator.getNetworkFirstIp('192.210.0.11/30'); // returns '192.210.0.8'
ipCalculator.getNetworkBroadcastIp('192.210.0.25/28''); // returns  '192.210.0.31'
ipCalculator.getNetworkIps('192.210.0.25/30'); // returns ['192.210.0.24', '192.210.0.25', '192.210.0.26', '192.210.0.27']
```
