const fs = require("fs");
const leer = file => {
    // Guardo archivo en vs, listo para leerse
    const contenido = fs.readFileSync(file, "utf8");
    // Lo pasa a formato JSON
    return JSON.parse(contenido);
}
/* Lo mismo en una sola línea sería así:
const leer = file =>JSON.parse(fs.readFyleSync(file, "utf8")
*/

module.exports = leer;
