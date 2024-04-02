// DEPENDENCIES================
const Shapes = require("./shapes");

// Class that extends for shapes so we can rewrite the render function
class Square extends Shapes {
  // it will take 3 parameters , input user
  render(logoText, logoTextColor, shapeColor) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="75" y="35" rx="20" ry="20" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoTextColor}">${logoText}</text></svg>`;
  }
}

module.exports = Square;
