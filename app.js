function ValidarCampos() {
  var elementos = document.querySelector(".container").querySelectorAll("input");
  var email;
  var password, cpassword;
  var checkB = false;
  var messageError

  try {
    for (i = 0; i < elementos.length; i++) {
      switch (elementos[i].id) {
        case "email":
          email = elementos[i].value;
          break;
        case "password":
          password = elementos[i].value;
          break;
        case "cpassword":
          cpassword = elementos[i].value;
          break;
        case "checkForm":
          if (elementos[i].checked == false) {
            alert("Campo " + elementos[i].id + " requerido");
            return (false);
          }
      }
      if (elementos[i].value == "") {
        alert("Campo " + elementos[i].id + " requerido");
        return (false);
      }
    }
  } catch (error) {
    alert("Error: " + messageError);
  }
  if (password != cpassword) {
    alert("Password no coinciden");
    return (false);
  }
  try {
    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
      alert("Bienvenido!!!!")
      return true;
    }
  } catch (error) {
    alert("Error: " + messageError);
  }
  alert("Email invalido")
  return (false)
}