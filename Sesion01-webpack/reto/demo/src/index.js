function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hola', 'Webpack'], ' ');
  element.id = 'hola';
  return element;
};

document.body.appendChild(component());
