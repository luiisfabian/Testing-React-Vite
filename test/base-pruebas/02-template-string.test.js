import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('pruebas en archivo 02-templateString', () => { 

    test('DEbe retornar un nombre', () => { 
        const name = "FAbian"

        const message = getSaludo(name);

        expect(message).toBe(`Hola ${ name }`);
    });

 });