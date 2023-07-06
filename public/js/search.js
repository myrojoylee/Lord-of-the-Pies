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

// Search bar filter
  recipesFiltered.forEach((recipe) => {
    recipesDiv.innerHTML += `
      <div class="column card ml-2 mr-2">
  <div class="card-image">
    <figure class="image is-3by3">
      <img src="${recipe.filename}" alt="${recipe.alt_text}" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-36x36">
          <img src="../../images/pietest.png" alt="basic pie image" />
        </figure>
      </div>
      <div class="media-content">
        <a href="/recipe/${recipe.id}">
          <h3 class="rec-name title">[<span>${recipe.id}</span>] ${recipe.name}</h3>
        </a>
        
          <p class="blog-author subtitle">Posted by
            ${recipe.user.username}</p>
       
      </div>
    </div>
  </div>
  <div class="card-content">
    <p class="subtitle recdetails">${recipe.detail}</p>
  </div>
  <p>Posted on ${recipe.created_on}</p>
</div>
     `;
  });
}

searchInput.addEventListener("keyup", (event) => {
  searchText = event.target.value;
  recipesDiv.innerHTML = "";
  renderRecipes();
});

init();
