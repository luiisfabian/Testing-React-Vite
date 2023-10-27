import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('08-imp-exp-test', () => {

    test('get herour por id, retornar herue por id ', () => {

        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual(
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
        )
    })

    test('get herour por id, retornar undefiend si noe xiste el id ', () => {

        const id = 100;
        const hero = getHeroeById(id);
        // expect(hero).toEqual(undefined)
        expect(hero).toBeFalsy()
    })


    //  TAREA
    //  GEThEROBYOWNER


    //debe retornar un arreglo con los heroues de DC
    //length === 3
    // toEqual al arreglo filtrado


    //debe retornar un arreglo con los herues filtrados
    //length == 2
    const owner = "DC"
    const ownerMarvel = "Marvel"

    test('tarea debe retornar un arreglo con los heroues de DC', () => {


        const getByOwner = getHeroesByOwner(owner)
        expect(getByOwner.length).toBe(3);
        expect(getByOwner).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect(getByOwner).toEqual(heroes.filter(hero => hero.owner == owner));
    })

    test('tarea length === 3', () => {

        const owner = "DC"

        const getByOwner = getHeroesByOwner(owner)

        expect(getByOwner.length).toBe(3);

    })

    test('tarea toEqual al arreglo filtrado', () => {

        const getByOwner = getHeroesByOwner(owner)
        expect(getByOwner.length).toBe(3);
        // expect(getByOwner).toEqual([
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        //   ]);

        expect(getByOwner).toEqual(heroes.filter(hero => hero.owner == owner));
    })

    test('tarea toEqual al arreglo filtrado Marvel', () => {
        const getByOwner = getHeroesByOwner(ownerMarvel)
        expect(getByOwner).toEqual(heroes.filter(hero => hero.owner == ownerMarvel));
    })

    test('length == 2', () => {
        const getByOwner = getHeroesByOwner(ownerMarvel)
        expect(getByOwner.length).toBe(2);
    })





})