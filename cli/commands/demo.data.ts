import { Apps } from "./demo.types";

import { WeatherStationTestDrive } from "../../ch02-observer";
import { StarbuzzTestDrive } from "../../ch03-decorator";
import {
    PizzaStore1TestDrive,
    PizzaStore2TestDrive,
    PizzaStore3TestDrive,
} from "../../ch04-factory";
import { BoilderTestDrive, SingletonTestDrive } from "../../ch05-singleton";
import {
    LightTestDrive,
    PartyTestDrive,
    RemoteTestDrive,
} from "../../ch06-command";
import {
    DuckAdapterTestDrive,
    EnumerationIteratorTestDrive,
    HomeTheaterTestDrive,
    IteratorEnumerationTestDrive,
} from "../../ch07-adapter-facade";
import { BeverageTestDrive, DuckSortTestDrive } from "../../ch08-template";
import {
    Menu1TestDrive,
    Menu2TestDrive,
    Menu3TestDrive,
    Menu4TestDrive,
} from "../../ch09-iterator-composite";
import {
    GumballMachineTestDrive,
    GumballMonitorTestDrive,
} from "../../ch11-proxy";
import { DuckSimulator } from "../../ch12-compound";
import {
    GumballMachine1TestDrive,
    GumballMachine2TestDrive,
} from "../../ch10-state";

export const patterns: Apps = {
    "Observer Patterns": {
        "⛅ Weather Station": [{ drive: WeatherStationTestDrive }],
    },
    "Decorator Pattern": {
        "🍵 Starbuzz Coffee": [{ drive: StarbuzzTestDrive }],
    },
    "Factory Patterns": {
        "🍕 Pizza Store 1": [{ drive: PizzaStore1TestDrive }],
        "🍕 Pizza Store 2": [{ drive: PizzaStore2TestDrive }],
        "🍕 Pizza Store 3": [{ drive: PizzaStore3TestDrive }],
    },
    "Singleton Patterns": {
        "⭐ Basic": [{ drive: SingletonTestDrive }],
        "🍫 Chocolate Boiler": [{ drive: BoilderTestDrive }],
    },
    "Command Patterns": {
        "💡 Light": [{ drive: LightTestDrive }],
        "🎮 Remote Control": [{ drive: RemoteTestDrive }],
        "🎉 Party Mode": [{ drive: PartyTestDrive }],
    },
    "Adapter & Facade Patterns": {
        "🦆 Ducks & Turkeys - Simple Adapter": [
            { drive: DuckAdapterTestDrive },
        ],
        "🔌 Iterator & Enumeration": [
            {
                drive: IteratorEnumerationTestDrive,
                args: ["Apple", "Banana", "Cat", "Duck"],
            },
            {
                drive: EnumerationIteratorTestDrive,
                args: ["Apple", "Banana", "Cat", "Duck"],
            },
        ],
        "🎥 Home Theater": [{ drive: HomeTheaterTestDrive }],
    },
    "Template Method Patterns": {
        "🍹 Beverage Recipes": [{ drive: BeverageTestDrive }],
        "🔄 Ducks Sorter": [{ drive: DuckSortTestDrive }],
    },
    "Iterator & Composite Patterns": {
        "🍽️ Menu 1": [{ drive: Menu1TestDrive }],
        "🍽️ Menu 2": [{ drive: Menu2TestDrive }],
        "🍽️ Menu 3": [{ drive: Menu3TestDrive }],
        "🍽️ Menu 4": [{ drive: Menu4TestDrive }],
    },
    "State Patterns": {
        "🎰 Gumball Machine 1": [{ drive: GumballMachine1TestDrive }],
        "🎰 Gumball Machine 2": [{ drive: GumballMachine2TestDrive }],
    },
    "Proxy Patterns": {
        "🖥️ Gumball Monitor": [
            { drive: GumballMachineTestDrive, args: ["Austin", "112"] },
            { drive: GumballMonitorTestDrive },
        ],
    },
    "Compound Patterns": { "🦆 Duck Simulator": [{ drive: DuckSimulator }] },
};
