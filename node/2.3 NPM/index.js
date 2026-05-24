var generateName = require('sillyname');

import generateName from "sillyname"
var sillyName = generateName();

console.log(`My name is ${sillyName}`);

import generateSuperhero from "superheroes"
var superHero = generateSuperhero();

console.log(`I am a ${superHero}`);

import { randomSuperhero } from "superheroes";
const name = randomSuperhero();
console.log(`I am ${name}`);