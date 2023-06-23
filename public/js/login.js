const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  // these take input from the text fields with these ids
  // if you change the ids, please remember to change it here!
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    //Send POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // if successful, redirect the browser to profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

// make sure these match HTML if you want to change it
// this will add an event listener to the entire <section> defining
// the login form.
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
