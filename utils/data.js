const names = [
  'Thunderstrike',
  'Shadowhawk',
  'Blazeheart',
  'Ironclad',
  'Silverfang',
  'MysticWave',
  'PhantomKnight',
  'StarBlazer',
  'NovaFury',
  'Eclipse',
  'Stormrider',
  'Shadowblade',
  'Captain Valor',
  'SolarFlare',
  'Iron Sentinel',
  'Arcane',
  'Tempest',
  'Nightshade',
  'Blaze',
  'Vortex',
  'Spectre',
  'Shadow',
  'Cosmic Shield',
  'Hawkeye',
  'Windstorm',
  'Galactic Guardian',
  'Lunar Knight',
  'Zephyr',
  'Thunderbolt',
  'Guardian',
  'Aether',
  'Zenith',
  'Vigil',
  'Radiance',
  'Onyx',
  'Seraph',
  'Tempest Knight',
  'Zephyr Wind',
  'Firebrand',
  'Steelheart',
  'Psylocke',
  'Astrid',
  'Phoenix',
  'Titan',
  'Inferno',
  'Astra',
  'Echo',
  'Blade',
  'Revenant',
  'Valor',
  'Zenith',
  'Cipher',
  'Phantom',
  'Sentinel',
  'Onyx Shadow',
  'Sapphire',
  'Cyclone',
  'Aurora',
  'Griffin',
  'Falcon',
  'Siren',
  'Lyra',
  'Shade',
  'Phoenix Blaze',
  'Nyx',
  'Stellar',
  'Vector',
  'Nova',
];

const appReactions = [
  '“Victory.”',
  '“Strength.”',
  '“Courage.”',
  '“Unity.”',
  '“Power.”',
  '“Justice.”',
  '“Hope.”',
  '“Honor.”',
  '“Fury.”',
  '“Glory.”',
  '“Resolve.”',
  '“Valor.”',
  '“Faith.”',
  '“Light.”',
  '“Focus.”',
  '“Wisdom.”',
  '“Bravery.”',
  '“Truth.”',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
`${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random reactions that we can add to user object.
const getRandomReactions = (int) => {
const results = [];
for (let i = 0; i < int; i++) {
  results.push({
    reactionName: getRandomArrItem(appReactions),
    score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
  });
}
return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomReactions };