let types = {
  all: "black",
  bug: "#a8b81f",
  dragon: "#7038f8",
  electric: "#f9d030",
  fairy: "#fbb8ff",
  fighting: "#c13128",
  fire: "#f08130",
  flying: "#a890f0",
  ghost: "#6f5898",
  grass: "#78c84f",
  ground: "#e1c068",
  ice: "#99d8d8",
  normal: "#a7a877",
  poison: "#9f419f",
  psychic: "#f95887",
  rock: "#b8a038",
  steel: "#b8b9d0",
  water: "#6790f0",
};

/* HELPER FUNCTIONS */

// Get Pokemon Object from PokeDex JSON

function getPokemon(id) {
  for (let i = 0; i < pokedex.length; i++) {
    let pokemon = pokedex[i];
    if (pokemon.pkdx_id === id) {
      return pokemon;
    }
  }
  return null;
}

function setPokemonBackground(bgType) {
  let container = document.getElementById("pokemon-background");
  container.className = "bg bg-" + bgType;
}

/* CREATION OF TYPE FILTERS */

function showTypes() {
  let filtersContainer = document.getElementById("type-filters");
  for (t in types) {
    let type = document.createElement("span");
    type.className = "badge ml-2 mr-2 py-2 px-3 text-uppercase type-filter";
    type.id = t;
    type.innerHTML = t;
    type.style.border = "3px solid " + types[t];
    type.style.color = types[t];
    filtersContainer.appendChild(type);
  }
}

showTypes();

document.querySelectorAll(".type-filter").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelectorAll(".type-filter").forEach((element) => {
      element.style.backgroundColor = "transparent";
      element.style.color = types[element.id];
      element.classList.remove("active");
    });

    document.getElementById("pokedex-grid").innerHTML = "";
    element.style.backgroundColor = types[element.id];
    element.style.color = "white";
    element.classList.add("active");
    showSelectedType(element.id);
    cardEventListeners();
  });

  element.addEventListener("mouseover", () => {
    if (!element.classList.contains("active")) {
      element.style.backgroundColor = types[element.id];
      element.style.color = "white";
    }
  });

  element.addEventListener("mouseleave", () => {
    if (!element.classList.contains("active")) {
      element.style.backgroundColor = "transparent";
      element.style.color = types[element.id];
    }
  });
});

/* CREATION OF CARD GRID */

function createAndDisplayCard(pokemon) {
  let grid = document.getElementById("pokedex-grid");
  let column = document.createElement("div");
  column.className = "col mb-4";

  let card = document.createElement("div");
  card.className = "card my-card h-100 text-center";
  card.id = pokemon.pkdx_id;
  card.setAttribute("data-toggle", "modal");
  card.setAttribute("data-target", "#pokemon-detail");

  let image = document.createElement("img");
  image.className = "card-img-top my-card-img";
  image.src = pokemon.art_url;
  image.alt = pokemon.name;

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title my-title";
  cardTitle.innerHTML = pokemon.name;

  let cardText = document.createElement("p");
  cardText.className = "card-text secondary-text";
  cardText.innerHTML = "#" + pokemon.pkdx_id;

  grid.appendChild(column);
  column.appendChild(card);
  card.appendChild(image);
  card.appendChild(cardBody);

  for (let i = 0; i < pokemon.types.length; i++) {
    let type = document.createElement("span");
    type.className =
      "badge text-light ml-1 mr-1 mb-2 py-2 px-3 text-uppercase type";
    type.innerHTML = pokemon.types[i];
    type.style.backgroundColor = types[pokemon.types[i]];
    cardBody.appendChild(type);
  }

  cardBody.appendChild(cardText);
  cardBody.appendChild(cardTitle);
}

function showSelectedType(type) {
  if (type === "all") {
    for (let i = 0; i < pokedex.length; i++) {
      createAndDisplayCard(pokedex[i]);
    }
  } else {
    for (let i = 0; i < pokedex.length; i++) {
      let pokemon = pokedex[i];
      if (pokemon.types.includes(type)) {
        createAndDisplayCard(pokemon);
      }
    }
  }
}

/* CARD EVENT LISTENERS */

function cardEventListeners() {
  document.querySelectorAll(".my-card").forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.children[0].classList.add("float");
    });

    element.addEventListener("mouseleave", () => {
      element.children[0].classList.remove("float");
    });

    element.addEventListener("click", () => {
      createAndDisplayModal(getPokemon(Number(element.id)));
    });
  });
}

/* CREATION OF MODAL */

function createAndDisplayModal(pokemon, type) {
  document.getElementById("pokemon-detail-title").innerHTML =
    "#" + pokemon.pkdx_id + " " + pokemon.name;

  document.getElementById("pokemon-detail-types").innerHTML = "";

  for (let i = 0; i < pokemon.types.length; i++) {
    let type = document.createElement("span");
    type.className = "badge text-light mr-1 py-2 px-2 text-uppercase";
    type.innerHTML = pokemon.types[i];
    type.style.backgroundColor = types[pokemon.types[i]];
    type.style.fontSize = "20px";
    document.getElementById("pokemon-detail-types").appendChild(type);
  }

  if (pokemon.types[0] === "water") {
    setPokemonBackground("water");
  } else if (pokemon.types[0] === "flying") {
    setPokemonBackground("sky");
  } else if (pokemon.types[0] === "ice") {
    setPokemonBackground("ice");
  } else if (pokemon.types[0] === "ground" || pokemon.types[0] === "rock") {
    setPokemonBackground("ground");
  } else {
    if (pokemon.types.includes("water")) {
      setPokemonBackground("water");
    } else if (pokemon.types.includes("flying")) {
      setPokemonBackground("sky");
    } else if (
      pokemon.types.includes("ground") ||
      pokemon.types.includes("rock")
    ) {
      setPokemonBackground("ground");
    } else {
      setPokemonBackground("land");
    }
  }

  let pokemonImage = document.getElementById("pokemon-detail-image");
  pokemonImage.src = pokemon.art_url;
  pokemonImage.alt = pokemon.name;
  pokemonImage.style.maxWidth = "100%";
  // pokemonImage.classList.add("float");

  document.getElementById("pokemon-detail-text").innerHTML =
    pokemon.description;
  if (pokemon.evolutions.length > 0) {
    let evolutions = "";
    for (let j = 0; j < pokemon.evolutions.length; j++) {
      evolutions += pokemon.evolutions[j]["to"];
      if (j === pokemon.evolutions.length - 1) {
        evolutions += ".";
      } else {
        evolutions += ", ";
      }
      document.getElementById(
        "pokemon-detail-evolutions"
      ).innerHTML = evolutions;
    }
  } else {
    document.getElementById("pokemon-detail-evolutions").innerHTML =
      "Does not evolve.";
  }
}

/* SCROLL TO TOP */

const scrollTopButton = document.getElementById("scroll-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopButton.classList.remove("hide");
  } else {
    scrollTopButton.classList.add("hide");
  }
}

function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

scrollTopButton.addEventListener("click", scrollTop);

showSelectedType("all");
document.getElementById("all").classList.add("active");
document.getElementById("all").style.backgroundColor = types["all"];
document.getElementById("all").style.color = "white";
cardEventListeners();
