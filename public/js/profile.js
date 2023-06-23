const newRecipeFormHandler = async (event) => {
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
