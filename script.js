let buttonEl = document.querySelector('#button-more');
let divEl = document.querySelector('#mais-noticias');

buttonEl.addEventListener('click', exibirDiv);

function exibirDiv() {
    

    divEl.classList.toggle('hidden');
    if (divEl.classList.contains('hidden')) {
        buttonEl.innerHTML = "Leia Mais";
        buttonEl.classList.remove('btn-ocultar');
    } else {
        buttonEl.innerHTML = "Ocultar";
        buttonEl.classList.add('btn-ocultar');
    }
}