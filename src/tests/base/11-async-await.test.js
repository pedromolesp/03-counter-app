const { getImagen } = require("../../base/11-async-await");

describe('Pruebas con async-await fetch', () => {
    test('Debe retornar el url imagen ', async () => {
        const url = await getImagen();
        // console.log(url);
        expect(url.includes('https')).toBe(true);
    });

});
