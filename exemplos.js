function soma(numero1, numero2) {
  const somaTotal = numero1 + numero2
  const nome = olar("Jessica")
  return `o resultado é ${somaTotal}, ${nome}`
}

function olar(nome) {
  return `oi ${nome}!`
}

///////////////////////////////////

let numeroWhile = 13
while (numeroWhile <= 12) {
  // console.log("numero while", numeroWhile)
  numeroWhile++
}

let numeroDo = 0
do {
  // console.log("numero do", numeroDo)
  numeroDo++
} while (numeroDo < 2)

///////////////////////////////////

//   inicial      12    true/false    o que acontece depois

for (let numero = 50; numero >= 0; numero = numero - 5) {
  // console.log(numero)
}
// VALOR DE numero:   13

//1 - O QUE QUEREMOS QUE REPITA {  }
//2 - O QUE QUEREMOS QUE MUDE A CADA LOOP
//3 - QUANDO QUEREMOS QUE PARE

const nome = "Juliana"
// console.log("console do nome", nome.length)

/////////////////////////

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um parâmetro for passado, retorne o valor do parâmetro.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum parâmetro for passado, retorne "não recebeu parâmetro"

function recebeTresParametros(param1, param2, param3) {
  if (param1 != undefined && param2 === undefined && param3 === undefined) {
    return param1
  } else if (param1 != undefined && param2 != undefined && param3 === undefined) {
    return param1 + param2
  } else if (param1 != undefined && param2 != undefined && param3 != undefined) {
    return (param1 + param2) / param3
  } else {
    return "não recebeu parâmetro"
  }
}

// console.log(recebeTresParametros(2, 2, 2)) // 2


/////////////////////////

// imprimir na tela os números de 0 a 10

//   inicial         enquanto      depois de cada loop
for (let numero = 0; numero <= 10; numero++) {
  console.log("sei lá quantas vezes vai rodar")
}










