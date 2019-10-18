//JOSE ANTONIO BRETONES GARCIA
function validate() {
    var clientName , clientSubname , dni , date, startTime , exitTime , 
    email , expressionEmail , expressionDni , actualDate , dd , mm , yyyy ; 
    clientName = document.getElementById("clientName").value;
    clientSubname = document.getElementById("clientSubname").value;
    dni = document.getElementById("dni").value;
    date = document.getElementById("date").value;
    startTime = document.getElementById("startTime").value;
    exitTime = document.getElementById("exitTime").value;
    email = document.getElementById("email").value;
    actualDate = new Date();
    dd = actualDate.getDate();
    mm = actualDate.getMonth()+1;
    yyyy = actualDate.getFullYear();
    actualDate = yyyy + "-" + mm + "-" + dd;
    expressionEmail = /^\w+@\w+\.+[a-z]/;
    expressionDni = /^\d{8}[a-zA-Z]$/;
    if(clientName === "" || clientSubname === "" || dni === "" || date === "" || 
    startTime === "" || exitTime === "" || email=== ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (clientName.length>20){
        alert("Nombre demasiado largo");
        return false;
    }
    else if(clientSubname.length>40){
        alert("Apellidos demasiado largos");
        return false;
    }
    else if(email.length>100){
        alert("Email demasiado largo");
        return false;
    }

    else if (!expressionEmail.test(email)){
        alert("Email introducido con formato incorrecto");
        return false;
    }
    else if (!expressionDni.test(dni)){
        alert("Formato incorrecto para DNI");
        return false;
    }
    else if(date < actualDate){
        alert("Fecha incorrecta");
        return false;
    }
}
