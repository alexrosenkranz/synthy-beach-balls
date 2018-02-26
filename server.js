const midi = require('midi');
// Set up a new output.
const output = new midi.output();

var SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
var port = new SerialPort('/dev/tty.usbmodem14121', {
  baudRate: 9600
});
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

parser.on('open', onPortOpen);
parser.on('data', onData);
parser.on('close', onClose);
parser.on('error', onError);

function onPortOpen() {
  console.log('YESSIR THE PORT IS OPEN COS CAPS');
}

function onData(d) {
  console.log('data dis, data dat ' + d);
  output.sendMessage([176, 22, 1]);
}

function onClose() {
  port.write(false);
  console.log('Port is closed, yo');
}
function onError() {
  console.log('something went horribly wrong');
}

// Count the available output ports.
output.getPortCount();

// // Get the name of a specified output port.
// output.getPortName(0);

// Open the first available output port.
try {
  output.openPort(0);
} catch (error) {
  output.openVirtualPort('');
}

// Send a MIDI message.
output.sendMessage([176, 22, 1]);

// Close the port when done.
output.closePort();
