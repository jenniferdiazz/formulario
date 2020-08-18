function validar(){
    /*var nombre
    nombre = document.getElementById("nombre").value;

    if (nombre === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }*/

    var nombre, apellidos, correo, usuario, pass, telefono, expresion, saludo, expresionLetra;
expresion=/\w+@\w+\.+[a-z]/;
    nombre=document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo=document.getElementById("correo").value;
    usuario=document.getElementById("usuario").value;
    pass=document.getElementById("pass").value;
    telefono=document.getElementById("telefono").value;
    expresionLetra=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
    expresionNumero=/^([0-9])*$/;
    if(nombre==="" || correo==="" || telefono==="" || apellidos==="" || usuario==="" || pass==="" ){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length >30){
        alert("El nombre es muy largo");
        return false;
    }
    else if(apellidos.length >80){
        alert("el campo apellidos es muy largo");
        return false;
    }
    else if(correo.length >100){
        alert("El correo ingresado es muy largo");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("correo no valido");
        return false;
    }
    else if(!expresionLetra.test(nombre)||!expresionLetra.test(apellidos)){
        alert("El nombre o apellido solo acepta letras");
        return false;
    }
    else if(usuario.length >20){
        alert("El usuario es muy largo");
        return false;
    }
    else if(telefono.length>15){
        alert("el numero de telefono es muy largo");
        return false;
    }
   
    else if(isNaN(telefono)){
        alert("el telefono no es un numero");
        return false;
    }
    /*else if(!expresionNumero.test(telefono)){
        alert("telefono no valido");
        return false;
    }*/
    saludo="Bienvenida" + nombre + " " + apellidos+", su usuario es: " +usuario+", su contraseña es: " +pass
    alert(saludo);
}
