// RMR Men = 10 x weight (kg) + 6.25 x height (cm) 
// - 5 x age (y) + 5 
// or
// RMR Women = 10 x weight (kg) + 6.25 x height (cm) 
// - 5 x age (y) – 161

// a) little activity, activity factor = 1.2
// b) moderately active,  activity factor  = 1.55
// c) very active,  activity factor  = 1.7
// d) extremely active,  activity factor = 1.9

// lista==(nome, sexo, idade, altura, peso, fator)
//   pessoa=["Liz", "f", 29, 170, 60, "very active"]
function calorie (lista) {
    let result=0
    let result1 = 0
    let result2 = 0
    if (lista[1] == "m") {
        result1 = (10 * lista[4]) + (6.25 * lista[3]) - (5 * lista[2]) + 5
        // result1=result1.toFixed(2)
    } 
    else if (lista[1] == "f") {
        result1 = (10 * lista[4]) + (6.25 * lista[3]) - (5 * lista[2]) - 161
        // result1=result1.toFixed(2)
    }
    else{
        return "Entrada inválida."
    }

    if(lista[5]=="little activity"){
        result2=result1*1.2
    }else if(lista[5]=="moderately active"){
        result2=result1*1.55
    }else if(lista[5]=="very active"){
        result2=result1*1.7
    }else if(lista[5]=="extremely active"){
        result2=result1*1.9
    }else{
        return "Entrada inválida."
    }

    result=result2.toFixed(2)
    return `${lista[0]}´s daily calorie requirement is ${result} kcal.`
}

let pessoa3=["Sandra", "f", 17, 165, 61, "extremely active"]
let pessoa2=["Marc", "m", 38, 190, 90, "moderately active"]
let pessoa=["Liz", "f", 29, 170, 60, "very active"]
console.log(calorie(pessoa))
console.log(calorie(pessoa2))
console.log(calorie(pessoa3))

// 'Liz´s daily calorie requirement is 2306.05 kcal.'
