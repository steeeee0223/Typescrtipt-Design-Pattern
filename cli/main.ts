import { Command } from "commander";
import chalk from "chalk";

import { demo } from "./commands/demo";
import { sys } from "typescript";

const program = new Command();

program.version("1.0.0").description("My CLI");

program.option("-w, --watch", "Enable watch mode");

program
    .command("test")
    .description("A test command")
    .action(() => {
        console.log(chalk.green("CLI works..."));
    });

program
    .command("demo")
    .description("Start demo apps")
    .action(async () => {
        while (true) {
            const { name, drivers } = await demo();
            if (name === "Quit") {
                console.log(chalk.red("Quit..."));
                break;
            }

            console.log(chalk.green(`\n============= ${name} =============`));
            for (const { drive, args } of drivers) {
                if (args) {
                    drive.main(...args);
                } else {
                    drive.main();
                }
            }
            console.log(chalk.green("==============================\n"));
        }
    });

program
    .command("hello <name>")
    .description("Say hello to <name>")
    .action((name: string) => {
        console.log(chalk.blue(`Hello ${name}`));
    });

program.parse(process.argv);
