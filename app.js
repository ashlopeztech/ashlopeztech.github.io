
if (annyang) {
  // Let's define a command.
  var commands = {
    'maybe': function() { alert('HEY GURL HE-EY!'); }
    //'mirror mirror on the wall': function() { alert('taste my forbiddin fruit'); }
  };
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}