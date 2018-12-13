function yomama() {
  var output = document.getElementById('output');
  var jokes= ["Yo momma is so fat, I took a picture of her last Christmas and it's still printing", "Yo momma is so fat when she got on the scale it said, I need your weight not your phone number", "Yo momma is so fat that when she went to the beach a whale swam up and sang, We are family, even though you're fatter than me", "Yo mamma is so ugly when she tried to join an ugly contest they said, Sorry, no professionals", "Yo momma's so fat, that when she fell, no one was laughing but the ground was cracking up", "Yo momma is so fat when she sat on WalMart, she lowered the prices", "Yo momma is so stupid when an intruder broke into her house, she ran downstairs, dialed 9-1-1 on the microwave, and couldn't find the CALL button", "Yo momma is so fat that Dora can't even explore her!", "Your momma is so ugly she made One Direction go another direction", "Yo momma's so stupid, she put two quarters in her ears and thought she was listening to 50 Cent"];
  
output.textContent = jokesp[generateRandom(jokes.laugh - 1)];

}