import {Pokemon} from "../src/models/pokemon";
import {whoAttackFirst} from "../src/controllers/fight";

describe('Who attack first', () => {
    it('should return Pika when he start a fight whith carapuce ', () => {
        const pika = new Pokemon("Pika", 90);
        const cara = new Pokemon("Cara", 75);
        const result = whoAttackFirst(pika, cara);
        expect(result.name).toBe("Pika");
    });
})