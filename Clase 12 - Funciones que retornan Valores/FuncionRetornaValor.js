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

const ifAdult = person => person.age >= ADULT// se hace la condicion si es mayor de edad y la retorna y si solo Retorna algo podemos quitar la palabra RETURN


let printPersonAdult = (person) => { 
    if ( ifAdult(person) ){ console.log(`${person.name} Es Mayor de Edad`) }
    else { console.log(`${person.name} No es mayor de Edad`) }
 }
 
 let sumOneAge = ({ age }) => age += 1 // destructuro el objeto que tiene un AGE y retornara 

 let birthay = (person) => {
    console.log(`${person.name} Esta cumpliendo años y ahora tiene:`)
        console.log(sumOneAge(person) `Ahora ${person.name} tiene ${person.age}`) 
 }




 printPersonAdult(kevin)
// birthay(kevin)
// printPerson(kevin)



