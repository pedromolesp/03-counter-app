import React from 'react';
import ReactDom from 'react-dom';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#app');

ReactDom.render(<CounterApp value={0} />, divRoot);
