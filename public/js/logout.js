// async function to add logout functionality
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    
  } else {
    alert(response.statusText);
  }
};

// event listener to add function to logout button
document.querySelector("#logout").addEventListener("click", logout);
