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
  '🏆',
  '💪',
  '🦁',
  '🤝',
  '⚡️',
  '⚖️',
  '🌟',
  '🏅',
  '😡',
  '🌟',
  '✊',
  '🛡️',
  '🙏',
  '💡',
  '🎯',
  '🦉',
  '🦸',
  '🔍',
  '😊'
];

const appThoughts = [
  '“Justice always finds a way.”',
  '“In the shadows, I find my strength.”',
  '“Feel the heat of justice.”',
  '“Iron will, unbreakable spirit.”',
  '“The night is darkest before the dawn.”',
  '“Victory through unity.”',
  '“The universe is my battlefield.”',
  '“Light up the darkness.”',
  '“No villain can escape the storm.”',
  '“Defend the weak, uphold the strong.”',
  '“For truth, for honor, for all.”',
  '“Where there is hope, there is a way.”',
  '“The cosmos bends to my will.”',
  '“I am the shield, I am the sword.”',
  '“Evil never sleeps, and neither do I.”',
  '“Fire and fury, I bring the fight.”',
  '“The stars are my guide.”',
  '“The winds whisper justice.”',
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