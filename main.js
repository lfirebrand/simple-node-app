const greetings = require("./greeting.js");

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

// "Hola"
greetings.greetingSpanish();

// "Hallo"
greetings.greetingIcelandic();

// Require new module
const maths = require("./math.js");

// returns 20
maths.multiplyVariables(5, 4);

// returns 9
maths.addVariables(5, 4);

// returns 40
maths.multiplyVariables(10, 4);

// returns 14
maths.addVariables(10, 4);

// returns 100
maths.multiplyVariables(10, 10);

// returns 20
maths.addVariables(10, 10);
