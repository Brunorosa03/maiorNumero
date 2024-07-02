const prompt = require('prompt-sync')({sigint: true});

let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]

function maiorNota(array) {
    let mn = array[0]
    for(let i = 0; i < array.length; i++) {
        if(array[i] > mn) {
            mn = array[i]
        }
    }
    return mn
}

function menorNota(array) {
    let nm = array[0]
    for(let i = 0; i < array.length; i++) {
        if(array[i] < nm) {
            nm = array[i]
        }
    }
    return nm
    
}

function mediaNota(array) {
    let mn = 6
    mn = array[0]
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 6) {
            mn =array[i]
        }
    
    }
    return mn
}

function abaixoNota(array) {
    let am = array[0]
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 6) {
            am = array[i]
        }
    }
    return am
}

console.log(maiorNota(notas))
console.log(menorNota(notas))
console.log(mediaNota(notas))
console.log(abaixoNota(notas))