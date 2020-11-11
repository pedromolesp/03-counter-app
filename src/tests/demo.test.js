

// test('Debe ser true', () => {
//     const isActive = true;
//     if (isActive) {
//         throw new Error('No está activo');
//     }
// })
describe('Pruebas en el archivo demo.test.js', () => {

    test('Deben ser iguales strings', () => {
        const mensaje = "Hola mundo";
        const mensaje2 = `Hola mundo`;

        expect(mensaje).toBe(mensaje2);

    });
});
