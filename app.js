if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': function(){ 
      alert('Hello world!'); 
    }
    
    'what song': function () {
      alert('to you to everything i kmew');
      
    }

  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}