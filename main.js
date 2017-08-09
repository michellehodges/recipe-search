//GLOBAL VARIABLES HERE
let searchButton = document.querySelector(".search-button")

//GLOBAL FUNCTIONS HERE
function convertToJson(recipes) { return recipes.json(); }

function consoleLogData(recipes) {
  let htmlInsertion = '';
  let recipesContainer = document.querySelector(".food-section-container");

  for (i = 0; i < recipes.results.length; i++ ) {
    let recipe = recipes.results[i];
    htmlInsertion += `
      <div class="food-section" style="background-image: url('https://www.placecage.com/g/200/300')">
        <a href="${recipes.results[i].href}">
          ${recipes.results[i].title}
        </a>
      </div>
      `;
  }

  recipesContainer.innerHTML = htmlInsertion;
  console.log(recipes);
}

function fetchSearchedItem() {
  let searchedItem = document.querySelector(".search-box");
  fetch(`https://recipepuppyproxy.herokuapp.com/api/?q=${searchedItem.value}`)
    .then(convertToJson)
    .then(consoleLogData);


}

//STUFF THAT HAPPENS HERE

searchButton.addEventListener('click', function(ev) {
  console.log("hello!");
  fetchSearchedItem();
})






//Onlick:

//When you click the button Search, then
  // iterate through the array. for everything under the array,
  // split the object string names into multiple strings
  // if the userInput is === anything in those strings
  // then return that object in form of template literals
