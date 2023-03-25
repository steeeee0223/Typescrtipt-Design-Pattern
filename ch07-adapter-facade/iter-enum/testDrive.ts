import { EnumerationIterator, IteratorEnumeration } from "./adapters";

export class EnumerationIteratorTestDrive {
    public static main(...args: string[]): void {
        const enumeration = new IteratorEnumeration<string>(args.values());
        const iterator = new EnumerationIterator<string>(enumeration);
        console.log([...iterator]);
    }
}

export class IteratorEnumerationTestDrive {
    public static main(...args: string[]): void {
        const arr = new Array<string>(...args);
        const enumeration = new IteratorEnumeration<string>(arr.values());
        while (!enumeration.atEnd()) {
            console.log(enumeration.item());
        }
    }
}
