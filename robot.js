const robot = require('robotjs');

setInterval(function() {
  robot.keyTap('a');
}, 4000);

setInterval(function() {
  robot.keyTap('b');
}, 8000);

// const Launchpad = require('launchpad-mini'),
//   pad = new Launchpad();

// pad.connect().then(() => {
//   // Auto-detect Launchpad
//   pad.reset(2); // Make Launchpad glow yellow
//   pad.on('key', k => {
//     // Make button red while pressed, green after pressing
//     pad.col(k.pressed ? pad.red : pad.green, k);
//   });
// });
