const rand = (min,max) => Math.floor(Math.random()*(max-min)+min);
const geraMaiusculo = () => String.fromCharCode(rand(65,91));
const geraMinusculo = () => String.fromCharCode(rand(97,123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbolos = '!@#$%&*()_+{}[];.,';
const geraSimbolo = () => simbolos[rand(0,simbolos.length)];
 

export default function geraSenha (qtd,maisculo,minusculo,numero,simbolo) {
    const senhaArray = []
    qtd = Number(qtd)
    for(let i = 0; i < qtd; i++){
        maisculo && senhaArray.push(geraMaiusculo())
        minusculo && senhaArray.push(geraMinusculo())
        numero && senhaArray.push(geraNumero())
        simbolo && senhaArray.push(geraSimbolo())
    }
    
    return senhaArray.join('').slice(0,qtd)
}
