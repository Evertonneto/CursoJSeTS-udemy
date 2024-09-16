import ValidaCPF from "./validaCPF";

export default class GeraCPF{
    rand(min=100000000,max=999999999){
        return String(Math.floor(Math.random()*(max-min)+min));
    }

    formatado(cpf){
        return `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf
            .slice(6,9)}-${cpf.slice(9,11)}`

    }

    geraCPF(){
        let cpf = this.rand();
        let digito1 = ValidaCPF.criaDigito(cpf)
        let  digito2 = ValidaCPF.criaDigito(cpf+digito1)
        let cpfGerado = cpf+digito1+digito2
        return this.formatado(cpfGerado);
    }
}