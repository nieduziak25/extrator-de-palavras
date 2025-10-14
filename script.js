const botaoMostraPalavras = document.querySelector( "#botao-paçavrachave");

botaoMostraPalavras.addEventListener( " click", mostraPalavrasChave);

function mostraPalavrasChave(){ 
    const texto = document.querySelector( "#entrada-de-texto").ariaValueMax;
    const campoResultado = document. querySelector( "#resultado-palavrachave");
    const mostraPalavrasChave = processaTexto(texto);

    campoResultado.textoContent = palavras.join(","); 
}    

function processaTexto(texto) {
let palavras = texto.split(/\P{L}+/u);
    
     for(let i of palavras){
        palavras = palavras[i].toLowerCase();
     }

     palavras = tiraPalavrasRuins(palavras);

     const frequencias = contaFrequencias(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavras);

    function ordenaPalavras(p1, p2){
        return frequencias[p2] - frequencias[p1];
    }

    console.log(ordenadas);
    return ordenadas.slice(0,10);
}

function contaFrequencias(palavras){
    let frequencias = {};
    
        frequencias [i] =0; 
    for(let j of palavras){
        if(i==j) {
            frequencias[i]++;
        }
    }
}
   return palavras;
}

function tiraPalavrasRuins(palavras) {
    const PALAVRAS_RUINS = new Set(["para", "uma", "nós"]);
    const palavrasBoas = [];
    for (let palavra of palavras) {
         if (!PALAVRAS_RUINS.has(palavras) && palavras.length> 2) {
palavrasBoas.push(palavra);
    }
    }
     return palavrasBoas;
}
