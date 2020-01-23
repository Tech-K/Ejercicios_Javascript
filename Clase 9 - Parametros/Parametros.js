let kevin = {
    name: 'Kevin',
    lastName: 'Blanco',
    age: 21,
    student: true
}

let genesis = {
    name: 'Genesis',
    lastName: 'Blanco',
    age: 16,
    student: true
}

function printPersonName ({ name }) { //destructuro el objeto a su atributo "name"
    console.log(name.toUpperCase())
    console.log(kevin)
}


// Esta funcion me retorna una copia del objeto, para realizarle un cambio a alguno de sus atributos
function birthaySoft (person) {
    return {
        ...person, 
        age: person.age + 1
    }
}


// Esta funcion altera el objeto que pase por parametro
function birthayHard(person) {
    person.age += 1
}


// console.log(personSoftOld)
// console.log (personHardOld)
