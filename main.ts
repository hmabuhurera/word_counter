#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { blob } from "stream/consumers";

const wordCounter : {
    sentence : string
} = await inquirer.prompt (
    [
        {
            name: "sentence",
            type: "input",
            message:(chalk.magenta.blue ("\n \tPleace enter your sentence to count your word:"))

        }
    ]
);

const resultMake = wordCounter.sentence.trim().split(" ")

console.log(resultMake)

console.log(chalk.magenta(`\n \t Total Word Count is:${resultMake.length}`));