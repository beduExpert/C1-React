## ¿Por qué existe el virtual DOM?

Como se ha mencionado React, optimiza el proceso de mostrar la información con
un concepto que se llama `reconciliación`, dicho proceso solo se entiende si uno
tiene presente qué es el virtual DOM.

Para saber qué es el virtual DOM, antes debemos tener presente que el flujo de
la información en React opera de una sola via, es decir, si vemos el DOM como un
árbol, la información va del tronco hacia las ramas y después hacia las hojas.
Por ejemplo en un `input` cuándo uno cambia el valor que hay en él, uno no
cambia el valor que tiene ese input, sino uno cambia el modelo de datos del cuál
depende ese input. Este flujo de cambios al principio impone una nueva forma de
concebir las UI, pero al poco uso uno entiende el potencial y capacidad que
tiene esto.

Modificar el DOM no es tan caro hablando de procesamiento, lo que sí resulta más
caro es modificar el layout y recalcular el CSS para mostrar la página con los
cambios. La forma de que esto sea más eficiente es haciendo una copia del DOM,
optimizando dichos cambios y luego mandar esos cambios al DOM para que el
navegador genere la nueva vista.

El virtual DOM opera de la siguiente manera:

- Cuando hay cambios toda la UI se vuelve a representar en el virtual DOM
- La diferencia entre la anterior representación y la actual es calculada
- El DOM se actualiza con los únicos cambios que hayan ocurrido.

Este proceso descrito es la `reconciliación`

![virtual-dom](https://s3.amazonaws.com/media-p.slid.es/uploads/548779/images/2881381/vdom1.gif)