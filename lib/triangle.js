// DEPENDENCIES================
const Shapes = require("./shapes");

// Class that extends for shapes so we can rewrite the render function
class Triangle extends Shapes {
  // it will take 3 parameters , input user
  render(logoText, logoTextColor, shapeColor) {
    return `<svg version="1.1"
    width="300" height="400"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="50, 13.397 100, 100 0, 100" fill="${shapeColor}" transform ="translate(45,-20),scale(2.3)"/>
    <text x="160" y="150" font-size="60" text-anchor="middle" fill="${logoTextColor}">${logoText}</text>
    </svg>
   `;
  }
}

module.exports = Triangle;
