// DEPENDENCIES================
const inquirer = require("inquirer");
const fs = require("fs/promises");
const { createSvg } = require("./createSvg");

class CLI {
  constructor() {}

  // Function for questions
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "logoText",
          message: "Please enter your logo text",
          validate: (input) => {
            if (input.length > 3) {
              return "Logo text can only be 3 characters";
            } else if (!input) {
              return "Can't leave empty";
            } else {
              // Input is valid (length <= 3 and not empty)
              return true;
            }
          },
        },
        {
          type: "input",
          name: "logoTextColor",
          message:
            "Please enter text color for your logo.(Color keywords or hexadecimal number)",
          validate: (input) => (input ? true : "Can not leave empty"),
        },
        {
          type: "list",
          name: "shape",
          message: "Please select your shape for svg",
          choices: ["Circle", "Triangle", "Square"],
        },
        {
          type: "input",
          name: "shapeColor",
          message:
            "Please enter shape color for your logo.(Color keywords or hexadecimal number)",
          validate: (input) => (input ? true : "Can not leave empty"),
        },
      ]) // It will return a promise so we can use .then() method
      .then(({ logoText, logoTextColor, shape, shapeColor }) => {
        // For validation take user input for colors and convert to lower case
        const lowerCaseLogoTextColor = logoTextColor.toLowerCase();
        const lowerCaseShapeColor = shapeColor.toLowerCase();

        this.logoText = logoText;

        // Display
        const output = createSvg(
          logoText,
          lowerCaseLogoTextColor,
          shape,
          lowerCaseShapeColor
        );
        // takes the user input and create  svg for user
        fs.writeFile(`./examples/${this.logoText}.svg`, output, () => {
          return "SVG created succesfully!!!";
        });
      });
  }
}

module.exports = CLI;
