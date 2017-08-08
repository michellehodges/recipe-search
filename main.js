//GLOBAL VARIABLES HERE
let searchButton = document.querySelector(".search-button")

//GLOBAL FUNCTIONS HERE
function convertToJson(recipes){ return recipes.json(); }

function consoleLogData(data){ console.log(data); }

function fetchSearchedItem() {
  let searchedItems = document.querySelector(".search-box")
  let urlToFetch =
  fetch("https://recipepuppyproxy.herokuapp.com/api/?i=onions,garlic&q=omelet&p=3 ")
    .then(convertToJson)
    .then(consoleLogData)
  }
}

function returnSearchedItems(){
  for (everything under the array of searched items, keep going until all is gone ) {
    let recipesContainer = document.querySelector(".food-section-container")
    let htmlInsertion = `
      <div class = "food-section" url = "#" >${recipe.name}
      </div>
`
  }
}

//STUFF THAT HAPPENS HERE

searchButton.addEventListener('click', function(){
  fetchSearchedItem();
  returnSearchedItems();
})






//Onlick:

//When you click the button Search, then
  // iterate through the array. for everything under the array,
  // split the object string names into multiple strings
  // if the userInput is === anything in those strings
  // then return that object in form of template literals
