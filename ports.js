const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const robot = require('robotjs');

var PortSetup = function(
  portNum,
  key,
  color,
  maxAc,
  minAc
) {
  this.port = new SerialPort(portNum, {
    baudRate: 9600
  });
  this.parser = this.port.pipe(new Readline({ delimiter: '\r\n' }));
  this.onPortOpen = function() {
    console.log(`${portNum} is controlling key ${key} and blinking ${color}`);
  };
  this.onData = function(data) {
    console.log('Arduino: ', portNum);
    const acX = parseInt(data.split(',').shift());
    const acY = parseInt(data.split(',')[1]);
    const acZ = parseInt(data.split(',').pop());
    
    console.log(acZ + acX + acY);

    const totalAc = acX + acY + acZ;
    
    if (totalAc > maxAc || totalAc < minAc) {
      robot.keyTap(key);
    }
  };
  this.onClose = function() {
    console.log('Port is closed, yo');
  };
  this.onError = function() {
    console.log(`something went wrong with: ${portNum}`);
  };
};

module.exports = PortSetup;
