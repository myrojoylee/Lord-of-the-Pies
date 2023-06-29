// collapses and expands chatbox upon click
const collapsible = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`; // 05:19
  }

  if (minutes < 10) {
    minutes = `0${minutes}`; // 05:19
  }

  let time = `${hours}:${minutes}`;
  return time;
}

function firstBotMessage() {
  let firstMessage = `How's it going?`;
  document.getElementById(
    "botStarterMessage"
  ).innerHTML = `<p class="botText"><span>${firstMessage}</span></p>`;

  let time = getTime();
  const timeStamp = document.querySelector("#chat-timestamp");
  timeStamp.append(time);

  document.querySelector("#userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = `<p class="botText"><span>${botResponse}</span></p>`;

  const chatBox = document.querySelector("#chatbox");
  chatBox.insertAdjacentHTML("beforeend", botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
  let userText = document.querySelector("#textInput").value;

  if (!userText) {
    userText = `Save the Pandas!`;
  }

  let userHtml = `<p class="userText"><span>${userText}</span></p>`;

  document.querySelector("#textInput").value = "";
  const chatBox = document.querySelector("#chatbox");
  chatBox.insertAdjacentHTML("beforeend", userHtml);
  document.querySelector("#chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

function btnSendText(sampleText) {
  let userHtml = `<p class="userText"><span>${sampleText}</span></p>`;

  textInput.value = "";
  const chatBox = document.querySelector("#chatbox");
  chatBox.insertAdjacentHTML("beforeend", userHtml);
  document.querySelector("#chat-bar-bottom").scrollIntoView(true);
}

function sendBtn() {
  getResponse();
}

function thumbsUpBtn() {
  btnSendText("Thanks for the like!");
}

//  press enter to send a message
const keyToStart = document.querySelector("#textInput");
keyToStart.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    getResponse();
  }
});

// loading dot animation every 300ms
// function loader(element) {
//   element.textContent = "";

//   loadInterval = setInterval(() => {
//     element.textContent += ".";

//     element.textContent === "...." ? (element.textContent = "") : null;
//   }, 300);
// }

function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

function generateUniqueId() {
  const timeStamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timeStamp}-${hexadecimalString}`;
}

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  //user chatstripe
  chatContainer.innerHTML += chatStripe(false, data.get("prompt"));

  form.reset();
};
