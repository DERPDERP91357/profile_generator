const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js?\n', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('What\'s your name? Nicknames are also acceptable :)\n', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question('What\'s an activity you like doing?\n', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\n', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question('What\'s your favourite thing to eat for that meal?\n', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          rl.question('Which sport is your absolute favourite?\n', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              rl.close();
            });
          });
        });
      });      
    });
  });
});










rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
