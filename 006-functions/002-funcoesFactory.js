function criarPessoa(nome,sobrenome,altura,peso){

    return({
        nome,
        sobrenome,
        set nomeCompleto(valor){
            let nomes = valor.split(' ');
            this.nome = nomes.shift();
            this.sobrenome = nomes.join(' '); 
        },

        get nomeCompleto(){
            console.log(`${this.nome} ${this.sobrenome}`)
        }

    })

}

let p1 = criarPessoa("Everton", "Nunes", 1.9, 90);
p1.nomeCompleto = "Everton Nunes Ramalho Neto"
p1.nomeCompleto