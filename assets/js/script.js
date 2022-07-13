var dietArray = [
  "balanced",
  "high-fiber",
  "high-protein",
  "low-carb",
  "low-fat",
  "low-sodium",
];
var healthArray = [
  "alcohol-cocktail",
  "alcohol-free",
  "celery-free",
  "crustacean-free",
  "dairy-free",
  "DASH",
  "egg-free",
  "fish-free",
  "fodmap-free",
  "gluten-free",
  "immuno-supportive",
  "keto-friendly",
  "kidney-friendly",
  "kosher",
  "low-fat-abs",
  "low-potassium",
  "low-sugar",
  "lupine-free",
  "Mediterranean",
  "mollusk-free",
  "mustard-free",
  "no-oil-added",
  "paleo",
  "peanut-free",
  "pescatarian",
  "pork-free",
  "red-meat-free",
  "sesame-free",
  "shellfish-free",
  "soy-free",
  "sugar-conscious",
  "sulfite-free",
  "tree-nut-free",
  "vegan",
  "vegetarian",
  "wheat-free",
];
var cuisineTypeArray = [
  "American",
  "Asian",
  "British",
  "Caribbean",
  "Central Europe",
  "Chinese",
  "Eastern Europe",
  "French",
  "Indian",
  "Italian",
  "Japanese",
  "Kosher",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "South American",
  "South East Asian",
];
var mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
var dishType = [
  "Biscuits and cookies",
  "Bread",
  "Cereals",
  "Condiments and sauces",
  "Desserts",
  "Drinks",
  "Main course",
  "Pancake",
  "Preps",
  "Preserve",
  "Salad",
  "Sandwiches",
  "Side dish",
  "Soup",
  "Starter",
  "Sweets",
];
function init() {
  getData();
}
const getData = async () => {
  var response = await fetch(
    "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=c80dede8&app_key=b554f0e254b1650c2d9edaa1fe10ca4d"
  );
  var data = await response.json();
  var recipes = data.hits;
  showData(recipes);
  //   console.log(recipes);
};
var cardContainerEl = $("#card_container");
function showData(recipes) {
  console.log(recipes[0]);
  for (let i = 0; i < recipes.length; i++) {
    var recipeName = recipes[i].recipe.label;
    var cardEl = $(`<div class="card g" >
    <div class="image is-1by1" >
 
        <img src=${recipes[i].recipe.image} alt="Placeholder image">
   
    </div>
    <div class="card-content is-overlay">
       <span class="tile r is-primary"><span class="bottom">${recipeName}</span></span>
    </div>
  </div>`);
    cardEl.appendTo(cardContainerEl);
  }
}

/**
 * <div class="card_container">
                <div class="card g" >
                    <div class="image is-1by1" >
                 
                        <img src="https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg" alt="Placeholder image">
                   
                    </div>
                    <div class="card-content is-overlay">
                       <span class="tile r is-primary"><span class="bottom">Title</span></span>
                    </div>
                  </div>
 */
init();
