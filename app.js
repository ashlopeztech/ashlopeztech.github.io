if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': function(){ 
      alert('Hello world!'); 
    }
    'mirror mirror on the wall who is the greatest queen of all?': function () {
      alert("Well me of course!");
      
    }

  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}