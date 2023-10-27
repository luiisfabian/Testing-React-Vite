import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('06 destrcututuralizacion de objetos', () => {


    test('desobjetos', () => {
        const clave = "Hola";
        const edad = 23;

        const objes = {
            nombreClave: clave.toString(),
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };
        const desObjets = usContext({
             clave,
             edad,
            // latlng: {
            //     lat: 14.1232,
            //     lng: -12.3232
            // }
        });


        expect(desObjets).toEqual(objes);




    })
})