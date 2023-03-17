export abstract class MenuComponent {
    public add(menuComponent: MenuComponent): void {
        throw new Error("Not Implemented");
    }

    public remove(menuComponent: MenuComponent): void {
        throw new Error("Not Implemented");
    }

    public getChild(i: number): MenuComponent {
        throw new Error("Not Implemented");
    }

    public get name(): string {
        throw new Error("Not Implemented");
    }

    public get description(): string {
        throw new Error("Not Implemented");
    }

    public get price(): number {
        throw new Error("Not Implemented");
    }

    public get isVegetarian(): boolean {
        throw new Error("Not Implemented");
    }

    public abstract createIterator(): IterableIterator<MenuComponent>;

    public print(): void {
        throw new Error("Not Implemented");
    }
}
