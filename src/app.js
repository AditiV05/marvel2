const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];
  players.forEach((player, index) => {
    detailedPlayers.push({
      name: player,
      strength: getRandomStrength(),
      image: "images/super-" + (index + 1) + ".png",
      type: index % 2 === 0 ? "hero" : "villain",
      id: index + 1,
    });
  });
  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

const buildPlayers = (players, type) => {
  let fragment = document.createElement("div");
  players
    .filter((player) => player.type === type)
    .forEach((player) => {
      let playerElement = document.createElement("div");
      playerElement.classList.add("player");

      let imageElement = document.createElement("img");
      imageElement.setAttribute("src", player.image);

      let nameElement = document.createElement("div");
      nameElement.className = "name";
      nameElement.textContent = player.name;

      let strengthElement = document.createElement("div");
      strengthElement.className = "strength";
      strengthElement.textContent = player.strength;

      playerElement.append(imageElement, nameElement, strengthElement);
      fragment.appendChild(playerElement);
    });
  return fragment.innerHTML;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
