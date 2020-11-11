const { retornaArreglo } = require("../../base/07-deses-arr")

describe('Prueba desestructuracion', () => {
    test('Devuelve un numero o un string', () => {
        const [letras, numeros] = retornaArreglo();
        expect(letras).toEqual('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toEqual(123);
        expect(typeof numeros).toBe('number');


    });

});
