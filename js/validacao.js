/*função valida campo*/
function validar() {

    let name = formulario.name.value;
    let lemail = formulario.lemail.value;
    let lassunto = formulario.lassunto.value;
    let lmensagem = formulario.lmensagem.value;
/*Confere se os campos do formulario está preenchido*/
    if (name == "") {
        document.getElementById('resultado-name').innerHTML = "O Campo é obrigatorio!"
        document.getElementById('resultado-name').style.color = 'red';
        document.getElementById("name").style.borderColor = "red";
        formulario.name.focus();
    }else{             
        document.getElementById("name").style.borderColor = "black";
        document.getElementById('resultado-name').innerHTML = ""
    }

    if (lemail == "") {
        document.getElementById('resultado-email').innerHTML = "O Campo é obrigatorio!"
        document.getElementById('resultado-email').style.color = 'red';
        document.getElementById("lemail").style.borderColor = "red";
        formulario.lemail.focus();
    }
    else{
        document.getElementById('resultado-email').innerHTML = ""
        document.getElementById("lemail").style.borderColor = "black";
    }
    if (lassunto == "") {
        document.getElementById('resultado-assunto').innerHTML = "O Campo é obrigatorio!"
        document.getElementById('resultado-assunto').style.color = 'red';
        document.getElementById("lassunto").style.borderColor = "red";
        formulario.lassunto.focus();
    }
    
    else{
        document.getElementById('resultado-assunto').innerHTML = ""
        document.getElementById("lassunto").style.borderColor = "black";
    }
                if (lmensagem == "") {
        document.getElementById('resultado-mensagem').innerHTML = "O Campo é obrigatorio!"
        document.getElementById('resultado-mensagem').style.color = 'red';
        document.getElementById("lmensagem").style.borderColor = "red";
        formulario.lmensagem.focus();
    }
    else{
        document.getElementById('resultado-mensagem').innerHTML = ""
        document.getElementById("lmensagem").style.borderColor = "black";
    }
    if(lmensagem && lassunto && lemail && name != ""){
        formulario.reset();
        alert("Formulario enviado com sucesso!");
    }
    
}
function Limpar() {
    document.getElementById("Limpar").reset();
}