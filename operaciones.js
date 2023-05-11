const fs = require('fs');

const registrar = (argumentos) => {
    const content = fs.readFileSync('citas.json', 'utf-8');

    const citas = content ? JSON.parse(content) : [];

    citas.push({
        id: !citas.length ? 1 : citas[citas.length - 1].id + 1,
        nombre: argumentos[1],
        edad: argumentos[2],
        tipo: argumentos[3],
        color: argumentos[4],
        enfermedad: argumentos[5],
    });
    fs.writeFileSync('citas.json', JSON.stringify(citas));
};

const leer = () => {
    const citasAgendadas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log(citasAgendadas);
};


module.exports = { registrar, leer };