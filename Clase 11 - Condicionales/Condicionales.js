// En esta clase empezaremos a trabajar con estructuras de control, éstas nos permiten decidir el flujo de nuestro código.
// Empezaremos con los condicionales. Los condicionales nos permiten decidir si un código se ejecuta o no. 
// También introducimos un nuevo tipo de datos primitivos: el booleano, que determina si un valor es falso o verdadero. Mediante un condicional (if)
// decidiremos si se ejecuta una parte de nuestro código cuando se cumpla o no cierta condición.

let kevin = {
    name: 'Kevin',
    lastName: 'Blanco',
    age: 21,
    student: true,
}

const MAYOREDAD = 18

function printPersons (person) {
    console.log(`${person.name}`)
    
    if (person.student) { console.log('Es Estudiante') }
    else{ console.log('Tiene que estudiar') }

    if (person.age >= MAYOREDAD) { console.log('Es Mayor de Edad') }
    else { console.log('Es Menor de Edad') }
}

console.log(printPersons(kevin))

//////////////////////////////////////////////////////////////////////

let mainId = document.getElementById('main')

let escribirMain = () =>{
    if (mainId.innerHTML === 'hola') {
        console.log('funciona mainId')
            mainId.innerHTML += ' Kevin jeje'

    }else { 
        console.log('No funciono Man xd') 
            mainId.innerHTML += ' Mano no funciono xd' }
} 

escribirMain()