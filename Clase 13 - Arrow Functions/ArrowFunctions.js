const saludoId = document.getElementById('saludo')

let saludar = (nombre, edad) => `Hola ${nombre} tienes ${edad} años`

saludoId.innerHTML = saludar('Kevin', 21)

let sumaId = document.getElementById('suma')

let sumar = (num1,num2) => {
    var num3 = 10
    return num1 + num2 + num3
}

sumaId.innerHTML += sumar(10,20) //el signo += no remplaza el texto que tengo en la etiqueta HTML


///////////////////////////////////////////

// let edad = 34;

// const mayorEdad = (age) => {
//     if(age >= 18){
//         returntrue;
//     }
//     else{
//         returnfalse;
//     }
// }

// const mostrarResultado = (age) => {
//     if (!(mayorEdad(age))){
//         console.log('es menor de edad');
//     }
//     else{
//         console.log('es mayor de edad');
//     }
// } 
// mostrarResultado(edad)

///////////////////////////////////////////
let kevin = {
    name: 'Kevin',
    age: 21
}

let genesis = {
    name: 'Genesis',
    age: 16
}

const allowAdultId = document.getElementById('allowAdult')
const deniedAdultId = document.getElementById('deniedAdult')

const ADULT_VENEZUELA = 18

let ifAdult = ({ age }) => age >= ADULT_VENEZUELA

let permitirAcceso = (person) => {
    if(ifAdult(person)) { 
        allowAdultId.innerHTML += `${person.name} es mayor de Edad`
     }
    else  {  deniedAdultId.innerHTML += `${person.name} No es mayor de Edad`}
}


permitirAcceso(kevin)
permitirAcceso(genesis)