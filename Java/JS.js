function validar(){
    var titulo = document.getElementById("titulo");
    var email = document.getElementById("email");
    var Mensagem = document.getElementById("text");
    
    if (email.value == "") {
    alert("Email não informado");
    email.focus();
    return;
  }
  
    if (titulo.value == "") {
    alert("titulo não informado");
    titulo.focus();
    return;
  }

  if (Mensagem.value == "") {
    alert("Mensagem não informada");
    Mensagem.focus();
    return;
  }
  alert("Formulário Enviado");
}