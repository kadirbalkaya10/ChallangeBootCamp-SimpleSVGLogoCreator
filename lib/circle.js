// DEPENDENCIES================
const Shapes = require("./shapes");

class Circle extends Shapes {
  // Class that extends for shapes so we can rewrite the render function
  render(logoText, logoTextColor, shapeColor) {
    // it will take 3 parameters , input user
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoTextColor}">${logoText}</text></svg>`;
  }
}

module.exports = Circle;
