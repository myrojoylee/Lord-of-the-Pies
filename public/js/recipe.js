const newRecipeHandler = async (event) => {
  event.preventDefault();

  // trim() removes any extraneous spaces before
  // and after user entry.
  const name = document.querySelector("#recipe-name").value.trim();
  const detail = document.querySelector("#recipe-detail").value.trim();

  // will only create the  new recipe if all
  // fields are filled out
  // make sure fields in the BODY
  // match model definitions!!
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

const updateRecipeHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#update-name").value;
  const detail = document.querySelector("#update-detail").value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

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
};

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

// make sure this matches html
document
  .querySelector("#updateBtn")
  .addEventListener("click", updateRecipeHandler);

document
  .querySelector("#deleteBtn")
  .addEventListener("click", deleteRecipeHandler);
