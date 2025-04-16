/**
 * Data Catalog Project Starter Code - SEA Stage 2
 */

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------- DATA -----------------------
// ----------------------------------------------------
// ----------------------------------------------------

// Role: contains the main array of food spot objects
// AND the empty array that tracks a user's filter options

// Each object includes info like name, cuisine, location, price, rating(my bunnyRating lol), image, and tags.
// These objects will then be dynamically rendered into cards and filtered.

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
  {
    name: "Borneo Eatery",
    cuisine: "Indonesian",
    location: "626",
    price: "$$",
    bunnyRating: 4.5,
    image: "assets/images/borneoEatery.avif",
    tags: ["noodles", "skewers", "curry", "roti", "laksa", "satay"]
  },
  {
    name: "Kyoto Gyukatsu",
    cuisine: "Japanese",
    location: "626",
    price: "$$",
    bunnyRating: 3.5,
    image: "assets/images/KyotoGyukatsu .jpg",
    tags: ["sushi", "curry", "udon", "gyukatsu"]
  },
  {
    name: "Ramen Nagi",
    cuisine: "Japanese",
    location: "626",
    price: "$$",
    bunnyRating: 4.5,
    image: "assets/images/ramenNagi.avif",
    tags: ["ramen", "rice bowl", "fried chicken", "karaage"]
  },
  {
    name: "Five Star Seafood Restaurant",
    cuisine: "Chinese",
    location: "626",
    price: "$$",
    bunnyRating: 4,
    image: "assets/images/fiveStarSeafood.jpg",
    tags: ["dim sum", "chinese banquet", "shumai", "cheung fun"]
  },
  {
    name: "Pepper Lunch",
    cuisine: "Japanese",
    location: "626",
    price: "$",
    bunnyRating: 4,
    image: "assets/images/pepperLunch.jpg",
    tags: ["hot plate", "beef", "curry", "simple"]
  },
  {
    name: "Summer Rolls",
    cuisine: "Vietnamese",
    location: "626",
    price: "$$",
    bunnyRating: 5,
    image: "assets/images/summerRolls.jpg",
    tags: ["spring rolls", "pho", "banh xeo"]
  },
  {
    name: "Formosa Aroma",
    cuisine: "Taiwanese",
    location: "626",
    price: "$$$",
    bunnyRating: 4,
    image: "assets/images/formosaAroma.jpeg",
    tags: ["boba", "drinks", "beverage", "milk tea", "tea"]
  },
  {
    name: "Okayama Kobo Bakery & Cafe",
    cuisine: "Japanese",
    location: "Little Tokyo",
    price: "$$",
    bunnyRating: 4.5,
    image: "assets/images/okayama.jpg",
    tags: ["matcha", "drinks", "beverage", "buns", "bread"]
  },
  {
    name: "Wushiland",
    cuisine: "Taiwanese",
    location: "626",
    price: "$$",
    bunnyRating: 4.5,
    image: "assets/images/wushiland.jpg",
    tags: ["boba", "drinks", "beverage", "milk tea", "tea"]
  },
  {
    name: "Odd One Out Tea",
    cuisine: "Taiwanese",
    location: "Pasadena",
    price: "$$$",
    bunnyRating: 4,
    image: "assets/images/oddOneOut1.jpg",
    tags: ["boba", "drinks", "beverage", "milk tea", "tea", "fruit tea"]
  },
  {
    name: "Dai Ho Restaurant",
    cuisine: "Taiwanese",
    location: "626",
    price: "$$",
    bunnyRating: 4,
    image: "assets/images/daiHo.jpg",
    tags: ["beef noodle soup"]
  },
  {
    name: "Kim Kee Noodle House",
    cuisine: "Chinese",
    location: "626",
    price: "$$",
    bunnyRating: 4.5,
    image: "assets/images/kimKeeNoodleHouse.jpg",
    tags: ["clean", "comfort food", "noodles", "chiu chow", "teochew", "youtiao"]
  },
  {
    name: "Killer Noodle",
    cuisine: "Japanese",
    location: "Sawtelle",
    price: "$$",
    bunnyRating: 3.5,
    image: "assets/images/killerNoodle.jpg",
    tags: ["ramen", "peanut noodles", "karaage"]
  },
  {
    name: "Gindaco Highball Sakaba",
    cuisine: "Japanese",
    location: "Sawtelle",
    price: "$$$",
    bunnyRating: 5,
    image: "assets/images/Gindaco.jpg",
    tags: ["takoyaki", "sushi", "hand roll"]
  },
  {
    name: "B Sweet Dessert Bar",
    cuisine: "American",
    location: "Sawtelle",
    price: "$",
    bunnyRating: 4,
    image: "assets/images/bSweet.avif",
    tags: ["dessert", "ube", "ice cream", "donuts", "soft serve"]
  },
  {
    name: "Tea Master Matcha Cafe and Green Tea Shop",
    cuisine: "Japanese",
    location: "Little Tokyo",
    price: "$",
    bunnyRating: 4,
    image: "assets/images/teaMaster.jpg",
    tags: ["matcha", "beverage", "drink", "ice cream", "soft serve", "dessert"]
  },
  {
    name: "Anju House",
    cuisine: "Korean-Fusion",
    location: "Koreatown",
    price: "$$",
    bunnyRating: 4,
    image: "assets/images/anjuHouse.jpg",
    tags: ["tapas", "kimchi bacon pasta", "fusion", "open late", "tteokbokki"]
  },
  {
    name: "YUP DDUK LA",
    cuisine: "Korean",
    location: "Koreatown",
    price: "$$",
    bunnyRating: 4.5,
    image: "assets/images/YUPDDUKLA.jpeg",
    tags: ["tteokbokki"]
  },
  {
    name: "Zzamong",
    cuisine: "Korean-Chinese",
    location: "Koreatown",
    price: "$$",
    bunnyRating: 4.5,
    image: "assets/images/zzamong.png",
    tags: ["jjajangmyeon"]
  },
  {
    name: "Hangari Kalguksu",
    cuisine: "Korean",
    location: "Koreatown",
    price: "$$",
    bunnyRating: 5,
    image: "assets/images/hangari.png",
    tags: ["bossam", "bibimbap", "cold noodles"]
  },
  {
    name: "Ruen Pair",
    cuisine: "Thai",
    location: "Hollywood",
    price: "$$",
    bunnyRating: 5,
    image: "assets/images/ruenPair.jpg",
    tags: ["papaya salad", "pad thai", "tom yum soup", "curry", "shrimp cake", "thai tea"]
  },
  {
    name: "Quarters Korean BBQ",
    cuisine: "Korean",
    location: "Koreatown",
    price: "$$",
    bunnyRating: 5,
    image: "assets/images/quarters.avif",
    tags: ["kbbq", "beef", "pork belly", "pork jowl"]
  },
  {
    name: "Yunchun",
    cuisine: "Korean",
    location: "Koreatown",
    price: "$$",
    bunnyRating: 5,
    image: "assets/images/yunchun.jpg",
    tags: ["kimchi", "soup", "cold noodles", "tofu soup"]
  },
  {
    name: "Young Dong Restaurant",
    cuisine: "Korean",
    location: "Koreatown",
    price: "$$",
    bunnyRating: 5,
    image: "assets/images/youngDong.jpg",
    tags: ["comfort food", "soup", "sul lung tang"]
  },
  {
    name: "Luscious Dumplings",
    cuisine: "Chinese",
    location: "626",
    price: "$$",
    bunnyRating: 4.5,
    image: "assets/images/LusciousDumplings.jpg",
    tags: ["dumplings", "michelen", "soup"]
  },

];

//keeps track of user's current filter selections
let filters = {
  name: null,
  cuisine: null,
  location: null,
  sortBy: null,
  sortOrder: null,
  //tags is not needed here because i'm already checking for that in the matchesSearch() function
};

// ----------------------------------------------------
// -----------------------------------------------------
// ------------------ EVENT LISTENERS ------------------
// -----------------------------------------------------
// ----------------------------------------------------
// This video helped me understand event listeners better:
// - https://youtu.be/YiOlaiscqDY?si=6n6MZ7MIj84G-KIF 

// Role: sets up initial event listeners when the page loads:
// - initializes search bar
// - initializes dropdown filter logic
// - initializes randomizer (aka the surpriseMe)
// - shows all cards by default so it's loaded in once the user clicks the page

document.addEventListener("DOMContentLoaded", () =>
  {
  showCards();

  ///for the search bar
  initializeSearchBar();

  ///for the dropdown buttons
  initializeDropdowns();

  //for the surprise me section
  initializeRandomizer()
  
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
// -----------------------------------------------------
// ------------------- DISPLAY CARDS -------------------
// -----------------------------------------------------
// -----------------------------------------------------

// Role: creating and displaying cards on the page.
// - showCards() handles the actual display of the passed array (filtered or not)
// - editCardContent() updates each card's text, image, and rating based on foodSpots array


//shows all cards without a parameter,
// AND if you pass in a filtered list, it will show cards that reflects those filters
function showCards(spots = foodSpots)
{
  const cardContainer = document.getElementById("card-container");
  const noResultsMessage = document.getElementById("noResultsMessage");
  cardContainer.innerHTML = ""; //to clear existing content so there's no overlap

  if (spots.length === 0)
  {
    console.log("No results were found");
    noResultsMessage.style.display = "block";
    return;
  } else
  {
    noResultsMessage.style.display = "none";
  }

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
function editCardContent(card, foodSpot)
{
  card.style.display = "block";
  updateCardImage(card, foodSpot);
  updateCardText(card, foodSpot);
  updateCardBunnyRating(card, foodSpot);
}

// ------------------------------------------------------
// -------------------- CARD CONTENT --------------------
// ------------------------------------------------------
// This helped me figure out how to access specific elements from my document(index.html) to use JS:
// - https://youtu.be/HlIxeXxSD4I?si=WJLAOu3SvL6dTwCr

// Role: updates individual parts of a card
// - updateCardImage(), updateCardText(), and updateCardBunnyRating()
//   work together to fill the cards based on a foodSpot object's data

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
// ------------------------ SORTING -----------------------
// --------------------------------------------------------
// --------------------------------------------------------

// Role: controls how the data is filtered and searched

// --------------------------------------------------------
// ------------------------- SEARCH -----------------------
// --------------------------------------------------------
// This video helped me get started, but I eventually branched off on my own:
// - https://youtu.be/wxz5vJ1BWrc?si=DLPpIUfNc8mahkRT

// Role: search() filters based on keyword matches in name, tags, etc.
// - initializeSearchBar() for event handling
// - matchesSearch(foodSpot) search bar logic, works with the filtering system so you can search through filtered options

function initializeSearchBar() {
  const searchBar = document.getElementById("search");
  searchBar.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    filters.name = e.target.value;
    // search(searchString); //because we're applying the search bar to all the other filters as well
    applyFilters();
  });
}

//the search bar logic
//if you type anything in the search bar, the function compares your input to food spots that contain name,
// cuisine, location, price, or tags include the search word.
function matchesSearch(foodSpot)
{
  if (filters.name === null || filters.name.trim() === "")
    return true;

  const searchString = filters.name.toLowerCase();

  const nameMatch = foodSpot.name.toLowerCase().includes(searchString);
  const cuisineMatch = foodSpot.cuisine.toLowerCase().includes(searchString);
  const locationMatch = foodSpot.location.toLowerCase().includes(searchString);
  const priceMatch = foodSpot.price.includes(searchString);
  const tagMatch = (foodSpot.tags || []).some(tag => tag.toLowerCase().includes(searchString));

  return nameMatch || cuisineMatch || locationMatch || priceMatch || tagMatch;
}

// ---------------------------------------------------------
// --------------------- SORTING HELPERS -------------------
// ---------------------------------------------------------

// Role: helper functions that help with sorting
// - bubbleSort() sorts the array by a key (e.g., price, rating, name)
// - splitCuisine() takes in a string (like Japanese-Italian) and splits it based off of the dash,
//   needed for fusion restaurants
// - matchesCuisine(foodSpot) check for cuisines that match what the user chose on the dropdown
// - matchesLocation(foodSpot) check for locations that match what the user chose on the dropdown
// - applyFilters() combines dropdown filter logic and sort logic

// applyFilters uses:
// - matchesCuisine(foodSpot) && matchesLocation(foodSpot) to check for cuisines and locations that match what the user chose on the dropdown

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
        a = a.length; //because of $, $$, $$$
        b = b.length;
      }

      if ((isLowestFirst == true && a > b) || (!isLowestFirst == true && a < b )) //if choosing desc
      {
        //swap if it's wrong order
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

    if (!matchesSearch(foodSpot))
      continue;

    results.push(foodSpot); //as it's passed all the above filters alr, push it into my matches
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


// --------------------------------------------------------
// ----------------------- DROPDOWN -----------------------
// --------------------------------------------------------
// This video was incredibly helpful:
// - https://youtu.be/hBbrGFCszU4?si=ip7GRhuIZXZkYYpg

// Role: handles dropdown interface and adjusts filter array to filter for for Cuisine, Location, and Sort By
// - initializeDropdowns() attaches interactivity to each dropdown
// - handleOptionClick() updates the filters array (from the very beginning) and reapplies filtering

function initializeDropdowns()
{
  const dropdowns = document.querySelectorAll('.dropdown');
  console.log("Dropdown count:", dropdowns.length);

  dropdowns.forEach(dropdown => setupDropdown(dropdown));
}

function setupDropdown(dropdown)
{
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
function toggleDropdown(select, caret, menu)
{
  console.log("Dropdown was clicked");
  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
}

function handleOptionClick(dropdown, option, select, caret, menu, options, selected)
{
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


// --------------------------------------------------------
// --------------------------------------------------------
// ---------------------- SURPRISE ME ---------------------
// --------------------------------------------------------
// --------------------------------------------------------

// Role: handles the “Surprise Me” plate spinner feature:
// - randomizeFoodSpot() chooses a random foodSpot, spins the plate, and replaces it with a card
// - createCardFromData() clones the card template and populates it with the chosen data
// - initializeRandomizer() for event listener

function randomizeFoodSpot() {
  console.log("Clicked the plate");
  const plateWrapper = document.querySelector(".plate-wrapper");
  const randomizer = document.querySelector(".randomizer");
  const tryText = document.getElementById("tryText");

  const randomIndex = Math.floor(Math.random() * foodSpots.length);
  const randomSpot = foodSpots[randomIndex];

  plateWrapper.classList.add("spin-animation");

  setTimeout(() => {
    tryText.textContent = "Try...";
    const newCard = createCardFromData(randomSpot);
    randomizer.replaceChild(newCard, plateWrapper);
  }, 1000);
}

function createCardFromData(foodSpot) {
  const templateCard = document.querySelector(".card");
  const newCard = templateCard.cloneNode(true);
  newCard.style.display = "block";
  editCardContent(newCard, foodSpot);
  return newCard;
}

function initializeRandomizer() {
  console.log("Attaching click to: plate-wrapper");
  document.querySelector(".plate-wrapper").addEventListener('click', () =>
    randomizeFoodSpot());
}