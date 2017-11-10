if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': function(){ 
      alert('Hello world!'); 
    }
    'show me cute kittens ': function () {
      alert(' you rang?');
      
    }

  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}