import readline from "node:readline/promises";

import { CaffeineBeverageWithHook } from "./caffeineBeverage";

export class CoffeeWithHook extends CaffeineBeverageWithHook {
    public brew(): void {
        console.log("Dripping coffee through filter...");
    }

    public addCondiments(): void {
        console.log("Adding sugar and milk...");
    }

    public async customerWantsCondiments(): Promise<boolean> {
        const answer = await this.getUserInput();
        return answer.startsWith("y");
    }

    private async getUserInput(): Promise<string> {
        let answer: string = "n";
        const prompt = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        try {
            answer = await prompt.question(
                "Would you like milk and suger with your coffee (y/n)? "
            );
        } catch (error) {
            console.log("IO error trying to read your answer...");
        }
        prompt.close();

        return answer;
    }
}
