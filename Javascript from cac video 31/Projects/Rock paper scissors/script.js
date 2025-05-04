//rock wins in scissor loses to paper
//paper wins in rock loses to scissor
//scissor wins in paper loses to rock

//user choosing
alert("Welcome to Rock Paper Scissors Game")
while(1){
let userChoice = prompt("Enter Your choice");
let userChoiceTwo = userChoice.toLowerCase();

//comp choosing
let compChoice = Math.floor(Math.random() * 3);
let rps = ["rock", "paper", "scissor"];
alert(`Computer choose ${rps[compChoice]}`)

if (userChoiceTwo === rps[compChoice]) {
  alert("It's a Draw")
} 
else if (
  (userChoiceTwo == "rock" && rps[compChoice] == "scissor") ||
  (userChoiceTwo == "paper" && rps[compChoice] == "rock") ||
  (userChoiceTwo == "scissor" && rps[compChoice] == "paper")
) {
  alert("You won")
}
else{
  alert("You lost")
}
}