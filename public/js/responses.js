botResponseArray: ["Interesting...go on...", " "];

// Added just in case user feels like losing in rock-paper-scissors
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
    let randomReply = rotatingRandomBotResponse();
    return randomReply;
  }
}

// bot's rotating random response to any user input
function rotatingRandomBotResponse() {
  let bank = [
    "Patience you must have, my young Padawan",
    "That's what I said!",
    "The server is having issues connecting; please try again later.",
    "Just do it!",
    "We will be with you in just a moment. Please hold.",
    "Are you not entertained??",
    "8 glasses of water are recommended for daily consumption.",
    "If you are a rotary dialer, please dial 1.",
    "Please remember to fill out the feedback form if you were satisfied with your service today.",
    "You shall NOT bake without recipies!!",
    "B is for bananas, B-A-N-A-N-A-S!",
  ];
  let randomReply = bank[Math.floor(Math.random() * 10)];
  return randomReply;
}
