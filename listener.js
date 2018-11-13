var Ably = require("ably");
//Note make sure you change to Your Sandbox Key below
var realtime = new Ably.Realtime({ key: 'n9lhCw.VpHOEQ:yarWasjrblXM8ktr' });

var GPIO = require('onoff').Gpio,
led = new GPIO(27, 'out');

var channel = realtime.channels.get("Sandbox");
//listen for messages from our web page and set
//GPIO pin 27 to 1 (on) or 0 (off).
channel.subscribe(function(msg) {
  var message = msg.data.lightstate;

  if (message == 'on') {
    led.writeSync(1);
  }
  else if (message == 'off') {
    led.writeSync(0);
  }
})


