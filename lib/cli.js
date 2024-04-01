const inquirer = require("inquirer");
const fs = require("fs/promises");

class CLI {
  constructor(output = []) {
    this.output = output;
  }

  // Function for questions
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "logoText",
          message: "Please enter your logo text",
          validate: (input) =>
            input.length <= 3 ? true : "Logo text can only be 3 characters",
        },
        {
          type: "input",
          name: "logoTextColor",
          message:
            "Please enter text color for your logo.(Color keywords or hexadecimal number)",
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
        },
      ])
      .then(({ logoText, logoTextColor, shape, shapeColor }) => {
        this.output = [logoText, logoTextColor, shape, shapeColor];
        this.renderSvg();

        console.log(this.output);
      });
  }
}

module.exports = CLI;
