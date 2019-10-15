let kevin = {
  nombre: 'Kevin',
  apellido: 'Blanco',
  edad: 21,
  trabaja: true
}

let Valeria = {
  nombre: 'Valeria',
  apellido: 'Blanco',
  edad: 15,
  trabaja: false
}


function cumpleaños ({ nombre, edad }) {

  edadNueva = edad += 1

    console.log(`Felicidades! ${nombre} eres un año mas viejo, tenias ${edad} ahora tienes: ${edadNueva}`)
    document.write(`Felicidades! ${nombre} eres un año mas viejo, tenias ${edad} ahora tienes: ${edadNueva}  <br>`)
}

cumpleaños(kevin)
cumpleaños(Valeria)
cumpleaños ({ 
// nuevo objeto

  nombre: 'Juanito',
  edad: 17
})
