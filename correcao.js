const numero = prompt("Digite uma número: ")

function maiorNumero(num) {
    let array = num.split("")

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; i++) {

            if(array[i] < array[j]) {
                let aux = array[j]
                array[i] = array[i]
                array[j] = aux
            }
        }
    }

    return array.join("")
}