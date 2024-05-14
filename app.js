let listaDenumerosSortados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let chute = document.querySelector('input').value;
    let mensagemTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você Acertou');
        exibirTextoNaTela('p',mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'numero secreto é menor ');
        } else {
            exibirTextoNaTela('p','numero secreto é maior');
        }
        tentativas++
        limparCampo();
   }
}

function gerarNumeroAleatorio(){
    let  numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeELementosNaLista = listaDenumerosSortados.length

    if (quantidadeDeELementosNaLista == numeroLimite) {
        listaDenumerosSortados = [];
    }
    if (listaDenumerosSortados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {   
        listaDenumerosSortados.push(numeroEscolhido);
        console.log(listaDenumerosSortados);
        return numeroEscolhido;
    } 
} 

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
}