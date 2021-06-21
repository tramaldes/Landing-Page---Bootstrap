/*
>>>>let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. 
Isso é inverso da keyword var , que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.
>>>>JAVA SCRIPT é uma linguagem "Case Sensitive">>É uma linguagem 
que reconhece letras maiusculas e minusculas
Outras formas de acessar o DOM sem ser pelo GET:>
acessar por Tag: getElementByTagName()
acessar por Id: getElementById()
acessar por Nome: getElementsByName()
acessar por classe: getElementByClassName()
acessar por Seletor: querySelector()
*/
/* querySelector posso chamar o seletor pelo " # em seguida o seletor " se for uma classe, chama pelo ". em seguida o seletor" da para fazer de forma completa "input#o seletor*/

let nome = window.document.getElementById('nome') 
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assusntoOK = false
let mapa = document.querySelector("#mapa")

/*Exemplo de acesso ao DOM */
nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

 /* If>> Se dentro do Email, não tiver o "@" ele será invlido conforme abaixo. se não tiver Ou>>"||" */   
 if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido"
    txtEmail.style.color = "red"
    }else {  /* Exemplo else>>Se o nome não for inválido, se não for menor que 3, e se for de 3 para cima,*/
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green" 
        emailOk = true
    }
}
/* Pro assunto, não quero que ele escreva mais que 100 caracteres
"SE- IF> O assunto for menor que 100*/

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto grande! Digite no máximo 100 caracteres"
        txtAssunto.style.backgroundColor = "red" 
        txtAssunto.style.display = "block" 
    } else {
        txtAssunto.style.display = "none" /*display>> Como um elemento aparaece na minha página<<< "nono= não quero que ele apareça" */
        assusntoOK = false 
    }
}

function enviar() {
    if (nomeOk == true && emailOK == true && assusntoOK == true) {
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "500px"
    mapa.style.height = "350px"
}