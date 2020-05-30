## Build your first webpack app

First check the [concepts](https://webpack.js.org/concepts/).

### Installation
 1. Create `demo` folder and go there
 2. `npm init -y`
 3. `npm i webpack webpack-cli --save-dev`

### Project structure
 demo
 |-package.json
 |-index.html
 |-src
   |-index.js

### First "Problematic" App approach
 1. Create a normal HTML structure and add to the `<head>` two scripts for including [lodash](https://unpkg.com/lodash@4.16.6) and `index.js`
```
  <script src="https://unpkg.com/lodash@4.16.6"></script>
  <script src="./src/index.js"></script>
```
 2. Create index.js
```
function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hola', 'Webpack'], ' ');
  element.id = 'hola';
  return element;
};

document.body.appendChild(component());
```
 3. Open `index.html` at browser

### Create a Bundle
 1. Move `index.html into `/dist` folder
 2. Install lodash: `npm i lodash -S
 3. Import lodash at first line of `index.js`
```
const _ = require('lodash');
```
 4. This requires to remove lodash from `index.html` and change the imported script to `main.js`
```
<script src="main.js"></script>>
```
 5. `./node_modules/.bin/webpack` 
 6. Open `dist/index.html` in your browser

### Using a `webpack.config.js`
 1.Create that file at root with:
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
 2. `./node_modules/.bin/webpack --config webpack.config.js`
 3. Change `package.json` to add script `"build": "webpack"`
 4. `npm run build`

### Next [Assets](./README_Assets.md)