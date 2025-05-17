let botao = document.getElementById("botao");
let frase = '"Não se prive de ser feliz por causa do medo de ser infeliz" - Machado de Assis';

function exibirMensagem() {
    document.getElementById("mensagem").textContent = frase;
}

botao.addEventListener("click", exibirMensagem);