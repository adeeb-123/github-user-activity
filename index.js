#!/usr/bin/env node

import chalk from "chalk";
import readline from "node:readline";
import fetchUserInfo from "./utils/fetchUserInfo.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(chalk.blue.bold("🚀 Welcome to my CLI app"));

rl.question(chalk.yellow("What is your name? "), (name) => {
  console.log(chalk.green(`Hello, ${name}! You just ran your CLI app.`));

  fetchUserInfo(name)
  rl.close();
});