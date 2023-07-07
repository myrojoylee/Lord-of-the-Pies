// selecting an element through DOM and setting it to variable
const messageParent = document.querySelector(".message-parent");
// Setting a time variable for message timeout
let time = 5;

// async function to add logout functionality
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    // create a message with logout
    const message = document.createElement("h2");
    message.textContent = "You are now logged out. To login again, click ";
    message.id = "logout-message";
    message.style.color = "black";
    message.classList.add("title");

    const link = document.createElement("a");
    link.href = "/login";
    link.id = "login-link";
    link.textContent = "here.";
    link.style.color = "blue";

    // append it to the parent element
    messageParent.appendChild(message);
    messageParent.appendChild(link);
    console.log(messageParent)

    // set a timer interval to have message time out
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


// event listener to add function to logout button
document.querySelector("#logout").addEventListener("click", logout);
