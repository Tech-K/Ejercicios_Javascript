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

function imprimirPersona ({nombre, apellido}) /*destructura la persona*/ {
    console.log(nombre.toUpperCase())
}

imprimirPersona (kevin)
imprimirPersona (genesis)
imprimirPersona ({nombre: 'juanito'})
// imprimirPersona () //No se puede desglosar un objeto que no contene nada
// imprimirPersona ({ apellido: 'Gomez' }) //aqui se esta creando un atributo de un objeto que no existe