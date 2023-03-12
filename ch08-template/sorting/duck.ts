import { Comparable } from "./comparable";

export class Duck implements Comparable<Duck> {
    public name!: string;
    public weight!: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    public compareTo(other: Duck): number {
        if (this.weight < other.weight) {
            return -1;
        } else if (this.weight === other.weight) {
            return 0;
        } else {
            return 1;
        }
    }

    public toString(): string {
        return `\n${this.name}: ${this.weight}`;
    }
}
