import { Beverage, DarkRoast, Expresso, HouseBlend } from "./beverages"
import { Mocha, Soy, Whip } from "./condiments"

let b: Beverage = new Expresso()
console.log(`${b.description}: \$${b.cost()}`)
// [LOG]: "Expresso: $1.99"

let b2: Beverage = new DarkRoast()
b2 = new Mocha(b2)
b2 = new Mocha(b2)
b2 = new Whip(b2)
console.log(`${b2.description}: \$${b2.cost()}`)
// [LOG]: "Dark Roast, Mocha, Mocha, Whip: $1.49"

let b3: Beverage = new HouseBlend()
b3 = new Soy(b3)
b3 = new Mocha(b3)
b3 = new Whip(b3)
console.log(`${b3.description}: \$${b3.cost()}`)
// [LOG]: "House Blend Coffee, Soy, Mocha, Whip: $1.34" 