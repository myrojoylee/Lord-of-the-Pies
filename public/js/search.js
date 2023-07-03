const searchInput = document.querySelector("#searchRecipe");
const recipesDiv = document.querySelector("#recipes");

let searchText = "";
let recipes = [];

async function fetchRecipes() {
  const response = await fetch("/api/recipes");
  const recipeData = await response.json();

  return recipeData;
}

async function init() {
  recipes = await fetchRecipes();
  console.log(recipes);
  renderRecipes();
}

async function renderRecipes() {
  let recipesFiltered = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (recipesFiltered.length > 1) {
    recipesFiltered.forEach((recipe) => {
      recipesDiv.innerHTML += `
      <h2 class="subtitle has-text-centered"> Search returned: ${recipesFiltered.length} matches </h2>
      <div class="card">
  <div class="card-image">
    <figure class="image is-3by3">
      <img src="${recipe.filename}" alt="${recipe.alt_text}" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-36x36">
          <img src="../images/pietest.png" alt="basic pie image" />
        </figure>
      </div>
      <div class="media-content">
        <a href="/recipe/{{id}}">
          <h3 class="rec-name title">[<span>${recipe.id}</span>] ${recipe.name}</h3>
        </a>
        <p class="blog-author subtitle">Posted by
          ${recipe.user.username}</p>
      </div>
    </div>
  </div>
  <div class="content">
    <p class="subtitle">${recipe.detail}</p>
  </div>
  <p>Posted on ${recipe.created_on}</p>
</div>`;
    });
  } else if ((recipesFiltered.length = 1)) {
    recipesFiltered.forEach((recipe) => {
      recipesDiv.innerHTML += `
      <h2 class= " subtitle has-text-centered"> Search returned: ${recipesFiltered.length} match </h2>
      <div class="card">
  <div class="card-image">
    <figure class="image is-3by3">
      <img src="${recipe.filename}" alt="${recipe.alt_text}" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-36x36">
          <img src="../images/pietest.png" alt="basic pie image" />
        </figure>
      </div>
      <div class="media-content">
        <a href="/recipe/{{id}}">
          <h3 class="rec-name title">[<span>${recipe.id}</span>] ${recipe.name}</h3>
        </a>
        <p class="blog-author subtitle">Posted by
          ${recipe.user.username}</p>
      </div>
    </div>
  </div>
  <div class="content">
    <p class="subtitle">${recipe.detail}</p>
  </div>
  <p>Posted on ${recipe.created_on}</p>
</div>`;
    });
  } else {
    recipesDiv.innerHTML = `
    <h2> Search returned: ${recipesFiltered.length} matches. </h2>
   `;
  }
}

searchInput.addEventListener("keyup", (event) => {
  searchText = event.target.value;
  recipesDiv.innerHTML = "";
  renderRecipes();
});

init();
