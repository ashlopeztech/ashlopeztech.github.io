
if (annyang) {
  // Let's define a command.
  var commands = {
    'maybe': function() { alert('HEY GURL HE-EY!'); }
    'hello': function() { alert('HEY GURL HE-EY!'); }
   
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}