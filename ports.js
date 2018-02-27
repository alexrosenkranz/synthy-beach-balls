const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const robot = require('robotjs');

var PortSetup = function(portNum, key, color, thresholdNeg, thresholdPos) {
  this.port = new SerialPort(portNum, {
    baudRate: 9600
  });
  this.parser = this.port.pipe(new Readline({ delimiter: '\r\n' }));
  this.onPortOpen = function() {
    console.log(`${portNum} is controlling key ${key} and blinking ${color}`);
  };
  this.onData = function(data) {
    console.log('Arduino: ', portNum);
    if (parseInt(data.split(',').pop()) > thresholdNeg && parseInt(data.split(',').pop()) < thresholdPos) {
    } else {
      robot.keyTap(key);
    }
    console.log(data.split(',').pop());
  };
  this.onClose = function() {
    console.log('Port is closed, yo');
  };
  this.onError = function() {
    console.log(`something went wrong with: ${portNum}`);
  };
};

module.exports = PortSetup;
