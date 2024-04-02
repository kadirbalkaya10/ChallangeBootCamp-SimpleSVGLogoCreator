// DEPENDENCIES================

const Square = require("../lib/square");

// Test
describe("Square Class", () => {
  it("Should render a valid SVG with provided arguments", () => {
    // Examples input user
    const logoText = "ABC";
    const logoTextColor = "blue";
    const shapeColor = "red";

    // New square object to acces render function
    const square = new Square();
    const render = square.render(logoText, logoTextColor, shapeColor);

    expect(render).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="75" y="35" rx="20" ry="20" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoTextColor}">${logoText}</text></svg>`
    );
  });
});
