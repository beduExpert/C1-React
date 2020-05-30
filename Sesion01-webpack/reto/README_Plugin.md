## Plugin (HtmlWebpackPlugin)

Requirements
- Have built [assets](./README.md) project

### Different outputs
 1. Add `./src/print.js` with:
  ```
  export default function print() {
    console.log('called from print.js')
  }
  ```
 2. Change `index.js` for using `print.js`
  ```
  import print from './print.js';
  function component() {
    ...
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me';
    btn.onclick = print;
    element.appendChild(btn)
  }
  ```
 3. Update `webpack.config.js`
    - Add another entry for `print.js`
      ```
        entry: { 
          app: './src/index.js',
          print: './src/print.js',
        },
      ```
    - Change output filename to `filename: [name].bundle.js`
 4. Change `index.html` title  to `Output Management` for example
 5. Import two scripts according to the previous output filenames, and remove the old one.
    ```
    <script src="./print.bundle.js"></script>
    <script src="./app.bundle.js"></script>
    ```
 6. `npm run build` and refresh browser

### HtmlWebpackPlugin

 1. `npm i --save-dev html-webpack-plugin`
 2. Add it to `webpack.config.js`
  ```
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  ```
 3. Add the `plugins` section
  ```
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  ```
 4. `npm run build` and refresh browser and check `index.html`

More on [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) and [html-webpack-template](https://github.com/jaketrent/html-webpack-template)

### Clean-webpack-plugin

For keeping cleaned your output folder, dist in this case. More [here](https://www.npmjs.com/package/clean-webpack-plugin).

 1. `npm i --save-dev clean-webpack-plugin`
 2. Add it to `webpack.config.js`
  ```
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  ```
 3. Then at plugin section
  ```
  plugins: [
    new CleanWebpackPlugin(),
    ...
  ```
 4. `npm run build` and check `./dist` folder

### Next [here](https://webpack.js.org/guides/development/)

- Templates of [configs](https://github.com/marharyta/webpack-boilerplate)) and a friednly [guide](https://medium.com/hackernoon/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1).