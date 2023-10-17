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
    "Slingo"
];

// Initialize players with image and strength
const initPlayers = (players) => {
    return players.map((player, index) => ({
        name: player,
        strength: getRandomStrength(),
        image: `./images/superhero-${index + 1}.png`,
    }));
}

// Getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    const filteredPlayers = players.filter((player, index) => {
        if (type === 'hero') {
            return index % 2 === 0;
        } else if (type === 'villain') {
            return index % 2 !== 0;
        }
    });

    const fragment = filteredPlayers.map((player) => `
        <div class="player">
            <img src="${player.image}" alt="${player.name}">
            <div class="name">${player.name}</div>
            <div class="strength">${player.strength}</div>
        </div>
    `).join('');

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
