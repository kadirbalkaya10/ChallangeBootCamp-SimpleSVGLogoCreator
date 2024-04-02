// DEPENDENCIES================
const Triangle = require("../lib/triangle");

// Test
describe("Triangle Class", () => {
  it("Should render a valid SVG with provided arguments", () => {
    // Examples input user
    const logoText = "ABC";
    const logoTextColor = "blue";
    const shapeColor = "red";

    // New triangle object to acces render function
    const triangle = new Triangle();
    const render = triangle.render(logoText, logoTextColor, shapeColor);

    expect(render).toEqual(`<svg version="1.1"
    width="300" height="400"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="50, 13.397 100, 100 0, 100" fill="${shapeColor}" transform ="translate(45,-20),scale(2.3)"/>
    <text x="160" y="150" font-size="60" text-anchor="middle" fill="${logoTextColor}">${logoText}</text>
    </svg>
   `);
  });
});
