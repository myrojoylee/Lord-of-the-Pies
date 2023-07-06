// handles new recipe
const newRecipeHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#recipe-name").value.trim();
  const detail = document.querySelector("#recipe-detail").value.trim();
  const alt_text = document.querySelector("#alt_text").value.trim();
  const filename = document.querySelector("#filename").value;

  console.log(alt_text);
  let fileExtension = filename.split(".").pop();
  if (
    name &&
    detail &&
    alt_text &&
    (fileExtension === "png" ||
      fileExtension === "jpeg" ||
      fileExtension === "jpg")
  ) {
    const response = await fetch(`/api/recipes`, {
      method: "POST",
      body: JSON.stringify({ name, detail, alt_text, filename }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/profile`);
    } else {
      console.log(error);
      alert("Failed to submit recipe");
    }
  } else {
    alert(
      `Please try submitting again and make sure that no fields are empty and that you are only sending images that are currently supported (jpeg or png).`
    );
  }
};
// const cloudinaryWidgetHandler

document
  .querySelector(".new-recipe-form")
  .addEventListener("submit", newRecipeHandler);
