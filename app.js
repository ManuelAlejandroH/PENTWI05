function ValidarCampos() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    
    if(email.value == "" || password.value == "")
    {   
     alert("Campos Email y Password requeridos");
     return false;
    }
    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value))
    {  
     location.href ="C:/Users/Alejandro Herrera/Documents/JSDefensivo/home.html";
     return true;
    }
    alert("Email invalido")
    return (false)
}