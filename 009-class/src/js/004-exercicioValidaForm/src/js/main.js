class ValidaForm{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit',(e)=>{
            e.preventDefault()
            this.validar(e)
        })
    }

    validar(e){
        e.preventDefault()
    
        let camposValidos = this.validarCampos()
        let senhasValidas = this.validarSenhas()

        if(camposValidos && senhasValidas){
            alert('Formulário Enviado :)')
            this.formulario.submit()
        }
    }

    validarCampos(){
        let valido = true
        let campos = document.getElementsByTagName('input')

        if(document.getElementsByClassName('.error-text')){
            for(let error of document.querySelectorAll('.error-text')){
                error.remove()
            }
        }

        for(let campo of campos){
            if(campo.value == ''){
                let label = campo.previousElementSibling.innerText 
                let div = document.createElement('div')
                div.innerHTML = `<p class="error-text">Campo "${label}" é obrigatório</p>`
                valido = false
                campo.insertAdjacentElement('afterend',div)

            }

            
            if(campo.classList.contains('cpf')){
                if(!this.validarCPF(campo)){
                    valido = false
                }
            }

            if(campo.classList.contains('usuario')){
                if(!this.validarUsuario(campo)){
                    valido = false
                }
            }
        }

        


        return valido
    }
    

    validarCPF(campo){
        let valido = true
        let cpf = new ValidaCPF(campo.value)
        if(!cpf.valida()){
            let div = document.createElement('div')
            div.innerHTML = `<p class="error-text">CPF inválido!</p>`
            campo.insertAdjacentElement('afterend',div)
            valido = false
        }

        return valido

        
    }

    validarUsuario(campo){
        let valida = true 
        if(campo.value.length < 3 || campo.value.length > 12){
            this.criaErro(campo,'O campo usuário deve ter entre 3 e 12 caracteres')
            valida = false
        }
        
        if(!campo.value.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo,'O campo usuário deve conter apenas letras e números')
            valida = false
        }
        return valida
    }

    validarSenhas(){
        let valido = true
        let campoSenha = this.formulario.querySelector('.password')
        let campoRepetirSenha = this.formulario.querySelector('.passwordRepeat')
        if(campoSenha.value !== campoRepetirSenha.value){
            this.criaErro(campoSenha,'Senhas diferentes')
            this.criaErro(campoRepetirSenha,'Senhas diferentes')
            valido = false
        }
        if(campoSenha.value.length < 6 || campoSenha.value.length > 12){
            this.criaErro(campoSenha,'A senha deve ter entre 6 e 12 caracteres')
            valido = false
        }

        return valido

    }

    criaErro(campo,msg){
        let div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend',div)
    }
}

let valida = new ValidaForm()


