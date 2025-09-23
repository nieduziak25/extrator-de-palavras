const botaoMostrapalavras = document.querySelector( "#botao-palavrachave");

botaoMostrapalavras.addEventListener("click", mostraPalavrasChave);

funtion mostrapalvrachave(){
    const texto = document.querySelector("#entrada-de-texto#").ariaValueMax;
    const camporesdultado = document.querySelector("#resultado-de-palavrachave");
    const palavrasChave = processaTexto(texto);
   
   '' camporesdultado.textContent = palavras;
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    
let frequencia = {};
for (let i of palvras) {
    frequencia[1] =0;
for (let j of palavras) {
     if(i==j) {
        frequencias[1]++;
     }
}
    }
    return palavras;
}