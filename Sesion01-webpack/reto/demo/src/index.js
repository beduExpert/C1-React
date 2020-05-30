const _ = require('lodash');

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hola', 'Mundo'], ' ');
  element.id = 'hola';
  return element;
};

document.body.appendChild(component());
