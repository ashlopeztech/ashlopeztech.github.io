
if (annyang) {
  // Let's define a command.
  var commands = {
    
    'hello': function() { alert('HEY GURL HE-EY!'); }
   
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}