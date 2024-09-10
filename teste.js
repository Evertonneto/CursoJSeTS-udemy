let numeros = []
const PI = 3.14159

let entrada = lines[0]
let entradaEmArray = entrada.split(" ")
for(let numeroString of entradaEmArray){
    numeros.push(Number(numeroString))
}

let a = numeros[0]
let b = numeros[1]
let c = numeros[2]

let areaDoTriangulo = a*c
let areaDoCirculo = PI*(c**2)
let areaDoTrapezio = ((a+b)*h)/2
let areaDoQuadrado = b**2
let areaDoRetangulo = a*b

console.log(`TRIANGULO = ${areaDoTriangulo.toFixed(3}`)
console.log(`CIRCULO = ${areaDoCirculo.toFixed(3}`)
console.log(`TRAPEZIO = ${areaDoTrapezio.toFixed(3}`)
console.log(`QUADRADO = ${areaDoQuadrado.toFixed(3}`)
console.log(`RETANGULO = ${areaDoRetangulo.toFixed(3}`)

