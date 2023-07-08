const SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "en-US";

recognition.interimResults = false;

const pie = document.querySelector("#pie");
const direction = document.querySelector("#direction");
const textlog = document.querySelector("textarea");

pie.addEventListener("click", () => {
  logging();
});

const logging = () => {
  direction.style.color = "black";
  direction.textContent = `Say a color :)`;
  recognition.start();

  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    // button.textContent = speechToText;
    document.querySelector("body").style.backgroundColor = speechToText;
    direction.textContent = `Click to try again`;
    if (speechToText === "profile") {
      direction.textContent = `Redirecting to profile!`;
      setTimeout(() => {
        window.location.href = "/profile";
      }, "1000");
    } else if (speechToText === "surprise me") {
      direction.textContent = `You got it!`;
      setTimeout(() => {
        window.location.href = "/profile";
      }, "1000");
    }
  };
};
