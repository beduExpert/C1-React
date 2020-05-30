## Assets

Requirements
- Have built [demo](./README.md) project or at least have the basic concepts

### Prepare your environment
 1. Change the title to smt related to Assets. i.e. `Asset Management`
 2. Change `index.html` for importing script `bundle.js` instead of `main.js`
 3. Do the same at the `output` section of the `webpack.config.js`

### Styles
 1. Install `style-loader` and `css-loader` as dev dependencies
 2. Add `modules` section at `webpack.config.js`
  ```
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  ```
 3. Add `src/styles.css` with `.hello { color: red; } `
 4. Import it at `index.js` as
  ```
  import _ from 'lodash';
  import './styles.css';
  ```
 5. Now add class to the element in `component()`: `element.classList.add('hello');`
 6. `npm run build`
 7. Open `index.html` in your browser

### Images
 1. Install `file-loader` as dev-dependency
 2. Add a new rule for images at `webpack.config.js`
  ```
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [ 'file-loader' ]
  },
  ```
 3. Add any image to src folder. i.e. `./src/icon.png` or check [here](https://freeicons.io)
 4. Import it at `index.js`
 5. Use an image to add it as child element at `component()`
  ```
    const icon = new Image();
    icon.src = Icon;
    element.appendChild(icon);
  ```
 6. Change `styles.css` for using the same image or other as background: `background: url('./icon.png')`
 7. npm run build
 8. Open `index.html` in your browser

 Check out the [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) and [url-loader](https://webpack.js.org/loaders/url-loader) 

### Fonts
 1. Add one rule for handling fonts
  ```
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [ 'file-loader' ]
  },
  ```
 2. Add new font to src folder. i.e Noto or Chelsea - check more [here](https://fonts.google.com/?selection.family=Roboto&sidebar.open) or [here](https://survivejs.com/webpack/loading/fonts/) and this [converter](https://onlinefontconverter.com/)
 3. Add `font-face` definition to `styles.css`
  ```
  @font-face {
    font-family: 'Balsamiq';
    src: url('./BalsamiqSans-Regular.ttf') format('ttf');
    font-weight: 600;
    font-style: normal;
  }
  .hello {
    font-family: 'Balsamiq';
  }
  ```
 4. `npm run build` and refresh browser

### Javascript (ES6 => ES5)
 1. `npm i --save-dev babel-loader @babel/core`
 2. Add one rule for babel
  ```
  rules: [
    {
      test: /\.js$/,
      use: [
        'babel-loader',
      ]
    }
  ]
  ```
 3. Need to set preset for babel and React for example
  - At node `npm i --save-dev @babel/preset-env @babel/plugin-transform-runtime @babel/preset-react`
  - At node `npm i -S @babel/runtime` (for asyn/await)
  - At `.babelrc`
  ```
  {
    "plugins": [
      "@babel/plugin-transform-runtime",
    ],
    "presets": [
      "@babel/env",
      "@babel/react"
    ]
  }
  ```
 4. `npm run build` and refresh browser

 ### Try more
 - csv-loader
 - xml-loader
 - json-loader
 - sass-loader

 ### Next [More](./README_Plugin.md)