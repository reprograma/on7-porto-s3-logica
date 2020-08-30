// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma(numero1, numero2) {
  return numero1 + numero2
}

function subtracao(numero1, numero2) {
  return numero1 - numero2
}

function multiplicacao(numero1, numero2) {
  return numero1 * numero2
}

function divisao(numero1, numero2) {
  return numero1 / numero2
}

function operacoes(num1, num2, operacao) {
  switch (operacao) {
    case "soma":
      return num1 + num2
    case "subtracao":
      return num1 - num2
    case "multiplicacao":
      return num1 * num2
    case "divisao":
      return num1 / num2
    }
}

console.log(soma(2, 2))
console.log(subtracao(4, 2))
console.log(multiplicacao(4, 4))
console.log(divisao(4, 2))
console.log("CONSOLE LOG DA FUNCAO OPERAÇÕES", operacoes(2, 2, "subtracao"))

// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.

function multiplicaSemZero(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return `não queremos zero`
  }
  return num1 * num2
}

console.log(multiplicaSemZero(4, 3))

function divideSemZero(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return `não queremos zero`
  }
  return num1 / num2
}

console.log(divideSemZero(10, 2))

// 3) crie uma função que chame internamente qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function imprimeResultado(){
  return `O resultado da operação é ${soma(2, 2)}`
}

// 4) utilizando as funções de soma e multiplicação já feitas nos exercícios anteriores, crie uma nova função que chame essas funções e resolva a conta 36325 * (9824 + 777).

function somaEMultiplica() {
  // estamos chamando a função multiplicacao e dando 2 parâmetros: o primeiro é o número 36325 e o segundo e o resultado da função soma(9824, 777). O resultado da função soma é 10601, então esse valor será usado como segundo parâmetro da função de multiplicação.
                      //num1  //resultado da função soma será o num2
  return multiplicacao(36325, soma(9824, 777))
}

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100 (por exemplo, 54 e 12). Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

function somaAleatorios(min, max) {
  const n1 = Math.floor(Math.random() * (max - min + 1)) + min
  const n2 = Math.floor(Math.random() * (max - min + 1)) + min
  return `a soma de ${n1} e ${n2} é ${n1 + n2}`
}

// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 números
// 2. Se qualquer um dos três números não forem informados, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 números, somando `2` ao resultado da multiplicação. DICA: pesquise o que aparece no console.log caso uma função precise de um parâmetro, mas não receba nenhum.  

function multiplicaTresNumeros(num1, num2, num3){
  if (num1 === undefined || num2 === undefined || num3 === undefined){
    return `preencha todos os valores corretamente!`
  }
  return num1 + num2 + num3 + 2
}

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

console.log(recebeTresParametros(2, 2, 2)) // 2

// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

function inverteString(string){
  return string.split('').reverse().join('')
}

// 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

function ehPalindromo(string) {
  return (
    string === string.split('').reverse().join(''))
}

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"

function retornaStringMaior(string1, string2){
  if (string1.length > string2.length) {
    return string1
  } else if (string1.length < string2.length){
    return string2
  } else {
    return "empatou!"
  }
}


