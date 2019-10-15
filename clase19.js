// map devueve un nuevo array

//Personas del Team Ponceleon


let ceo = {
}

let team1 = {
}

let team2 = {
}

let team3 = {
}

const TEAMPONCELEON = [ceo, team1, team2, team3]


//Verificar si es CEO o parte del TEAM Ponceleon Club
const IfCeoOrTeam = () =>{
  ceoTrueOrFalse = prompt ('Elija un numero \n1 >Es usted el CEO de Ponceleon Club? \n2 >Es usted parte del Team Ponceleon Club? ')

  switch (ceoTrueOrFalse) {
    case '1':
        ingresarDatosCeo(ceo)
      break;

    case '2':
        ingresarDatosTeam(team1)
      break;

    default:
      console.log('Deberias Formar Parte de Nuestro Team :3')
      break;
  }
}

//Ingresar Datos si es el CEO de Ponceleon Club
const ingresarDatosCeo = personaCeo => {

  personaCeo.nombre = prompt ('CEO, Ingrese su nombre')
  personaCeo.apellido = prompt ('CEO, Ingrese su apellido')
  personaCeo.edad = prompt ('CEO, Ingrese su edad')

  console.log('Datos Ingresados del CEO de Ponceleon Club')
  console.log(ceo)
  }
  

//Ingresar Datos si es Parte del Team Ponceleon CLub
const ingresarDatosTeam = personasDelTeam => {

  personasDelTeam.nombre = prompt ('Eres parte del Team Ponceleon, Ingrese su nombre')
  personasDelTeam.apellido = prompt ('Eres parte del Team Ponceleon, Ingrese su apellido')
  personasDelTeam.edad = prompt ('Eres parte del Team Ponceleon, Ingrese su edad')
}

const postulacion = () => {
  
  postTeam = prompt('Quieres ser Parte del Team? Escriba un numero para Elejir \n1 > Postulate \n2 > No Quiero Ser Parte del Team ')

  if (postTeam === '1') {

    alert('Estas Postulandote para ser Parte del Team Ponceleon')

    team2.nombre = prompt ('Ingrese su nombre')
    team2.apellido = prompt ('Ingrese su apellido')
    team2.edad = prompt ('Ingrese su edad')

  } else if (postTeam === '2') {
    
    alert('De lo que te pierdes:)')

  }else{

    alert('Recarga la pagina y Elije las opcciones que se estan mostrando')
  }
}


IfCeoOrTeam()

switch (TEAMPONCELEON) {

  case (team1 = null):

    postulacion()
  break;
  
  case (team2 = null):

    postulacion()
  break;

  case(team3 = null):

    postulacion()
  break;

  default:
    break;
}

const mayoriaDeEdad = 18

var siEsMayor = ({ edad }) => edad > mayoriaDeEdad

let mayoresDeEdad = TEAMPONCELEON.filter(siEsMayor)


console.log('Este es el Team Ponceleon: ')
console.log(`1: ${ceo.nombre} ${ceo.apellido} de ${ceo.edad} años`)

if (team1.nombre === null){

  console.log('No Hay un equipo aun :(')
}else{
  console.log(`1: ${team1.nombre} ${team1.apellido} de ${team1.edad} años`)
}

console.log(`Mayores de Edad: \n${mayoresDeEdad}`)