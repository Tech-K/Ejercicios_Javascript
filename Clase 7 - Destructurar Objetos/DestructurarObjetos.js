let kevin = {
    nombre: 'Kevin',
    apellido: 'Blanco',
    edad: 21,
    estudia: true
}

let genesis = {
    nombre: 'Genesis',
    apellido: 'Blanco',
    edad: 15,

}

function Saludo (persona) {
    // var nombre = persona.nombre
    let { nombre } = persona
    console.log(`Hola ${nombre} como estas?`)
}

Saludo (kevin)