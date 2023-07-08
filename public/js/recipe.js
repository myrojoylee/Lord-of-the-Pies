// handles input from new recipe form
const newRecipeHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#recipe-name").value.trim();
  const detail = document.querySelector("#recipe-detail").value.trim();

  if (name && detail) {
    // we perform a fetch to get data from the user input
    const response = await fetch(`/api/recipes`, {
      method: "POST",
      body: JSON.stringify({ name, detail }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // if successful, redirect back to profile
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create recipe");
    }
  }
};

// handles input from updating an existing recipe
const updateRecipeHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#update-name").value;
  const detail = document.querySelector("#update-detail").value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (name && detail) {
    const response = await fetch(`/api/recipes/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        detail,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/profile`);
    } else {
      alert("Failed to edit recipe");
    }
  } else {
    alert("Must fill in all fields!");
  }
};

// handles the deleting of an existing recipe
const deleteRecipeHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/recipes/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete recipe");
    }
  }
};

document
  .querySelector("#updateBtn")
  .addEventListener("click", updateRecipeHandler);

document
  .querySelector("#deleteBtn")
  .addEventListener("click", deleteRecipeHandler);
