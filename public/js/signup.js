const signupFormHandler = async (event) => {
  event.preventDefault();

  // make sure these match the html
  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/bloggers", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(`Password must be at least 8 characters.`);
    }
  }

  let currentUser = username;
  return currentUser;
};

// make sure these match the html
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
