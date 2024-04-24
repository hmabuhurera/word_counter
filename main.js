#! use/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const wordCounter = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: (chalk.magenta.blue("\n \tPleace enter your sentence to count your word:"))
    }
]);
const resultMake = wordCounter.sentence.trim().split(" ");
console.log(resultMake);
