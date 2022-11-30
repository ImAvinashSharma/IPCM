require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const Cryptr = require("cryptr");
const hash = require("object-hash");
const cryptr = new Cryptr(process.env.CYPHER);
const crypt = hash(cryptr.encrypt(uuidv4().replace(/-/g, "@") + Date.now())) + uuidv4().slice(0, process.env.PASSWORD_SPECIAL);

function randomIntFromInterval() {
  const min = process.env.MIN;
  const max = process.env.MAX;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

const specialChars = process.env.SPECIAL_CHARS.split(" ");

function generatePassword() {
  let password = crypt.split("");
  for (let i = 0; i < process.env.PASSWORD_SPECIAL; i++) {
    const idx = randomIntFromInterval();
    password[idx] = specialChars[idx % 13];
  }
  for (let i = 0; i < process.env.PASSWORD_STRING; i++) {
    const idx = randomIntFromInterval();
    if (isLetter(password[idx])) {
      password[idx] = password[idx].toUpperCase();
    }
  }
  return password.join("");
}

exports = generatePassword;
