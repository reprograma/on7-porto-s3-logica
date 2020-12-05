const input = require("readline-sync")
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
 
console. log(soma(2, 2))
console. log(subtracao(4, 2))
console. log(multiplicacao(4, 4))
console. log(divisao(4, 2))

// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.

function multiplicaSemZero(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return `não queremos zero`
    }
    return num1 * num2
}

 console. log(multiplicaSemzero(4, 3))

 function divideSemZero(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return `não queremos zero`
    }
    return num1 / num2
}

console. log(divideSemZer())

// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function chamaSoma() {
    return soma 
}

console.log (`o resultado da operação é ${soma(2, 2)}`)

chamaSoma()

// 4) utilizando as funções de soma e multiplicação dos exercícios 
//anteriores, crie uma função que resolva a conta 36325 * (9824 + 777).

num1 = 36325
num2 = 9824
num3 = 777

function multiplicaSoma(num1, num2, num3){
    return num1 * (num2 + num3)
}

console. log(`resultado = ${num1 * (num2 + num3)}`)

multiplicaSoma()

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. 
//Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. Em seguida, 
//some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". 
//Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

function getRandomInt1(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //console. log(getRandomInt1(12, 2))

  function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

 //console. log(getRandomInt2(20, 2))

  console. log(`a soma de ${getRandomInt1(12, 2)} e ${getRandomInt2(20, 2)} é = ${getRandomInt1(12, 2) + getRandomInt2(20, 2)}`)



// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.


// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"

// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

// 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"