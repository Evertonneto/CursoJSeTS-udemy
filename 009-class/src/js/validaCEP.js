class validaCEP {
    constructor(cep) {
      this.cepLimpo = cep.replace(/\D+/g, "");
    }
  
    valida() {
      if (typeof this.cepLimpo == 'undefined') return;
      if (this.cepLimpo.length !== 8) return;
      if (this.sequencia()) return;
  
      this.consultaAPI();
    }
  
    sequencia() {
      let sequencia = this.cepLimpo[0].repeat(this.cepLimpo.length);
      return sequencia === this.cepLimpo;
    }
  
    consultaAPI() {
      const apiUrl = `https://viacep.com.br/ws/${this.cepLimpo}/json/`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.erro) {
            console.log('CEP inválido');
          } else {
            console.log('CEP válido');
            console.log(`Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`);
          }
        })
        .catch(error => console.error('Erro ao consultar API:', error));
    }
  }
  
let meuCEP = new validaCEP('58039210');
meuCEP.valida();