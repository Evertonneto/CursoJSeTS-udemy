let varA = 'A'
let varB = 'B'
let varC = 'C'

const varAfixed = varA

varA = varB
varB = varC
varC = varAfixed

console.log(varA,varB,varC)