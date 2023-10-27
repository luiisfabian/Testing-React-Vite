import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('09-promesas', () => {


    test('pruebas en getHeroeByIdAsync debe retornar un herue', (done) => {

        const id = 1;
        getHeroeByIdAsync(id).then((hero) => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },);
            done()
        }).catch((err) => {

        });
    })

    test('pruebas en getHeroeByIdAsync debe obtener un error si herue no existe ', (done) => {

        const id = 10;
        getHeroeByIdAsync(id).then((hero) => {
            expect(hero).toBeFalsy();
            done()
        }).catch((err) => {
            expect(err).toBe('No se pudo encontrar el héroe' +id);
            done();
        });
    })
})