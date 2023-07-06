botResponseArray: ["Interesting...go on...", " "];

function getBotResponse(input) {
  let lowercaseInput = input.toLowerCase();
  if (lowercaseInput == "rock") {
    return "paper";
  } else if (lowercaseInput == "paper") {
    return "scissors";
  } else if (lowercaseInput == "scissors") {
    return "rock";
  } else if (lowercaseInput == "hello") {
    return "Hello there!";
  } else if (lowercaseInput == "hi") {
    return "Talk to you later!";
  } else {
    return "I don't have an answer for that; try typing something else!";
  }
}

function rotatingRandomBotResponse() {}
