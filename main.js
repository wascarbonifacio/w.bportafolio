//const form = document.getElementById("container__formulario");

function validar(){
    //Event.preventDefault()
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("input__email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    if(nombre == ""){
        alert("El nombre es obligatorio");
        document.getElementById("nombre").focus();
    }
    else if(email == ""){
        alert("El email es obligatorio");
        document.getElementById("input__email").focus();
    }
    else if(asunto == ""){
        alert("El asunto es obligatorio");
        document.getElementById("asunto").focus();
    }
    else if(mensaje == ""){
        alert("El mensaje es obligatorio");
        document.getElementById("mensaje").focus();
    }
}