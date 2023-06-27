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
    // if (speechToText === "profile") {
    //   document.querySelector("button").textContent = `Redirecting to profile!`;
    //   setTimeout(() => {
    //     window.location.href = "/profile";
    //   }, "1000");
    // }
  };
};
