let  temporelogio_principal = document.getElementById("relogio");

let editartemp = document.getElementById("editartemp");

let pTutorial = document.getElementById("tutorias");

let  digitando_tempoH = document.getElementById("tempoH");
let  digitando_tempoM = document.getElementById("tempoM");
let  digitando_tempoS = document.getElementById("tempoS");

let  digitado_tempoD = document.getElementById("timedescanso");


let receberTempo = document.getElementById("repetir");

let repAtual = 0;
let audio = new Audio('alarm.mp3');

function EditarTempo(){
    editartemp.style.display = "flex";
}

function fecharModal(){
    editartemp.style.display ="none";
}

function tutorial(){
    pTutorial.style.display ="flex";
}
function fecharTutorial(){
    pTutorial.style.display = "none";
}

function iniciar(){
    let  hora = parseInt(digitando_tempoH.value) || 0;
    let  minuto = parseInt(digitando_tempoM.value) || 0;
    let  segundo = parseInt(digitando_tempoS.value) || 0;
    let minuto2 = parseInt(digitado_tempoD.value) || 0;
    if(hora === 0 && minuto=== 0 && segundo=== 0 && minuto2===0 || minuto2===0  ){
        alert("Por favor prencha os campos de tempo de atividade e tempo de descanso.");
    }else{
        fecharModal();
        ciclo();
    }
    
    
}

function ciclo(){
    
    let rep = parseInt(receberTempo.value) || 1;
    if(repAtual >= rep){
      alert("Chegou ao fim");
      return resetar();
    }
    console.log(repAtual);
    
    iniciaratividade();

}

function descanso(){

       //var descanso
    let minuto2 = parseInt(digitado_tempoD.value) || 0;
    let segundo2= 0;

    let timerdescanso = setInterval(()=>{
        if(minuto2 <=0 && segundo2<=0){
            repAtual++;
            clearInterval(timerdescanso);
            audio.play();
            audio.addEventListener("ended",ciclo,{once:true});

        }else if(minuto2 > 0 && segundo2<=0){
            segundo2 = 59;
            minuto2--;
        }else{
            segundo2--
        }
        temporelogio_principal.innerText = minuto2 + ":" + segundo2;
    },1000);
}



function iniciaratividade(){

    //temporelogio_principal.innerText = digitando_tempoH.value + ":" + digitando_tempoM.value + ":" + digitando_tempoS.value;
    // var atividade
    let  hora = parseInt(digitando_tempoH.value) || 0;
    let  minuto = parseInt(digitando_tempoM.value) || 0;
    let  segundo = parseInt(digitando_tempoS.value) || 0;

 

    let timer = setInterval(()=>{

     if(hora <=0 && minuto <=0 && segundo <= 0){
        clearInterval(timer);
         audio.play();
       audio.addEventListener("ended", descanso, { once:true });

    } else if(hora > 0 && minuto<=0 && segundo<=0){
        minuto=59;  
        hora--;
    }else if(segundo <= 0){
        segundo = 59
        minuto--;
    }else{
        segundo--;
    } 

        temporelogio_principal.innerText = hora + ":" + minuto + ":" + segundo;
        
    },1000);

    

}
    
function resetar(){
   window.location.reload();
}