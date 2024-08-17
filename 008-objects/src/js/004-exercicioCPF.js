//1 - Minha lógica

function converterCPFemNumber(cpf){
    let cpfLimpo = cpf.replace(/\D+/g,'')
    let cpfArray = Array.from(cpfLimpo)
    let cpfArrayNumbers = cpfArray.map((value)=>{
        return Number(value)
    })
    let cpfParaPrimeiroCalculo = cpfArrayNumbers.slice(0,9)
    let cpfValidado = calculoPrimeiroDigito(cpfParaPrimeiroCalculo)
    console.log(cpfValidado.toString() === cpfArrayNumbers.toString())
}

converterCPFemNumber('008.344.224-22')

function calculoPrimeiroDigito(cpf){
    let count = 10
    let cpfMultiplicados = cpf.map((value)=>{
        return value*count--
    })
    let somaDosNumeros = cpfMultiplicados.reduce((acm,value)=>{
        return acm += value
    },0)

    let digito1 = 11 - (somaDosNumeros % 11)

    if(digito1 >= 10){
        digito1 = 0
        cpf.push(digito1)
    }else{
        cpf.push(digito1)
    }

    let cpfComSegundoDigito = calculoSegundoDigito(cpf)

    return cpfComSegundoDigito 
}

function calculoSegundoDigito(cpf){
    let count = 11
    let cpfMultiplicados = cpf.map((value)=>{
        return value*count--
    })
    let somaDosNumeros = cpfMultiplicados.reduce((acm,value)=>{
        return acm += value
    },0)

    let digito2 = 11 - (somaDosNumeros % 11)

    if(digito2 >= 10){
        digito2 = 0
        cpf.push(digito2)
    }else{
        cpf.push(digito2)
    }

    return cpf
}

//2 - Lógica da Aula

function ValidaCPF(cpf){
    Object.defineProperty(this,'cpfLimpo',{
        enumerable:true,
        get: () => {
            return cpf.replace(/\D+/g,'')
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencial()) {
        console.log('O cpf é sequencial!')
        return false
    }
   
    let cpfSemDigitos = this.cpfLimpo.slice(0,9)
    console.log(typeof cpfSemDigitos)
    let primeiroDigito = this.criaDigito(cpfSemDigitos)
    let segundoDigito = this.criaDigito(cpfSemDigitos+primeiroDigito)

    let novoCPF = cpfSemDigitos + primeiroDigito + segundoDigito

    console.log(novoCPF)
    console.log(this.cpfLimpo)

    return novoCPF === this.cpfLimpo



}

ValidaCPF.prototype.criaDigito = function (cpfSemDigitos) {
    let arrayCPF = Array.from(cpfSemDigitos)
    let count = arrayCPF.length + 1
    let total = arrayCPF.reduce((acm,value)=>{
        acm += (count * +value)
        count--;
        return acm
    },0)

    let digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
    
}

ValidaCPF.prototype.isSequencial = function()  {
    let sequencia = this.cpfLimpo[0].repeat(11)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF('111.111.111-11')

if(cpf.valida()){
    console.log('Cpf válido!')
}else{
    console.log('Cpf inválido!')
}