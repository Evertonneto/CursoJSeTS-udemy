function criarCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliqueBotoes()
            this.display.addEventListener('keyup',(e)=>{
                if(e.keyCode === 13){
                    this.fazerConta()
                }
            })
        },
        cliqueBotoes(){
            document.addEventListener('click',(e)=>{
                let el = e.target
                console.log(el)
                if(el.classList.contains('btn-num')){
                    this.display.value += el.innerText
                }
                if(el.classList.contains('btn-clear') && el.innerText == 'C'){
                    this.display.value = ""
                }
                if(el.classList.contains('btn-del')){
                    let arrayDeDigitos = this.display.value.split('')
                    arrayDeDigitos.pop()
                    let inputFinal = arrayDeDigitos.join('')
                    this.display.value = inputFinal
                }
                if(el.classList.contains('btn-equal')){
                   this.fazerConta()
                }

            })
        },

        fazerConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)
                if(!conta){
                    alert('conta inválida!')
                    return;
                }

                this.display.value = String(conta)
            }catch(e){
                alert('conta inválida!')
                return;
            }
        }
    }
}

let calculadora = criarCalculadora()

calculadora.inicia()