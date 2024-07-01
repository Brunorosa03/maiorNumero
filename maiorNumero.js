const prompt = require('prompt-sync')({sigint: true});

let n = +prompt('Escolha um número: ')

n = parseFloat(n.toString().split('').sort((a, b) => b - a).join('')) * Math.sign(n)

console.log("Maior número possível:", `${n}`)