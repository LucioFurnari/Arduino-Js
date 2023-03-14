var five = require("johnny-five");
var board = new five.Board({ port: "COM4" });

board.on('ready', function() {
  var led = new five.Led(13);
  led.blink(2000);
});

board.on('exit', () => {
  var led = new five.Led(13);
  led.off()
})