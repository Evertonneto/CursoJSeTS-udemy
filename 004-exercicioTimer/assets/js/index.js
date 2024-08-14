let iniciar = document.querySelector('button.iniciar')
let pausar = document.querySelector('button.pausar')
let zerar = document.querySelector('button.zerar')
let timer = document.querySelector('p.clock')


iniciar.addEventListener('click',iniciarTimer)
zerar.addEventListener('click',zerarTimer)
pausar.addEventListener('click',pausarTimer)


let interval;
let tempoEmMilesegundos = 0;


function iniciarTimer(){

    clearInterval(interval)
    timer.classList.remove('pausado')

    interval = setInterval(()=>{
      tempoEmMilesegundos += 1000
      let clock = new Date(tempoEmMilesegundos)
      
      clock = clock.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone:'GMT'
      })

      timer.innerText = clock
    },1000)

    
}

function pausarTimer(){
    clearInterval(interval)
    timer.classList.add('pausado')
}

function zerarTimer(){
    clearInterval(interval)
    timer.innerText = '00:00:00'
    tempoEmMilesegundos = 0;
    timer.classList.remove('pausado')
}