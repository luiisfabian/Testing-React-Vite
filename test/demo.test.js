describe('pruebas en democomponetn', () => {


    test("Esta prueba no debe fallar", () => {
        // if (1 === 0) {
        //     throw new error("no se puede dividir en 0");
        // }

        //1. INICIALIZACION
        const message1 = "Hola mundo";

        //2. ESTIMILO
        const message2 = message1.trim();

        //3. OBSERVAR EL COMPORTAMIENTO

        expect(message1).toBe(message2);


    });

});