// DEPENDENCIES================
const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

// Functions
const createSvg = function (logoText, logoTextColor, shape, shapeColor) {
  // will acces the all classes target their render function , and pass user inputs,and return user selected shape
  const circle = new Circle().render(logoText, logoTextColor, shapeColor);
  const triangle = new Triangle().render(logoText, logoTextColor, shapeColor);
  const square = new Square().render(logoText, logoTextColor, shapeColor);
  if (shape === "Triangle") return triangle;
  if (shape === "Circle") return circle;
  if (shape === "Square") return square;
};

// Init
createSvg();

module.exports = { createSvg };
