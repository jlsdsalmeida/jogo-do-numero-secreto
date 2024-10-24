let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);
}

function exibirTexto(){
exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}

exibirTexto();


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroAleatorio){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1? 'tentativas':'tentativa'
        let mensagem = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativas}.`
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { if(chute > numeroAleatorio){
        exibirTextoNaTela('p','O número secreto é menor.');
    } else { 
        exibirTextoNaTela('p', 'O número secreto é maior.');
    }
    tentativas++;
    limparCampo();

    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    gerarNumeroAleatorio();
    tentativas = 1;
    exibirTexto();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}