const fortunes = [
  "1 - fortune",
  "2 - fortune",
  "3 - fortune",
  "4 - fortune",
  "5 - fortune",
];
const randomFortune = () => fortunes[Math.floor(Math.random() * fortunes.length)];

exports.randomFortune = randomFortune