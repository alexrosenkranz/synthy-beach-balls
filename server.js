const PortSetup = require('./ports');

// serialPort (COM, Keyboard Key, colorLED, maxTotal, minTotal)
const portOne = new PortSetup('/dev/tty.wchusbserial141220', '1', 'green', 25000, 16000);
portOne.parser.on('open', portOne.onPortOpen);
portOne.parser.on('data', portOne.onData);
portOne.parser.on('close', portOne.onClose);
portOne.parser.on('error', portOne.onError);

const portTwo = new PortSetup('/dev/tty.wchusbserial14124440', '2', 'blue', 25000, 15000);
portTwo.parser.on('open', portTwo.onPortOpen);
portTwo.parser.on('data', portTwo.onData);
portTwo.parser.on('close', portTwo.onClose);
portTwo.parser.on('error', portTwo.onError);

// const portThree = new PortSetup('/dev/tty.wchusbserial14114440', 'c', 'blue', -1000, 1000);
// portThree.parser.on('open', portThree.onPortOpen);
// portThree.parser.on('data', portThree.onData);
// portThree.parser.on('close', portThree.onClose);
// portThree.parser.on('error', portThree.onError);

// const portFour = new PortSetup('/dev/tty.wchusbserial14114420', 'd', 'red');
// portFour.parser.on('open', portFour.onPortOpen);
// portFour.parser.on('data', portFour.onData);
// portFour.parser.on('close', portFour.onClose);
// portFour.parser.on('error', portFour.onError);

// const portFive = new PortSetup('/dev/tty.wchusbserial1411430', 'e', 'red');
// portFive.parser.on('open', portFive.onPortOpen);
// portFive.parser.on('data', portFive.onData);
// portFive.parser.on('close', portFive.onClose);
// portFive.parser.on('error', portFive.onError);

// const portSix = new PortSetup('/dev/tty.wchusbserial1411410', 'f', 'green');
// portSix.parser.on('open', portSix.onPortOpen);
// portSix.parser.on('data', portSix.onData);
// portSix.parser.on('close', portSix.onClose);
// portSix.parser.on('error', portSix.onError);

// const portSeven = new PortSetup('/dev/tty.wchusbserial1411420', 'g', 'yellow');
// portSeven.parser.on('open', portSeven.onPortOpen);
// portSeven.parser.on('data', portSeven.onData);
// portSeven.parser.on('close', portSeven.onClose);
// portSeven.parser.on('error', portSeven.onError);

// const portEight = new PortSetup('/dev/tty.wchusbserial141144110', 'h', 'yellow');
// portSeven.parser.on('open', portSeven.onPortOpen);
// portSeven.parser.on('data', portSeven.onData);
// portSeven.parser.on('close', portSeven.onClose);
// portSeven.parser.on('error', portSeven.onError);

// const portNine = new PortSetup('/dev/tty.wchusbserial141130', 'i', 'yellow');
// portNine.parser.on('open', portNine.onPortOpen);
// portNine.parser.on('data', portNine.onData);
// portNine.parser.on('close', portNine.onClose);
// portNine.parser.on('error', portNine.onError);

// const portTen = new PortSetup('/dev/tty.wchusbserial141120', 'j', 'green');
// portTen.parser.on('open', portTen.onPortOpen);
// portTen.parser.on('data', portTen.onData);
// portTen.parser.on('close', portTen.onClose);
// portTen.parser.on('error', portTen.onError);
