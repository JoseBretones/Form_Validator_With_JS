window.addEventListener("load",init,false);
var form = document.getElementById("form");
var validated = false;


function init (){
    form.send.addEventListener("click",validate,false);
}

//General function for form validation
function validate(){
    validateFirstName();
    validateSubnames();
    validateDni();
    validateTelephone ();
    validateDate();
    validateEmail();
    if(validated){
        form.submit();
        alert("DATOS ENVIADOS CORRECTAMENTE");
    }

}


//First letter must be uppercase
function validateFirstName (){
    var nameExpression = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[s]*)+$/;
    if(form.clientName.value == "" && document.getElementById("clientNameSpanWhiteSpace") == null){
        var span = document.createElement("span");
        span.setAttribute("id","clientNameSpanWhiteSpace");
        span.setAttribute("class","spanErrors");
        span.innerHTML="Nombre incompleto";
        $("#clientNameLabel").appendChild(span);
    }else if(!nameExpression.test(form.clientName.value)){
        form.clientName.classList.add("error");
        form.clientName.focus();
        if(document.getElementById("clientNameSpan") == null){
            var span = document.createElement("span");
            span.setAttribute("id","clientNameSpan");
            span.setAttribute("class","spanErrors");
            span.innerHTML="Nombre incorrecto";
            $("#clientNameLabel").appendChild(span);
            validated = false;
        }
    } else {
        validated = true;
    }
    
}

//Pressing a key clears the error message
function spanClientNameRemove (){
    if(document.getElementById("clientNameSpan") != null){
        var label = document.getElementById("clientNameLabel");
        var span = document.getElementById("clientNameSpan");
        label.removeChild(span);
        form.clientName.classList.remove("error");
    }
    if(document.getElementById("clientNameSpanWhitespace")){
        
    }
}

//First letter must be uppercase
function validateSubnames(){
    var subnameExpression = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[s]*)+$/;
    if(form.clientSubname.value == "" && document.getElementById("clientSubnameSpanWhiteSpace") == null){
        var span = document.createElement("span");
        span.setAttribute("id","clientSubnameSpanWhiteSpace");
        span.setAttribute("class","spanErrors");
        span.innerHTML = "Apellidos incompletos";
        $("#clientSubnameLabel").appendChild(span);
    }else if(!subnameExpression.test(form.clientSubname.value)){
        form.clientSubname.classList.add("error");
        form.clientSubname.focus();
        if(document.getElementById("clientSubnameSpan") == null){
            var span = document.createElement("span");
            span.setAttribute("id","clientSubnameSpan");
            span.setAttribute("class","spanErrors");
            span.innerHTML = "Apellidos incorrectos";
            $("#clientSubnameLabel").appendChild(span);
            validated = false;
        }
    }else{
        validated = true;
    }    
}

//Pressing a key clears the error message
function spanClientSubnameRemove (){
    if(document.getElementById("clientSubnameSpan") != null){
        var label = document.getElementById("clientSubnameLabel");
        var span = document.getElementById("clientSubnameSpan");
        label.removeChild(span);
        form.clientSubname.classList.remove("error");
    }
}


function validateDni(){
    var dniExpression = /[0-9]{6}[A-Z]?$/;
    if(form.dni.value == "" && document.getElementById("clientDniSpanWhiteSpace") == null){
        var span = document.createElement("span");
        span.setAttribute("id","clientDniSpanWhiteSpace");
        span.setAttribute("class","spanErrors");
        span.innerHTML = "DNI incompleto";
        $("#clientDniLabel").appendChild(span);
    }else if(!dniExpression.test(form.dni.value)){
        form.dni.classList.add("error");
        form.dni.focus();
        if(document.getElementById("clientDniSpan") == null){
            var span = document.createElement("span");
            span.setAttribute("id","clientDniSpan");
            span.setAttribute("class","spanErrors");
            span.innerHTML = "DNI incorrecto";
            $("#clientDniLabel").appendChild(span);
            validated = false;
        }
    }else{
        validated = true;
    }
}

//Pressing a key clears the error message
function spanClientDniRemove (){
    if(document.getElementById("clientDniSpan") != null){
        var label = document.getElementById("clientDniLabel");
        var span = document.getElementById("clientDniSpan");
        label.removeChild(span);
        form.dni.classList.remove("error");
    }
}

function validateTelephone (){
    var telephoneExpression = /[0-9]{9}$/;
    if(form.telephone.value == "" && document.getElementById("clientTelephoneSpanWhiteSpace") == null ){
        var span = document.createElement("span");
        span.setAttribute("id","clientTelephoneSpanWhiteSpace");
        span.setAttribute("class","spanErrors");
        span.innerHTML = "Telefono incompleto";
        $("#clientTelephoneLabel").appendChild(span);
    }else if(!telephoneExpression.test(form.telephone.value)){
        form.telephone.classList.add("error");
        form.telephone.focus();
        if(document.getElementById("clientTelephoneSpan")==null){
            var span = document.createElement("span");
            span.setAttribute("id","clientTelephoneSpan");
            span.setAttribute("class","spanErrors");
            span.innerHTML = "Telefono incorrecto";
            $("#clientTelephoneLabel").appendChild(span);
            validated = false;
        }
    }else{
        validated = true;
    }
}

//Pressing a key clears the error message
function spanClientTelephoneRemove (){
    if(document.getElementById("clientTelephoneSpan") != null){
        var label = document.getElementById("clientTelephoneLabel");
        var span = document.getElementById("clientTelephoneSpan");
        label.removeChild(span);
        form.telephone.classList.remove("error");
    }
}

//Date format YYYY-MM-DD
function validateDate(){
    var actualDate = new Date ();
    var dd = actualDate.getDate();
    var mm = actualDate.getMonth()+1;
    var yyyy = actualDate.getFullYear();
    actualDate = yyyy + "-" + mm + "-" + dd;
    var dateExpression = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if(form.date.value == "" && document.getElementById("clientDateSpanWhiteSpace") == null){
        var span = document.createElement("span");
        span.setAttribute("id","clientDateSpanWhiteSpace");
        span.setAttribute("class","spanErrors");
        span.innerHTML = "Fecha incompleta";
        $("#clientDateLabel").appendChild(span);
    }else if(!dateExpression.test(form.date.value) || form.date.value < actualDate){
        form.date.classList.add("error");
        form.date.focus();
        if(document.getElementById("clientDateSpan")==null){
            var span = document.createElement("span");
            span.setAttribute("id","clientDateSpan");
            span.setAttribute("class","spanErrors");
            span.innerHTML = "Fecha incorrecta";
            $("#clientDateLabel").appendChild(span);
            validated = false;
        }
    }else{
        validated = true;
    }

}

//Pressing a key clears the error message
function spanClientDateRemove (){
    if(document.getElementById("clientDateSpan") != null){
        var label = document.getElementById("clientDateLabel");
        var span = document.getElementById("clientDateSpan");
        label.removeChild(span);
        form.date.classList.remove("error");
    }
}

function validateEmail(){
    var emailExpression = /^\w+@\w+\.+[a-z]/;
    if(form.email.value == "" && document.getElementById("clientEmailSpanWhiteSpace") == null){
        var span = document.createElement("span");
        span.setAttribute("id","clientEmailSpanWhiteSpace");
        span.setAttribute("class","spanErrors");
        span.innerHTML = "Email incompleto";
        $("#clientEmailLabel").appendChild(span);
    }else if(!emailExpression.test(form.email.value)){
        form.email.classList.add("error");
        form.email.focus();
        if(document.getElementById("clientEmailSpan")==null){
            var span = document.createElement("span");
            span.setAttribute("id","clientEmailSpan");
            span.setAttribute("class","spanErrors");
            span.innerHTML = "Email incorrecto";
            $("#clientEmailLabel").appendChild(span);
            validated = false;
        }
    }else{
        validated = true;
    }
}

//Pressing a key clears the error message
function spanClientEmailremove(){
    if(document.getElementById("clientEmailSpan") != null){
        var label = document.getElementById("clientEmailLabel");
        var span = document.getElementById("clientEmailSpan");
        label.removeChild(span);
        form.email.classList.remove("error");
    }
}



function $ (selector){
    return document.querySelector(selector);
}



