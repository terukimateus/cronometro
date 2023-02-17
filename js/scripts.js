    //dia e horário//
    var data = new Date()
    var mostradata
    var dia = data.getDate()
    var mes = (data.getMonth() + 1)
    var ano = data.getFullYear()
    var dhoras = data.getHours();
    var dminutos = data.getMinutes()
    document.getElementById("texto").innerHTML=("<h1>Hoje é dia " + dia + "/" + mes + " de " + ano + ". Agora são " + dhoras + ":" + dminutos + "h.</h>")
    //
    // variaveis pro cronometro
    var Interval
    var ms = 0 // milisegundos
    var seconds = 0 //segundos
    var minutos = 0 //minutos
    var horas = 0 //horas
    var aparecerMS = document.getElementById("ms")
    var aparecerSeconds = document.getElementById("seconds")
    var aparecerMinutos = document.getElementById("minutos")
    var aparecerHoras = document.getElementById("horas")

    const time = 0	
    
    const iniciar = () => { // função do botão INICIAR
         clearInterval(Interval)
            Interval = setInterval(iniciarCont, 10) //inicia a função de iniciar contagem
    }

    const parar = () => {
        clearInterval(Interval)
            Interval = setInterval(pararCont, 10) //inicia a função de parar contagem
    }

    const resetar = () => {
        clearInterval(Interval)
             Interval  = setInterval(resetarCont, 10) //inicia a função de resetar contagem
    }
 
    function iniciarCont () { // função para iniciar a contagem
    ms++;  // ms + 1, para começar com 1
    
    if(ms <= 9){ // se milisegundos for -9 é para aparecer 0 + a qnt. de ms
      aparecerMS.innerHTML = "0" + ms;
    }
    
    if (ms > 9){ // se ms for maior que 9 é só para aparecer ms, já que se nao tivesse isso ficaria 011 ms por exemplo
      aparecerMS.innerHTML = ms;
      
    } 
    
    if (ms > 99) { // se ms for maior que 99, adiciona +1 nos segundos 
      console.log("seconds");
      seconds++;
      aparecerSeconds.innerHTML = "0" + seconds;
      ms = 0; // reseta os milisegundos
      aparecerMS.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){ // mesma coisa que com o MS
      aparecerSeconds.innerHTML = seconds;
    }

    if (seconds >59) { // se tiver mais de 59 segundos, adiciona 1 minuto
        console.log("seconds");
        minutos++
        aparecerMinutos.innerHTML ="0" + minutos;
        seconds = 0; // reseta os segundos
        aparecerSeconds.innerHTML = "0" +0;
    }

    if (minutos >9) { // mesma coisa que com os segundos
        aparecerMinutos.innerHTML = minutos
    }
    
    if (minutos >59) { //   se tiver mais que 59 minutos, irá adicionar uma hora
        console.log("minutos");
        horas++
        aparecerHoras.innerHTML ="0" + horas;
        minutos = 0; //reseta minutagem
        aparecerMinutos.innerHTML = "0" +0;
    }
  
  }

  function pararCont() { //para a função de contagem
    stop(iniciarCont)
  }

  function resetarCont() { // reseta todas as variáveis para 0, incluindo os htmls
    aparecerMS.innerHTML ="00"
    ms = 0
    aparecerSeconds.innerHTML ="00"
    seconds = 0
    aparecerMinutos.innerHTML ="00"
    minutos = 0
    aparecerHoras.innerHTML ="00"
    horas = 0
}