let kevin = {
    nombre: 'Kevin',
    apellido: 'Blanco',
    edad: 21,
    estudiante: true
}

function imprimirNombreyEdad (person) {
    let { nombre, edad } = person
    edad += 1
    console.log (`${nombre} tiene ${edad}`)
}

imprimirNombreyEdad (kevin)