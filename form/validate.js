//JOSE ANTONIO BRETONES GARCIA
// function validate() {
//     var clientName , clientSubname , dni , date, startTime , exitTime , 
//     email , telephone , expressionEmail , expressionDni , expressionTelephone , actualDate , expressionNotSpace , dd , mm , yyyy ; 
//     clientName = document.getElementById("clientName").value;
//     clientSubname = document.getElementById("clientSubname").value;
//     dni = document.getElementById("dni").value;
//     date = document.getElementById("date").value;
//     startTime = document.getElementById("startTime").value;
//     exitTime = document.getElementById("exitTime").value;
//     email = document.getElementById("email").value;
//     telephone = document.getElementById("telephone").value;
//     actualDate = new Date();
//     dd = actualDate.getDate();
//     mm = actualDate.getMonth()+1;
//     yyyy = actualDate.getFullYear();
//     actualDate = yyyy + "-" + mm + "-" + dd;
//     expressionEmail = /^\w+@\w+\.+[a-z]/;
//     expressionDni = /^\d{8}[a-zA-Z]$/;
//     expressionTelephone = /^([0-9]+){9}$/;
//     expressionNotSpace = /\s/;


//     if(clientName === "" || clientSubname === "" || dni === "" || date === "" || 
//     startTime === "" || exitTime === "" || email=== ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (clientName.length>20){
//         alert("Nombre demasiado largo");
//         return false;
//     }
//     else if(clientSubname.length>40){
//         alert("Apellidos demasiado largos");
//         return false;
//     }
//     else if(email.length>100){
//         alert("Email demasiado largo");
//         return false;
//     }
//     else if (!expressionEmail.test(email)){
//         alert("Email introducido con formato incorrecto");
//         return false;
//     }
//     else if(expressionNotSpace.test(telephone)){
//         alert("Error, número de teléfono con espacios en blanco encontrado");
//         return false;
//     }
//     else if(!expressionTelephone.test(telephone)){
//         alert("Número de telefono incorrecto");
//         return false;
//     }
//     else if (!expressionDni.test(dni)){
//         alert("Formato incorrecto para DNI");
//         return false;
//     }
//     //if the date entered is less than the current date it will be incorrect
//     else if(date < actualDate){
//         alert("Fecha incorrecta");
//         return false;
//     }
//     alert("¡ENVIADO, TUS DATOS SON CORRECTOS! ")
// }
// function $ (selector){
//     return document.querySelector(selector);
// }
window.addEventListener("load",init,false); /* Te faltaba esto payaso */
var form = document.getElementById("form");
var validated = false;


function init (){
    form.send.addEventListener("click",validate,false);
}

function validate(){
    alert("eooo");
    validateFirstName();
    alert(validated);
    if(validated){
        form.submit();
    }
}

function validateFirstName (){
    var nameExpression = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    alert("He entrado");
    if(!nameExpression.test(form.clientName.value)){
        alert("Nombre incorrecto" + form.clientName.value);
        form.clientName.classList.add("error");
        form.clientName.focus();
        validated = false;
    } else {
        validated = true;
    }
    
}


