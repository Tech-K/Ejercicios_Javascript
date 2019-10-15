alert('Bienvenidos a mi Programa que transforma tu nombre en Mayuscula')

let name1 = prompt('Primera Persona: Dame tu nombre en minisculas ')
let name2 = prompt('Segunda Persona: Dame tu nombre en minisculas ')
let name3 = prompt('Tercera Persona: Dame tu nombre en minusculas ')

function nameInMayus(names) {

    if (name1 === undefined || name2 !== null || name3 !== null) 
    {
      names = names.toUpperCase()
      document.writeln(names)
      console.log(names)

    }else {
      
      document.write('Un campo lo dejaste inactivo bobo :v')
    }
  }


function showInConsole() {

  console.log(name1)
  nameInMayus(name1)
  console.log(name2)
  nameInMayus(name2)
  console.log(name3)
  nameInMayus(name3)
}

showInConsole()
