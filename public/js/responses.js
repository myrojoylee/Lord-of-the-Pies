function getBotResponse(input) {
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  } else if (input == "hello") {
    return "Hello there!";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  } else {
    return "I don't have an answer for that; try typing something else!";
  }
}
