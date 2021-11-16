/* const listar = lista => {
    // Pido que recorra un array (no llame a tareas.json todavía)
    for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    // Pido que muestre cada uno de los elementos.
    console.log("-----------------------");
    console.log("Titulo", element.titulo);
    console.log("Identificador", element.identificador);
    console.log("Completa", element.completa);
    }
}
*/ 

/* La función anterior ahora la hacemos con un forEach 
const listar = lista => lista.forEach( item => {
    console.log("-----------------------");
    console.log("Titulo", item.titulo);
    console.log("Identificador", item.identificador);
    console.log("Completa", item.completa);
})
*/
// Ahora de otra forma: usamos forEach + DESTRUCTURO:
const listar = lista => lista.forEach( item => {

    const {titulo,identificador,completa} = item;

    console.log("-----------------------");
    console.log("Titulo",titulo.toUpperCase());
    console.log("Identificador", identificador);
    console.log("Completa", completa ? "si" : "no");
})


module.exports = listar;

