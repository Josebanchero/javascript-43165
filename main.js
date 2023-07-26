/* Info personal */
let nombreIngresado = prompt ("Ingresa tu nombre")
alert ("El nombre ingresado es " + nombreIngresado)
console.log (nombreIngresado)

let apellidoIngresado = prompt ("Ingresa tu apellido")
alert ("El apellido ingresado es " + apellidoIngresado)
console.log (apellidoIngresado)

let edadIngreasada = prompt ("Ingresa tu edad")
alert ("La edad ingresada es " + edadIngreasada)
console.log (edadIngreasada)

/* e-mail */

let emailIngresado = prompt ("Ingresa tu e-mail")
alert ("El e-mail ingresado es " + emailIngresado)
console.log (emailIngresado)

/* Contraseña */


while (true){
    var contraseñaIngresada = prompt ("Ingresa una contraseña")
    var repetiContraseña = prompt ("Repetí tu contraseña")
    if (contraseñaIngresada == repetiContraseña){
        console.log ("Contraseña ingresada")
        alert ("Contraseña ingresada correctamente")
        break;
    } else {
        console.log ("Las contraseñas no coinciden")
        alert ("Las contraseñas no coinciden")
        continue;
    }
}

/* Usuario creado */

alert ("Usuario: " + nombreIngresado + apellidoIngresado + edadIngreasada)
alert ("E-mail: " + emailIngresado)
alert ("Contraseña: *******")



/* CARRITO */
/* Productos */
 const productos = [
    {nombre: "Bandeja Amelia", precio: 5000 },
    {nombre: "Maceta Robert", precio: 4500},
    {nombre: "Bandeja Multiple", precio: 7500},
    

 ]
 console.log(productos)

 const resultado = productos.find((el) => el.nombre === "Bandeja Amelia")
 const resultado2 = productos.find((el) => el.nombre === "Bandeja Uxi")

console.log(resultado)
console.log(resultado2)

/* Ingresando productos */
let productoIngresado = prompt ("Ingresa el producto que quieras")
let cantidadIngresada = prompt ("Ingresa la cantidad del producto elegido")
alert ("Se agrego a tu carrito " + cantidadIngresada + " " + productoIngresado)
console.log (cantidadIngresada + productoIngresado)

/* Total */

const precio = [5000, 4500, 7500]
const total = precio.reduce((acumulador, elemento)=> acumulador + elemento, 0)
alert("Tu total es: " + total)
console.log(total)