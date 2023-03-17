import { MenuComponent } from "./menuComponent";

export class Menu extends MenuComponent {
    public menuComponents = new Array<MenuComponent>();
    private _name: string;
    private _description: string;

    constructor(name: string, description: string) {
        super();
        this._name = name;
        this._description = description;
    }

    public add(menuComponent: MenuComponent): void {
        this.menuComponents.push(menuComponent);
    }

    public remove(menuComponent: MenuComponent): void {
        this.menuComponents = this.menuComponents.filter(
            (component) => component !== menuComponent
        );
    }

    public getChild(i: number): MenuComponent {
        return this.menuComponents[i];
    }

    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    public print(): void {
        console.log(`\n${this.name}, ${this.description}`);
        console.log("---------------------");

        for (const menuComponent of this.menuComponents) {
            menuComponent.print();
        }
    }
}
