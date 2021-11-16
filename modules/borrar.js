const escribir = require("./escribir_json")
const borrar = (identificador,lista,file) => {

    const element = lista.filter(e => e.identificador != identificador)


    escribir(file,element)

    return element;
    //el return solo para que lo muestre
}

module.exports = borrar;
