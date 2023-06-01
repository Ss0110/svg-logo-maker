const { Square, Triangle, Circle } = require("./lib/shapes");
const fs = require("fs");
const inquirer = require("inquirer");

function writeToFile(fileName, answers, callback) {
  const shape =
    answers.shape === "square"
      ? new Square()
      : answers.shape === "triangle"
      ? new Triangle()
      : new Circle();

  shape.setColor(answers.bgColor);

  const svg = `
      <svg version="1.1" width="300" height="200">
        <g>
          ${shape.draw()}
          <text x="105" y="110" text-anchor="middle" font-size="40" fill="${
            answers.color
          }">${answers.text}</text>
        </g>
      </svg>`;

  fs.writeFile(fileName, svg, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg");
      callback();
    }
  });
}

function promptUser(callback) {
  inquirer
    .prompt([
      {
        name: "text",
        message: "What 3 letters you want on your logo?",
        type: "input",
      },
      {
        name: "color",
        message: "What color would you like to use for the letters?",
        type: "input",
      },
      {
        name: "shape",
        message: "What shape would you like to use for your logo?",
        choices: ["square", "triangle", "circle"],
        type: "list",
      },
      {
        name: "bgColor",
        message: "What color do you want your shape to be?",
        type: "input",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Must enter no more than 3 characters");
        promptUser(callback);
      } else {
        writeToFile("logo.svg", answers, callback);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

promptUser(() => {});
