import inquirer, { QuestionCollection } from "inquirer";

import { patterns } from "./demo.data";
import { Result } from "./demo.types";

export async function demo(): Promise<Result> {
    const options = [...Object.keys(patterns), "Quit"];
    const question1: QuestionCollection = {
        prefix: "💡",
        type: "list",
        message: "Choose a pattern to demo:",
        choices: options,
        name: "name",
    };
    const { name } = await inquirer.prompt(question1);

    if (name === "Quit") {
        return { name } as Result;
    }

    const apps = patterns[name];
    const question2: QuestionCollection = {
        prefix: "💡",
        type: "list",
        message: "Select an app:",
        choices: Object.keys(apps),
        name: "appName",
    };
    const { appName } = await inquirer.prompt(question2);
    return { name: appName, drivers: apps[appName] };
}
