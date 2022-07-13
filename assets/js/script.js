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
var search = "";
var dietFilter = "";
var cuisineFilter = "";
var healthFilter = "";
var mealTypeFilter = "";

function init() {
  showFilterData();
  //   getData();
}
var dietEl = $("#diet");
function showFilterData() {
  showDietFilter();
  showHealthFilter();
  showCuisineFilter();
  showMealTypeFilter();
}
// var aEl = $("<a>");
function showDietFilter() {
  //   var dietDropdown = $(``);
  //<p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
  var dietDropdownItems = $("#diet_dropdown_content");
  for (let i = 0; i < dietArray.length; i++) {
    // console.log(dietArray[i]);
    var dietPEl = $("<a>")
      .addClass("dropdown-item")
      .attr("id", dietArray[i])
      .text(dietArray[i]);

    dietPEl.on("click", function (e) {
      dietFilter = e.target.innerHTML;
      console.log(e.target.innerHTML);
    });
    dietPEl.appendTo(dietDropdownItems);
  }
  //   dietDropdown.appendTo(dietEl);
}
function showHealthFilter() {
  //   var dietDropdown = $(``);
  //<p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
  var healthDropdownItems = $("#health_dropdown_content");
  for (let i = 0; i < healthArray.length; i++) {
    // console.log(healthArray[i]);
    var healthPEl = $("<a>")
      .addClass("dropdown-item")
      .attr("id", healthArray[i])
      .text(healthArray[i]);
    healthPEl.on("click", function (e) {
      healthFilter = e.target.innerHTML;
      console.log(e.target.innerHTML);
    });
    healthPEl.appendTo(healthDropdownItems);
  }
  // dietDropdown.appendTo(dietEl);
}
function showMealTypeFilter() {
  //   var dietDropdown = $(``);
  //<p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
  var mealTypeDropdownItems = $("#meal");
  for (let i = 0; i < mealType.length; i++) {
    // console.log(mealType[i]);
    var mealTypePEl = $("<button>")
      .addClass("button")
      .attr("id", mealType[i])
      .text(mealType[i]);
    mealTypePEl.on("click", function (e) {
      mealTypeFilter = e.target.innerHTML;
      console.log(e.target.innerHTML);
    });
    mealTypePEl.appendTo(mealTypeDropdownItems);
  }
  //   dietDropdown.appendTo(dietEl);
}
function showCuisineFilter() {
  //   var dietDropdown = $(``);
  //<p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
  var cuisineDropdownItems = $("#cuisine_dropdown_content");
  for (let i = 0; i < cuisineTypeArray.length; i++) {
    // console.log(cuisine[i]);
    var cuisinePEl = $("<a>")
      .addClass("dropdown-item")
      .attr("id", cuisineTypeArray[i])
      .text(cuisineTypeArray[i]);
    cuisinePEl.on("click", function (e) {
      cuisineFilter = e.target.innerHTML;
      $("#cuisineVal").html();
      cuisinePEl.val(cuisineFilter);
      console.log(e.target.innerHTML);
    });
    cuisinePEl.appendTo(cuisineDropdownItems);
  }
  //   dietDropdown.appendTo(dietEl);
}

const getData = async () => {
  var response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=c80dede8&app_key=b554f0e254b1650c2d9edaa1fe10ca4d&diet=${dietFilter}&health=${healthFilter}&cuisineType=${cuisineFilter}&mealType=${mealTypeFilter}`
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
var formEl = $("#form");
var searchInputEl = $("#search_input");

var searchBtnEl = $("#search_btn");
searchBtnEl.on("click", function (e) {
  e.preventDefault();
  search = searchInputEl.val();
  console.log(search, dietFilter, cuisineFilter, healthFilter, mealTypeFilter);

  getData();

  //   console.log(searchInputEl.val());
});
// bulmaSlider.attach();
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
