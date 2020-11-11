import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('Debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        // console.log(user);
        expect(user).toEqual(userTest);

    });
    test('Debe pasarse el nombre', () => {
        const nombre = 'El_Papi1502';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }
        const user = getUsuarioActivo(nombre);
        // console.log(user);
        expect(user).toEqual(userTest);

    });
});
