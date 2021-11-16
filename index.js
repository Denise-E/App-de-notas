const leer = require("./modules/leer_json");
// let tareas = leer("./data/tareas.json"); 
const listar = require("./modules/listar");

const crear = require ("./modules/crear");
const borrar = require ("./modules/borrar");

const process = require("process");
// Desestructuro para llamar proceso deseado de process;
const {argv} = process
console.log(argv);

// Desetsructuro el array argv - sus elementos.
// Todos los argumentos vienen como texto
const [Node,file,action,identificador] = argv
let tareas = null;
let resultado = null;

/* Se pone null para que desp siempre me busque el archivo y me pase
las tareas en su estado actualizado */

switch (action){
    case "-l":
        tareas = leer ("./data/tareas.json");
        listar(tareas);
        break;
    
    case undefined:
        console.log("Atención - tienes que pasar una acción");
        break;

     case "-c":
            tareas = leer ("./data/tareas.json");
            listar(tareas.filter(tarea => tarea.completa))
            break;
            // Pido todas tareas completas
    case "-i":
                tareas = leer ("./data/tareas.json");
                listar(tareas.filter(tarea => !tarea.completa))
                break;
                // Pido todas tareas incompletas
        
    case "-s":
                tareas = leer ("./data/tareas.json");
                resultado = ( tareas.find(tarea => tarea.identificador == identificador));
                console.log(resultado? resultado : "No se encontró ningún resultado");

                break;
    
    case "-a":
             tareas = leer ("./data/tareas.json");
             // Toma parámetro que le pase en su archivo. Lista =file
             resultado = crear(identificador,tareas,"./data/tareas.json");
             console.log(resultado);
             break;

    case "-b":
            tareas = leer ("./data/tareas.json");
            resultado = borrar(identificador,tareas,"./data/tareas.json");
            console.log(resultado);
            break;
    
    default:
        console.log("No entiendo qué querés hacer");
}


// Siempre me devuelve el defaut - No me lee el switch
// NO ME TOMA CREAR (is not a function). Lo mismo con borrar;
