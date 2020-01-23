let PersonOne = {
    name: null,
    lastName: null,
    age: null,
}


let TakeData = (person) => {
    person.name = prompt('Ingrese su Nombre')
        person.lastName = prompt('Ingrese su Apellido')
            person.age = prompt( 'Ingrese su edad' )   
                let test = parseInt(person.age)
                    person.age = test
}
TakeData(PersonOne)

switch (PersonOne) {
    case name === null:
        console.log('No tienes Nombre?')
        break;
    
    case lastName === null:
        console.log('No tienes Appelido?')
        break;

            
    case age === null:
        console.log('No tienes Edad?')
        break;

    default:
        console.log('No has colocado nada baby')

        break;
}
