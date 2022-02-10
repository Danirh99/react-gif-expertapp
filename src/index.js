import React from 'react';
import ReactDOM from 'react-dom';
import GiftExpertApp from './GiftExpertApp';
import './index.css';

const divRoot = document.querySelector('#root');

/*
ReactDOM.render(
  //<App />,
  divRoot
);
*/

ReactDOM.render( <GiftExpertApp value = {1} />, divRoot );

// Crear Componente
// <h2>GiftExpertApp</h2>
// <hr />