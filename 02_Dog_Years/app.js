// set a human's age.
const myAge = 20;

// dogs mature at 10.5 faster in the first two years.
let earlyYears = 2;
earlyYears *= 10.5;

/*
  subtracts years already accounted for from the human's age.
  Then, multiply 4 since dogs mature 4 times of human each year.
*/
let laterYears = (myAge - 2) * 4;

// calculate human age in dog years.
let myAgeInDogYears = earlyYears + laterYears;

// convert my name to all lowercase letters.
const myName = 'Yukari'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in
human years which is ${myAgeInDogYears} years old in dog years.`);