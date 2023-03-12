import { MyArray } from "./comparable";
import { Duck } from "./duck";

export class DuckSortTestDrive {
    public static main(): void {
        const ducks: Duck[] = [
            new Duck("Daffy", 8),
            new Duck("Dewey", 2),
            new Duck("Howard", 7),
            new Duck("Louie", 2),
            new Duck("Donald", 10),
            new Duck("Huey", 2),
        ];
        const ducksArray = new MyArray<Duck>(...ducks);

        console.log(`Before sorting: ${ducksArray.toString()}`);
        ducksArray.sort();
        console.log(`After sorting: ${ducksArray.toString()}`);
    }
}
