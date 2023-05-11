const { registrar, leer } = require('./operaciones');

const argumentos = process.argv.slice(2);

if (argumentos[0] != null) {


    const operaciones = {                                       
        "registrar": () => {
            registrar(argumentos)
        },
        "leer": () => {
            leer()
        },
        "default": () => {
            console.log("Debes elegir si deseas leer o registrar")
        }
    }

    const operacion = operaciones[argumentos[0]] || operaciones['default'];
    operacion()

} else {
    console.log("debes poner algun dato para continuar");
}