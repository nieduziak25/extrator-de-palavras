
const botaoMostrapalavras = document.querySelector( "#botao-palavrachave");

botaoMostrapalavras.addEventListener("click", mostraPalavrasChave);

funtion mostrapalvrachave(){
    const texto = document.querySelector("#entrada-de-texto#").ariaValueMax;

    const camporesdultado = document.querySelector("#resultado-de-palavrachave");

    const palavra = texto.split(" ");

    camporesdultado.textContent = palavras;
}