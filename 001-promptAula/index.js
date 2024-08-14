let number1;
let number2;

do{
    number1 = prompt('Digite o primeiro número:',0)
    number2 = prompt('Digite o segundo número:',0)
    if(isNaN(number1) || isNaN(number2) || number1 === '' || number2 === ''){
        alert('Um dos valores digitados não é um número!')
    }
}while(isNaN(number1) || isNaN(number2) || number1 === '' || number2 === '')

alert(Number(number1)+Number(number2))