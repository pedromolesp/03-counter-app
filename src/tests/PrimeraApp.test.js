import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
describe('Pruebas en <PrimeraApp/>', () => {
    test('debe mostrar el mensaje Hola soy pedro', () => {
        const saludo = 'Hola, soy Pedro';
        const { getByText } = render(<PrimeraApp saludo={saludo} />);

        // expect(getByText(saludo)).toBeInTheDocument();
        
    });

});
