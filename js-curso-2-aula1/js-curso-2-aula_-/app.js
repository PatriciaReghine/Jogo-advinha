listaNumeroSorteado = [];
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female')
}
function mensagemInicial(){
    exibirTextoTela('h1', 'Número secreto');
    exibirTextoTela('p', ' Escolha um número de um a cem', {rate: 1.2});
}
mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoTela('h1', ' Acertou')
        let palavraTentativa = tentativas> 1 ? 'tentativa': 'tentativa';
        let mensagemTentativa = ` Você descobriu o número secreto com ${tentativas}${palavraTentativa}`
        exibirTextoTela('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute> numeroSecreto){
            exibirTextoTela('p', 'O número secreto é menor')
        } else {
            exibirTextoTela('p', ' O número é maior')
        }

        tentativas++
        limparCampo();
    }

}
function gerarNumeroAleatorio() {
    let numeroEscolhido= parseInt(Math.random()*numeroLimite+1);
    let quantidadeElementosLista = listaNumeroSorteado.length;

    if (quantidadeElementosLista == numeroLimite){
        listaNumeroSorteado = []
    } 
    if (listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)

}