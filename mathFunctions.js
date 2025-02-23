
// mathFunctions.js

// Returns square of a number
function square(n) {
  return n * n;
}

// Converts inches to mm
function inchesToMM(inches) {
  return inches * 25.4;
}

// Returns the square root of a number (without using Math.sqrt)
function squareRoot(n) {
  let guess = n / 2;
  let error = 0.00001;
  while (Math.abs(guess * guess - n) > error) {
    guess = (guess + n / guess) / 2;
  }
  return guess;
}

// Returns cube of a number
function cube(n) {
  return n * n * n;
}

// Returns the area of a circle given the radius
function circleArea(radius) {
  return 3.141592653589793 * radius * radius; // No Math.PI usage
}

// Returns a greeting with a given name
function greeting(name) {
  return `Hello, ${name}!`;
}

export { square, inchesToMM, squareRoot, cube, circleArea, greeting };
