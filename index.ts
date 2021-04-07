import {Pokemon} from "./src/models/pokemon";
import {Attacks} from "./src/models/attacks";

console.log("--Pokemon---");


let pika = new Pokemon(
    "Pikachu",
    90,
    100,
    new Attacks([
        { name: "Queu de fer", damage: 10 },
        { name: "Eclair", damage: 30 },
        { name: "Vive attaque", damage: 25},
        { name: "Coup d\'Jus", damage: 15}
    ])
);

let cara = new Pokemon(
    "Carapuce",
    75,
    150,
    new Attacks([
        { name: "Canon a eau", damage: 35},
        { name: "Coup de boul", damage: 5},
        { name: "Vibraqua", damage: 20},
        { name: "Hydroqueue", damage: 10}
    ])
);
console.log(pika);

