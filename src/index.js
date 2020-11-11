import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';

const divRoot = document.querySelector('#app');

ReactDom.render(<PrimeraApp saludo="Hola soy Pedro" />, divRoot);
