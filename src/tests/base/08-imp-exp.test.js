import { getHeroesByOwner, getHeroeById } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => {
    test('Debe de devolver un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });
    test('Debe de devolver undefined', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        // console.log(heroes);

        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toBe(heroeData);

    });
    test('Debe de devolver un array de héroes por owner', () => {
        const owner = "DC";
        const heroes = getHeroesByOwner(owner);
        // console.log(heroes);

        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroes).toEqual(heroesData);

    });

    test('Debe de devolver un array de marvel con toBe', () => {
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);
        // console.log(heroes);

        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroes.length).toBe(2);

    });
});
