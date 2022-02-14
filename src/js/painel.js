const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagem() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}


setaAvancar.addEventListener('click', function () {

    // testa se o contator da imagemAtual é igual ao total de imagens
    if(imagemAtual === imagensPainel.length - 1) {
        return;
    }

    imagemAtual++;

    esconderImagem();
    mostrarImagem();
})

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagem();
    mostrarImagem();
})
