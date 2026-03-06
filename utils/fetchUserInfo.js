import axios from "axios";
import formatEvent from "./formatEvents.js";
import chalk from "chalk";

async function fetchUserInfo(userName) {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}/events`,
    );

    console.log(chalk.blue.bold(`\nGitHub Activity for ${userName}\n`));
    data.slice(0, 10).forEach((event) => {
      const message = formatEvent(event);
      console.log(chalk.green("✔"), message);
    });
  } catch (error) {
    console.log("User not found"  , error);
  }
}

export default fetchUserInfo;
