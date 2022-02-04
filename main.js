let boton1 = document.querySelector("#uno")
let boton2 = document.querySelector("#dos")
let boton3 = document.querySelector("#tres")
let boton4 = document.querySelector("#cuatro")
let boton5 = document.querySelector("#cinco")
let boton6 = document.querySelector("#seis")
let boton7 = document.querySelector("#siete")
let boton8 = document.querySelector("#ocho")
let boton9 = document.querySelector("#nueve")
let botones = [boton1,boton2,boton3,boton4,boton5,boton6,boton7,boton8,boton9]

let turno = 0

let tablero = [2,3,4,5,6,7,8,9,11]

let id = 0

for(let boton of botones){
    boton.addEventListener('click', function(){
        boton.disabled = true
        switch(boton.id){
            case "uno":
                id = 1;
                break;
            case "dos":
                id = 2;
                break;
            case "tres":
                id = 3;
                break;
            case "cuatro":
                id = 4;
                break;
            case "cinco":
                id = 5;
                break;
            case "seis":
                id = 6;
                break;
            case "siete":
                id = 7;
                break;
            case "ocho":
                id = 8;
                break;
            case "nueve":
                id = 9;
                break;
        }

        if(turno == 1){
            boton.innerText = "X"
            tablero[id-1] = 1
        }else{
            boton.innerText = "O"
            tablero[id-1] = 0
        }
        
        if(CheckForWinner()){
            if(turno == 0){
                alert("Ganó O, si quiere volver a jugar recargue la pagina")
            }else{
                alert("Ganó X, si quiere volver a jugar recargue la pagina")
            }
            DisableAll()
        }else{ 
            if(turno === 0){
                turno = 1 
            }else{
                turno = 0
            }
        }
    })
}

function CheckForWinner(){
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2]){
        botones[0].style.backgroundColor = "yellow"
        botones[1].style.backgroundColor = "yellow"
        botones[2].style.backgroundColor = "yellow"
        return true;
    }
    if(tablero[3] == tablero[4] && tablero[3] == tablero[5]){
        botones[3].style.backgroundColor = "yellow"
        botones[4].style.backgroundColor = "yellow"
        botones[5].style.backgroundColor = "yellow"
        return true;
    }
    if(tablero[6] == tablero[7] && tablero[6] == tablero[8]){
        botones[6].style.backgroundColor = "yellow"
        botones[7].style.backgroundColor = "yellow"
        botones[8].style.backgroundColor = "yellow"
        return true;
    }


    if(tablero[0] == tablero[3] && tablero[0] == tablero[6]){
        botones[0].style.backgroundColor = "yellow"
        botones[3].style.backgroundColor = "yellow"
        botones[6].style.backgroundColor = "yellow"
        return true;
    }
    if(tablero[1] == tablero[4] && tablero[1] == tablero[7]){
        botones[1].style.backgroundColor = "yellow"
        botones[4].style.backgroundColor = "yellow"
        botones[7].style.backgroundColor = "yellow"
        return true;
    }
    if(tablero[2] == tablero[5] && tablero[2] == tablero[8]){
        botones[2].style.backgroundColor = "yellow"
        botones[8].style.backgroundColor = "yellow"
        botones[5].style.backgroundColor = "yellow"
        return true;
    }


    if(tablero[0] == tablero[4] && tablero[0] == tablero[8]){
        botones[0].style.backgroundColor = "yellow"
        botones[4].style.backgroundColor = "yellow"
        botones[8].style.backgroundColor = "yellow"
        return true;
    }
    if(tablero[2] == tablero[4] && tablero[2] == tablero[6]){
        botones[2].style.backgroundColor = "yellow"
        botones[4].style.backgroundColor = "yellow"
        botones[6].style.backgroundColor = "yellow"
        return true;
    }
    return false;
}

function DisableAll(){
    for(let boton of botones){
        boton.disabled = true;
    }
}