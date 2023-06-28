// handles new recipe
const newRecipeHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#recipe-name").value.trim();
  const detail = document.querySelector("#recipe-detail").value.trim();

  if (name && detail) {
    const response = await fetch(`/api/recipes`, {
      method: "POST",
      body: JSON.stringify({ name, detail }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/profile`);
    } else {
      console.log(error);
      alert("Failed to submit recipe");
    }
  }
};

document
  .querySelector(".new-recipe-form")
  .addEventListener("submit", newRecipeHandler);
