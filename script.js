function positions(firstPlace, secondPlace, lastPlace){
    let posicao = [firstPlace, secondPlace, lastPlace]
    if (secondPlace == "Daniel"){
        posicao = [secondPlace, firstPlace, lastPlace]
    }
    if (lastPlace == "Daniel"){
        posicao = [firstPlace, lastPlace,secondPlace]
    }
    return `1° Colocado - ${posicao[0]},  2° Colocado - ${posicao[1]},  3° Colocado ${posicao[2]}`
}

console.log(positions("Daniel", "Rafael", "Manoel"))
console.log(positions("Rafael", "Daniel", "Manoel"))
console.log(positions("Rafael", "Manoel", "Daniel"))