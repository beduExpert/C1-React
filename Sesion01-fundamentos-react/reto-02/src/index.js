// Todo archivo de React debe de llevar esta línea que importa React en el
// ámbito de este archivo. Es necesario para todo archivo que tenga `React`
// dentro
import React from "react";
// Esta línea solo es necesaria cuándo se está haciendo el anclaje entre React y
// el punto de montaje con el HTML. Como su nombre lo indica requerimos las
// cosas de React que son necesarias para usarse en el DOM
import ReactDOM from "react-dom";
// Esta línea está importando un nuevo componente de React que se encuentra en
// la ruta especificada
import App from "./App";

// Aquí en efecto se está realizando el montaje de React en el HTML.
// Se está montando App en el elemento HTML que tenga por id `root`
ReactDOM.render(<App />, document.getElementById("root"));
