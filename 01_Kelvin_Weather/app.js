// forecast today
const kelvin = 273;

// calculate Celsius
const celsius = kelvin - 273;

// calculate Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// round down Fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// convert Celsius to Newton
let newton = celsius * (33 / 100);

// round down Newton
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
