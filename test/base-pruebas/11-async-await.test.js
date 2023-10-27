import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('11-async-await.js', () => {

    test('getImagen debe retornar el URl de la imagen si no existe el key',  async () => {

        const resp = await getImagen();
        console.log(resp);

        expect(resp).toEqual('no se encontro la imagen');
    })
})