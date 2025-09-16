
const botaoMostrapalavras = document.querySelector( "#botao-palavrachave");

botaoMostrapalavras.addEventListener("click", mostraPalavrasChave);

funtion mostrapalvrachave(){
    const texto = document.querySelector("#entrada-de-texto#").ariaValueMax;

    const camporesdultado = document.querySelector("#resultado-de-palavrachave");

    const palavrasChave = processaTexto(texto);

    camporesdultado.textContent = palavras;
}
function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}