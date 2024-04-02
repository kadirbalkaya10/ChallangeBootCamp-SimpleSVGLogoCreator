// DEPENDENCIES================
const Circle = require("../lib/circle");

// Test
describe("Circle Class", () => {
  it("Should render a valid SVG with provided arguments", () => {
    // Examples input user
    const logoText = "ABC";
    const logoTextColor = "blue";
    const shapeColor = "red";

    // New circle object to acces render function
    const circle = new Circle();
    const render = circle.render(logoText, logoTextColor, shapeColor);

    expect(render).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoTextColor}">${logoText}</text></svg>`
    );
  });
});
