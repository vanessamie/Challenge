
btnEncriptar.onclick = btnEncriptar;
btnDesencriptar.onclick = btnDesencriptar;
btnCopiar.onclick = btnCopiar;

const inputText = document.querySelector(".inputText");
const outputText = document.querySelector("#outputText");

function limpaTela(){
    inputText.value = "";
    inputText.focus();
}

function limparTela(){
    outputText.value = "";
}

function btnCopiar(){
    const copiarMensagem = document.querySelector("#outputText");

    copiarMensagem.select();

    navigator.clipboard.writeText(copiarMensagem.value);

    limparTela();

    alert("Sua mensagem foi copiada");
}

function btnEncriptar() {
    const textoEncriptado = encriptar(inputText.value);

    outputText.value = textoEncriptado;
    outputText.style.backgroundImage="none";

    limpaTela();
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputText.value);

    outputText.value = textoDesencriptado;
    outputText.style.backgroundImage="none";

    limpaTela();
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }        
    }
    return stringEncriptada;
}

function desencriptar(stringDescriptada){
    let mensagemCripto = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];

    for(let i = 0; i < mensagemCripto.length; i++) {
        if(stringDescriptada.includes(mensagemCripto[i][0])) {
            stringDescriptada = stringDescriptada.replaceAll(mensagemCripto[i][0], mensagemCripto[i][1]);
        }
    }
    return stringDescriptada;
}






