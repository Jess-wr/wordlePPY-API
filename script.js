window.addEventListener('load', init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
let cantIntentos = 6;
const API = "https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5";

//Funcion asincrona
fetch(API).then( response => response.json())
.then(response => {
        
        palabra = response[0].toUpperCase();
        console.log(palabra);
    })
.catch( err => {
    let diccionario = ["ABACO", "ABAJO", "ABANO", "ABEJA", "BACHE", "BADEN", "BAGRE",
    "BAHIA", "BABEL", "CABLE", "CABRA", "CACAO", "COCOS", "CACTO",
    "DADOS", "EBRIO", "ECHAR", "DAMAS", "FACHA", "FACIL", "GAFAS",
    "GAITA", "HABLA", "HIELO", "CHIPA", "FIDEO", "NEGRO",
    "ROSAS", "LABIO", "LECHE", "MAFIA", "PADRE", "MADRE",
    "QUEPI", "QUESO", "RADAR", "SABIO", "BURRO", "SABOR", "TABLA",
    "VACIO", "VACUO", "YERBA", "ZAFRA"];
    
    let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
    console.log(palabra)  
})





const BOTON = document.getElementById("guess-button");
BOTON.addEventListener("click", intentar);

function leerIntento(){
    let intento = document.getElementById("guess-input").value;
    return intento.toUpperCase();
}
function intentar(){
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div'); 
    
    
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#82E0AA';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#F7DC6F';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#BDBDBD';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!😀</H1>")
        return
    }

    cantIntentos--;
    if (cantIntentos == 0){
        terminar("<h1>Perdiste!😖</H1>")
    }
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input")
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = mensaje
}

