let nombreIngresado = prompt ("Ingresa tu nombre")
alert ("El nombre ingresado es " + nombreIngresado)
console.log (nombreIngresado)

let apellidoIngresado = prompt ("Ingresa tu apellido")
alert ("El apellido ingresado es " + apellidoIngresado)
console.log (apellidoIngresado)

let edadIngreasada = prompt ("Ingresa tu edad")
alert ("La edad ingresada es " + edadIngreasada)
console.log (edadIngreasada)

let emailIngresado = prompt ("Ingresa tu e-mail")
alert ("El e-mail ingresado es " + emailIngresado)
console.log (emailIngresado)


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





alert ("Usuario: " + nombreIngresado + apellidoIngresado + edadIngreasada)
alert ("E-mail: " + emailIngresado)
alert ("Contraseña: *******")


