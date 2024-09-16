export default class ValidaCPF{
    constructor(cpf){
        this.cpfLimpo = cpf.replace(/\D+/g, "");
    }

    valida(){
        if(typeof this.cpfLimpo == 'undefined' ) return;
        if(this.cpfLimpo.length !== 11) return;
        if(this.sequencia()) return;
        console.log(this.cpfLimpo)
        let cpfSemDigitos = this.cpfLimpo.slice(0,9)
        let digito1 = this.criaDigito(cpfSemDigitos)
        let digito2 = this.criaDigito(cpfSemDigitos+digito1)

        let cpfValidado = cpfSemDigitos + digito1 + digito2
        cpfValidado === this.cpfLimpo?  console.log('CPF válido'): console.log('CPF inválido')

    }

    static criaDigito(cpfComOuSemDigitos){
        let arrayCPF = Array.from(cpfComOuSemDigitos)
        
        let regressor = arrayCPF.length + 1
        console.log(regressor)
        let total = arrayCPF.reduce((acm,numero)=>{
            acm += regressor*Number(numero)
            regressor--
            return acm
        },0)
        console.log(total)

        let digito = 11 - (total % 11)
        return  digito > 9 ? 0 : digito


    }

    sequencia(){
        let sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }
}
