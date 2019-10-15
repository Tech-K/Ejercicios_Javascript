const MAYORIA_DE_EDAD = 18

let kevin = {
  nombre: 'Kevin',
  apellido: 'Blanco',
  edad: 21,
  hobby: true,
  desarrollador: true,
  cantante: false,
  guitarrista: true,
  bajista: true,
  pianista: true,
  piloto: false
}

let joyce = {
  nombre: 'Joyce',
  apellido: 'Blanco',
  edad: 19,
  desarrollador: true,
  cantante: false,
  guitarrista: true,
  bajista: true,
  pianista: true,
  piloto: false
}

let mario = {
  nombre: 'Mario',
  apellido: 'Peña',
  edad: 22,
  desarrollador: true,
  cantante: false,
  guitarrista: true,
  bajista: true,
  pianista: true,
  piloto: false
}

let romina = {
  nombre: 'Romina',
  apellido: 'Serrano',
  edad: 18,
  desarrollador: true,
  cantante: false,
  guitarrista: true,
  bajista: true,
  pianista: true,
  piloto: false
}

function imprimirMayoriaDeEdad({ edad }) {
  
}

function imprimirNombrePersonas({ nombre, apellido }) {

  if(nombre === null || apellido === null ){
    console.log('Eres un fantasma :0')
    }
  console.log(`${nombre.toUpperCase()} ${apellido.toUpperCase()} Tiene`)

}

function imprimirEdadPersonas({ edad }) {

  if(edad === null ){
    console.log('No tienes edad? :0')
    }

  console.log(`${edad} años`)
  }

  function imprimirHoobyPersonas({ hobby, desarrollador, cantante, guitarrista, bajista, pianista, piloto }) {

    if (hobby === true ) {
      console.log('Tienes los siguientes Hoobys')
      if(desarrollador ){
        console.log('Desarrollador? :0')
      }else{
        console.log('Deberias ser Desarrolador:(')
      }
      
      if(cantante){
          console.log('Cantante :0')
      }else{
        console.log('Deberias ser Cantante:(')
      }
      
      if(guitarrista){
          console.log('Guitarrista :0')
      }else{
        console.log('Deberias ser Guitarrista:(')
      }
      
      if(bajista){
          console.log('Bajista :0')
      }else{
        console.log('Deberias ser Bajista:(')
      }
      
      if(pianista){
          console.log('Pianista :0')
      }else{
        console.log('Deberias ser Pianista:(')
      }
      
      if(piloto){
          console.log('Piloto :0')
      }else{
          console.log('Deberias ser un piloto:(')
      }
    
    }else{
      console.log('Haz algo vago >:(')
    }
  }
  
  function cumpleaños(name, ageOld) {
    ageNew = ageOld + 1
    console.log(`${name} ${ageOld} ${ageNew}`)
  }

  cumpleaños(kevin.nombre, kevin.edad)