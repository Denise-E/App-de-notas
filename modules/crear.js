// Como voy a tener que scribir lo que quiepr agregar a la nueva nota:
const escribir = require("./escribir_json")

//Yo quieor agregar info/data a una lista
const crear = (info,lista,file) => {

    // Que quieor crar? :
    const element ={
        titulo: info,
        // Si la lista es mayor a uno busco el último y le agrego uno
        identificador : lista.length > 0 ? lista[lista.length -1].identificador + 1 : 1,
        completa : false
        // Porque no tiene sentido agregar lista ya completa

    }
    //Agrego elemento nuevo a la lista ya existente
    lista.push(element)
    // Por ultimo escribo esa info en el archivo que le paso:
    escribir(file,lista)

    return element;
    //el return solo para que lo muestre
}

module.exports = crear;
