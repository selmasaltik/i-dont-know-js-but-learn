/* console.log('it works'); */
/* eslint-disable */

// const name = 'wes';
// const middle = "topher";
// const last = `bos`;

// const sentence = 'she\'s so cool';
// // const sentence = 'she\'s so cool\\';
// // const sentence = "she's so cool";
// // const sentence = "she's so \"cool\"";
// const sentence2 = `she's so "cool"`;

// const song = 'Ohhh\
// \
// ya\
// \
//   I like\
// pizza';

// const song2 = `Ohhh

// ya

//   I like
// pizza`;

// const html = `
//   <div>
//     <h2>Title</h2>
//   </div>
// `;

// const hello = 'hello my name is ' + name + ". Nice to meet you";

// let hello2 = 'hello my name is ';
// hello2 = hello2 + name;
// hello2 = hello2 + '. Nice to meet you';

// const hello3 = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

// const html2 = `
//   <div>
//     <h2>${name}</h2>
//     <p>${hello}</p>
//   </div>
// `;

// // console.log(html2);

// document.body.innerHTML = html2;

// const age = 100;
// const name = 'wes';
// typeof

const a = 10;
const b = 20;

const c = "10";
const d = "10";

console.log(a+b); // 30
console.log(a-b); // -10
console.log(a/b); // 0.5
console.log(a*b) // 200

console.log(a+c); // 1010
console.log(c*d); // 100

console.log(Math.round(20.5)); // 21
console.log(Math.round(20.2)); // 20
console.log(Math.floor(20.2)); // 20
console.log(Math.floor(20.7)); // 20
console.log(Math.ceil(20.99999)) // 21
console.log(Math.random()); // a random number between zero and one

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;

console.log(`Each kids gets ${eachKidGets}`);
console.log(`Dad gets ${dadGets}`);

// window.location = `https://${0.1 + 0.2}.com`;

const price = 1034;

console.log(10 ** 2); // 100
console.log(1000 ** 20); // 1e+60
console.log(1000 ** 200); // Infinity

//typeof Infinity --> "number"
//typeof -Infinity --> "number"

console.log(10 / 'dog'); // NaN (Not a Number)

//typeof NaN --> "number"

const person = {
  first: 'wes',
  last: 'bos',
  age: 100
};

//typeof person --> "object"

// person.first --> "wes"
// person.last --> "bos"
// person.age --> 100

let cat;
console.log(cat); //undefined

// person.cat --> undefined

let somethingUndefined;
const somethingNull = null;

const cher = {
  first: 'cher',
};

// cher.last --> undefined

const teller = {
  first: 'Raymond',
  last: 'Teller'
};

teller.first = 'Teller';
teller.last = null;

let isDrawing = false;

let age = 18;
const ofAge = age > 19;
console.log(ofAge); // false

age = 100;

age === 100 // true
age === 10 // false
100 === 1000 // false

let age2 = 100;

age === age2 // true

10 === 10 // true (check for both value and type)
10 == 10 // true
"10" == 10  // true (check for value)
"10" === 10 // false
