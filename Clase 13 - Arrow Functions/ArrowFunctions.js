let saludoId = document.getElementById('saludo')

// function saludar(name){
//     return 'hola' + name;
// }

let saludar = (nombre, edad) => (`Hola ${nombre} tienes ${edad} anos`)

saludoId.innerHTML = saludar('Kevin', 21)

let sumaId = document.getElementById('suma')

let sumar = (num1,num2) => {
    var num3 = 10
    return num1 + num2 + num3
}

sumaId.innerHTML += sumar(10,20)
                //el signo += no remplaza el texto que tengo en la etiqueta HTML