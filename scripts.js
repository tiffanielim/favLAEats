/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// ----------------------------------------------------
// ----------------------- DATA -----------------------
// ----------------------------------------------------

let foodSpots = [
  {
    name: "Pasta e Pasta by Allegro",
    cuisine: "Japanese-Italian",
    location: "Little Tokyo",
    price: "$$",
    bunnyRating: 5,
    image: "assets/images/pastaEPasta.JPG",
    tags: ["pasta", "fusion", "uni", "mentai", "asian"]
  },
  {
    name: "Mariscos El Jato",
    cuisine: "Mexican",
    location: "East LA",
    price: "$",
    bunnyRating: 4.5,
    image: "assets/images/elJato.jpg",
    tags: ["tacos", "seafood", "shrimp tacos", "fried tacos"]
  },
  {
    name: "Golden Deli",
    cuisine: "Vietnamese",
    location: "626",
    price: "$$",
    bunnyRating: 4.5,
    image: "assets/images/GoldenDeli.jpg",
    tags: ["com tam", "pho", "egg rolls"]
  },
  {
    name: "Mr. Dragon Noodle House",
    cuisine: "Chinese",
    location: "626",
    price: "$$",
    bunnyRating: 4,
    image: "assets/images/MrDragonNoodleHouseBeefRolls.avif",
    tags: ["beef rolls", "beef noodle soup", "bao"]
  },
  {
    name: "Mary Lane Cafe",
    cuisine: "American",
    location: "626",
    price: "$$",
    bunnyRating: 4,
    image: "assets/images/maryLaneCafe.png",
    tags: ["brunch", "sandwich", "latte"]
  },
  {
    name: "Avenue 26 Tacos",
    cuisine: "Mexican",
    location: "Little Tokyo",
    price: "$",
    bunnyRating: 4,
    image: "assets/images/avenue26Tacos.jpg",
    tags: ["tacos", "quesadilla", "al pastor", "carne asada", "street food"]
  },
  {
    name: "Seoul Market Eatery",
    cuisine: "Korean",
    location: "Koreatown",
    price: "$",
    bunnyRating: 4,
    image: "assets/images/seoulMarketEatery.jpeg",
    tags: ["cheap", "Korean fried chicken", "tteokbokki", "street food"]
  },
  {
    name: "Carnitas Michoacan",
    cuisine: "Mexican",
    location: "Chinatown",
    price: "$",
    bunnyRating: 3.5,
    image: "assets/images/carnitasMichoacanNachos.jpg",
    tags: ["tacos", "nachos", "al pastor", "carne asada", "street food"]
  },
];

//keeps track of user's current filter selections
let filters = {
  cuisine: null,
  location: null,
  sortBy: null,
  sortOrder: null,
};

// -----------------------------------------------------
// ------------------ EVENT LISTENERS ------------------
// -----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  showCards();

  ///for the search bar
  const searchBar = document.getElementById("search");
  searchBar.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    const searchString = e.target.value;
    search(searchString);
  });

  ///for the dropdown buttons
  initializeDropdowns();
});

///toggles mobile hamburger nav bar
function toggleMenu()
{
    console.log("Toggle menu pressed");
    const menu = document.querySelector(".menuLinks");
    const icon = document.querySelector(".hamburgerIcon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// -----------------------------------------------------
// ------------------- DISPLAY CARDS -------------------
// -----------------------------------------------------

// This function adds cards the page to display the data in the array
function showCards(spots = foodSpots) //shows all cards without a parameter, if there pass in a filtered list, it will show cards that reflects those filters
{
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; //to clear existing content

  const templateCard = document.querySelector(".card");

  for (let i = 0; i < spots.length; i++) {
    const foodSpot = spots[i];
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, foodSpot); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

//without this, the card would be blank.
//basically adds info to the card
function editCardContent(card, foodSpot){
  card.style.display = "block";
  updateCardImage(card, foodSpot);
  updateCardText(card, foodSpot);
  updateCardBunnyRating(card, foodSpot);
}

// ------------------------------------------------------
// -------------------- CARD CONTENT --------------------
// ------------------------------------------------------

function updateCardImage (card, foodSpot)
{
  const img = card.querySelector(".image");
  img.src = foodSpot.image;
  img.alt = foodSpot.name + " image";
}

function updateCardText(card, foodSpot)
{
  //name
  card.querySelector("h2").textContent = foodSpot.name;

  //cuisine
  card.querySelector("#cuisine").textContent = "Cuisine: " + foodSpot.cuisine; //can NOT use getElementById inside a nested component (like card) as it always looks at the entire document

  //location
  card.querySelector("#location").textContent = "Location: " + foodSpot.location;

  //price
  card.querySelector("#price").textContent = "Price: " + foodSpot.price;
}

//draws bunny icons based off of my rating :)
function updateCardBunnyRating(card, foodSpot)
{
  let bunnyContainer = card.querySelector(".bunny-rating");
  bunnyContainer.innerHTML = "";

  let rating = foodSpot.bunnyRating;
  for (let i = 1; i <= 5; i++)
  {
    const img = document.createElement("img");
    if (rating >= 1) //whole number
    {
      img.src = "assets/icons/fullBunnyStar.png"; //full bunny
      rating -=1; //this is needed because otherwise you're checking for the same thing over and over (resulting in 5 bunnies)
    }
    else if (rating == 0.5)
    {
      img.src = "assets/icons/halfBunnyStar.png"; //half bunny
      rating = 0; //becasue at this point, i should have already checked for whole bunnies and half bunnies,so there should be nothing left. i should have nothing left to use
    }
    else
    {
      img.src = "assets/icons/emptyBunnyStar.png"; //empty bunny
    }

    img.alt = "bunny rating";
    img.classList.add("bunny-icon");  //for css
    bunnyContainer.appendChild(img); //adds the bunny to the container of total bunnies of the rating
  }
}

// --------------------------------------------------------
// --------------------------------------------------------
// -------------------- SEARCH/SORTING --------------------
// --------------------------------------------------------
// --------------------------------------------------------

//the search bar logic
//if you type anything in the search bar, the function compares your input to food spots that contain name, cuisine, location, price, or tags include the search word.
function search(searchString)
{
  let matches = []; //empty array list for the search function
  searchString = searchString.toLowerCase();

  for (let i = 0; i < foodSpots.length; i++)
    {
      const foodSpot = foodSpots[i];

      nameMatch = foodSpot.name.toLowerCase().includes(searchString);
      cuisineMatch = foodSpot.cuisine.toLowerCase().includes(searchString);
      locationMatch = foodSpot.location.toLowerCase().includes(searchString);
      priceMatch = foodSpot.price.includes(searchString);
      tagMatch = (foodSpot.tags || []).some(tag => tag.toLowerCase().includes(searchString));

      if (nameMatch || cuisineMatch || locationMatch || priceMatch || tagMatch)
        matches.push(foodSpot);
    }

    // console.log(matches);
    showCards(matches);

}

function bubbleSort(array, key, isLowestFirst = true)
{
  arr = [...array]; //clone the array so original isn't mutated
  console.log(`Bubble sorting by "${key}" (${isLowestFirst ? "Asc" : "Desc"})`);
  for (let i = 0; i <arr.length-1; i++)
  {
    for (let j = 0; j <arr.length-1; j++)
    {
      let a = arr[j][key];
      let b = arr[j+1][key];

      if (key == "price")
      {
        a = a.length;
        b = b.length;
      }

      if ((isLowestFirst == true && a > b) || (!isLowestFirst == true && a < b )) //if the wrong order 
      {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }

    }
  }
  console.log("Sorted results:");
  arr.forEach((spot, index) => {
    console.log(`${index + 1}. ${spot.name} - ${spot[key]}`);
  });

  return arr;
}

function splitCuisine (cuisineStr)
{
  let currentWord = ""; //holds letters as we build words 
  let parts = []; //stores split words
  for (let i = 0; i < cuisineStr.length; i++)
  {
    const char = cuisineStr[i];

    if(char === '-')
    {
      parts.push(currentWord.toLowerCase());
      currentWord = "";
    }
    else
    {
      currentWord += char;
    }
  }

  if (currentWord.length > 0) //the second word after the loop
  {
    parts.push(currentWord.toLowerCase());
  }

    return parts;
}

function applyFilters()
{
  let results = []; //empty array that holds onto the foodSpots i'm passing

  for (let i = 0; i < foodSpots.length; i++)
  {
    const foodSpot = foodSpots[i];

    //skip this food spot if it doesn't match the selected cuisine
    if (!matchesCuisine(foodSpot))
      continue;

    //skip this food spot if it doesn't match the selected location
    if (!matchesLocation(foodSpot))
      continue;

    results.push(foodSpot); //as it's passed all the above filters alr
  }

  //if the user chose a sort by option
  if (filters.sortBy !== null) //if null was chosen, options will not be sorted
  {
      const sortKey = filters.sortBy; //whatver user chose to sort by is saved into sortKey
      const isAscending = filters.sortOrder === "asc"; //check if it should be ascending (if so we will sort accordining). isAscending == true/false
      console.log("Sorting by:", sortKey, "Ascending?", isAscending);
      results = bubbleSort(results, sortKey, isAscending);
  }
  showCards(results);
  console.log("showCards called with", results.length, "spots");
}


function matchesCuisine(foodSpot)
{
  if (filters.cuisine == null) //meaning view all cuisines
    return true;

  const cuisineParts = splitCuisine(foodSpot.cuisine.toLowerCase()); //breaks up a work if it has a dash like "Japanese-Italian"
  const isFusion = foodSpot.cuisine.includes("-"); //checks if the cuisine contains a dash

  if(cuisineParts.includes(filters.cuisine.toLowerCase()) || filters.cuisine.toLowerCase() === "fusion" && isFusion)
  {
    return true;
  }

  return false;
}

function matchesLocation(foodSpot)
{
  if(filters.location === null) //meaning view all locations
    return true;

  if (foodSpot.location.toLowerCase() === filters.location.toLowerCase())
  {
    return true;
  }

  return false;
}

// --------------------------------------------------------
// ----------------------- DROPDOWN -----------------------
// --------------------------------------------------------

function initializeDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  console.log("Dropdown count:", dropdowns.length);

  dropdowns.forEach(dropdown => setupDropdown(dropdown));
}

function setupDropdown(dropdown) {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  console.log("Attaching click to:", select);
  select.addEventListener('click', () => toggleDropdown(select, caret, menu));

  options.forEach(option => {
    option.addEventListener('click', () => {
      handleOptionClick(dropdown, option, select, caret, menu, options, selected);
    });
  });
}

//toggles the dropdown when you click the active/top dropdown cover
function toggleDropdown(select, caret, menu) {
  console.log("Dropdown was clicked");
  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
}

function handleOptionClick(dropdown, option, select, caret, menu, options, selected) {
  selected.innerText = option.innerText;

  //close dropdown
  select.classList.remove('select-clicked');
  caret.classList.remove('caret-rotate');
  menu.classList.remove('menu-open');
  options.forEach(opt => opt.classList.remove('active'));
  option.classList.add('active');

  //update filters
  const type = dropdown.dataset.type;
  const value = option.dataset.value;

  if (type === "cuisine")
  {
    filters.cuisine = value || null;
  } else if (type === "location")
  {
    filters.location = value || null;
  } else if (type === "sort")
  {
    filters.sortBy = option.dataset.sortKey || null;
    filters.sortOrder = option.dataset.sortOrder || null;
  }

  applyFilters();
}