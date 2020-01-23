// En esta clase seguiremos trabajando con condicionales para desglosar las funciones en funciones más pequeñas que retornen un valor.
// Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad. Para ello utilizamos los símbolos >=.
// Return detiene la ejecución de una función y devuelve el valor de esa función.
// Las variables definidas con const se comportan como las variables, excepto que no pueden ser reasignadas.
// Las constantes pueden ser declaradas en mayúsculas o minúsculas. Pero por convención, para distinguirlas del resto de variables, se escribe todo en mayusculas.

let juan = {
    name: 'Juan',
    lastName: 'Blanco',
    age: 28,
    instagram: 'Juan.b',
    etapa: 'Por Contactar'
}

let kevin = {
    name: 'Kevin',
    lastName: 'Blanco',
    age: 21,
    instagram: 'Kev.Tech',
    etapa: 'Contactado'
}

const ADULT = 18
const mainId = document.getElementById('main')
const cumpleId = document.getElementById('cumple')

let ifAdult = (person) => {
        return person.age >= ADULT // se hace la condicion si es mayor de edad y la retorna
        // if ( person.age >= ADULT ) { mainId.innerHTML = `${person.name} es Mayor`} 
        // else { mainId.innerHTML = `${person.name} no eres Mayor jeje` }
}

let birthay = (person) => {
     let personOld = person.age 
     return person.age += 1  
        cumpleId.innerHTML = `${person.name} Estas de Cumple, tenias ${personOld} ahora tienes ${personNew}`
    }

function printPerson () {
    if (ifAdult) {
        let resultadoId = document.getElementById('resultado')
            resultadoId.innerHTML = 'Esto funciono'
    }
}

ifAdult(kevin)
// birthay(kevin)
// printPerson(kevin)



