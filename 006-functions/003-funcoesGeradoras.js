function* geradora1(){
    yield 0
    yield 1
    yield 2
}

let g1 =  geradora1()


console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())

console.log('---------')

function* geradora2(){
    yield 0
    yield 1
    yield 2
}
function* geradora3(){
    yield* geradora2()
    yield 3
    yield 4
    yield 5
}

let g3 = geradora3()
for(let valor of g3){
    console.log(valor)
}

function* geradora4(){
   yield function(){
    console.log('retorna yield function 1')
   }
   yield function(){
    console.log('retorna yield function 2')
   }
}

let g4 = geradora4()
let yieldFunction1 = g4.next().value
let yieldFunction2 = g4.next().value

yieldFunction1()
yieldFunction2()

function* geradora5(){
    let i = 999;
    while(true){
        yield i
        i++
    }
}

let g5 = geradora5()

console.log(g5.next().value)
console.log(g5.next().value)
console.log(g5.next().value)
