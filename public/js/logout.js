const messageParent = document.querySelector(".message-parent");
let time = 5;

const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // document.location.replace("/");
    const message = document.createElement("h2");
    message.textContent = "You are now logged out. To login again, click ";
    message.id = "logout-message";
    message.style.color = "black";

    const link = document.createElement("a");
    link.href = "/login";
    link.id = "login-link";
    link.textContent = "here.";
    link.style.color = "blue";

    messageParent.appendChild(message);
    messageParent.appendChild(link);
    console.log(messageParent)

    let timerInterval = setInterval(function() {
      time--;
      if (time === 0) {
        clearInterval(timerInterval);
        message.remove();
        link.remove();
        console.log("removed");
        console.log(messageParent);
      }
    }, 1000);
  } else {
    alert(response.statusText);
  }
};


// change the id here if you use a different one in the html
document.querySelector("#logout").addEventListener("click", logout);
