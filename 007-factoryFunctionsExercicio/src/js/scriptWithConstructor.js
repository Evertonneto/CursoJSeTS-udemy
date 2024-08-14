function Calculadora(){
    this.display = document.querySelector('.display')
    
    this.iniciar = () => {
        this.display.focus()
        cliqueBotoes()
        capturaEnter()
    }

    const cliqueBotoes =  () =>{
        document.addEventListener('click',(e)=>{
            const el = e.target
            this.display.focus()

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
               fazerConta()
            }
        })
    }

    const capturaEnter = () =>{
        document.addEventListener('keyup',(e)=>{
            if (e.keyCode == 13){
                fazerConta()
            }
        })
    }

    const fazerConta = () =>{
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


let calculadora = new Calculadora()
calculadora.iniciar()