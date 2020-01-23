let kevin = {
    name: 'Kevin',
    apellido: 'Blanco',
    edad: 21,
    estudiante: true
}

let genesis = {
    name: 'Genesis',
    apellido: 'Blanco',
    edad: 15,
    estudiante: true
}

function Birthay (person) {
    let { edad } = person
    edad += 1
    console.log ( edad )
}

Birthay(kevin)