// fetches data from the form and processes data
const commentFormHandler = async (event) => {
  event.preventDefault();

  const detail = document.querySelector("#comment-detail").value;
  const user_id = document.querySelector("#current-user").textContent;
  const recipe_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  console.log(`hey`);
  if (detail) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ user_id, recipe_id, detail }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      detail.textContent = `Field cannot be left blank!`;
    }
  }
};

document
  .querySelector(".submitCommentBtn")
  .addEventListener("click", commentFormHandler);
