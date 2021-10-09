//Juego Cachipun, indicar cuántas veces se quiere jugar
//declaracion de variables
let jugar=prompt("Hola, cuántas veces quieres jugar?")
let resultadoPersona=0;
let resultadoMaquina=0;

//definicion de jugadas de persona y maquina
for (let i = 0; i<jugar; i++) {
    let jugadaPersona=prompt("Elige tu jugada: 0 para piedra, 1 para papel, 2 para tijera");
    
    let jugadaMaquina=(Math.floor(Math.random()*3))
//switch de posibilidades de juego
    switch(jugadaPersona){
        case"0":
    if (jugadaPersona==0 && jugadaMaquina==2) {
        resultadoPersona=resultadoPersona+1
        alert("Felicidades, ganaste, eres el mejor!!!")
    }
    else if (jugadaPersona==0 && jugadaMaquina==1) {
        resultadoMaquina=resultadoMaquina+1
        alert("Lo siento, perdiste esta jugada!!!")
    }
    else{
        alert("Tú y tu computador están empatados!!!")
    }
    break;
        case"1":
    if (jugadaPersona==1 && jugadaMaquina==0) {
        resultadoPersona=resultadoPersona+1
        alert("Felicidades, ganaste, eres el mejor!!!")
    }
    else if (jugadaPersona==1 && jugadaMaquina==2) {
        resultadoMaquina=resultadoMaquina+1
        alert("Lo siento, perdiste esta jugada!!!")
    }
    else{
        alert("Tú y tu computador están empatados!!!")
    }
    break;
    case"2":
    if (jugadaPersona==2 && jugadaMaquina==1) {
        resultadoPersona=resultadoPersona+1
        alert("Felicidades, ganaste, eres el mejor!!!")
    }
    else if (jugadaPersona==2 && jugadaMaquina==0) {
        resultadoMaquina=resultadoMaquina+1
        alert("Lo siento, perdiste esta jugada!!!")
    }
    else{
        alert("Tú y tu computador están empatados!!!")
    }
    break
    }  
}
//resultados, ganador, perdedor y empate
if (resultadoPersona>resultadoMaquina) {
    alert(`Felicidades, eres el maestro del cachipun! Ganaste con ${resultadoPersona} puntos!!!`)
}
if (resultadoMaquina>resultadoPersona) {
    alert(`Lamentablemente el computador ganó, con ${resultadoMaquina} puntos`)
}else{alert(`El computador y tú han empatado con ${resultadoMaquina} puntos y ${resultadoPersona} puntos!!! `)}

