// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

function potenciaDeDois(numero) {
  let resultado = 1
  while (numero > 0) {
    resultado *= 2
    numero -= 1
  }
  return resultado
}


// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

function retornaNumMaior(num1, num2, num3) {
  
  let maior = num1;

  if (num1 > num2) {
    if (num1 > num3) {
      maior = num1
    } else {
      maior = num3
    }
  } else if (num2 > num3) {
    maior = num2
  } else {
    maior = num3
  }
  return maior
}

// ***************

// DESAFIOS!

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. Em matemática, um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. Utilize o operador módulo (`%`) para determinar se um número é divisível por outro.

function numPrimo(num) {
  if (num === 1) {
    return true
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 

function contaVogais(string) {
  const vogais = 'aeiou'
  const arrayMinusculas = string.toLowerCase()
  let totalVogais = 0

  for (let i = 0; i < arrayMinusculas.length; i += 1) {
    for (let j = 0; j < vogais.length; j += 1) {
      if (arrayMinusculas[i] === vogais[j]) {
        totalVogais += 1
      }
    }
  }
  return totalVogais
}

// Use estruturas de controle para inverter uma array de inteiros. A função deverá receber uma array de números e retornar uma array com a ordem dos elementos invertida. Não é válido utilizar `arr.reverse()`.
// Exemplo:
// function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]

function inverteArray(array) {
  const arrayInvertida = []
  for (let i = array.length - 1; i >= 0; i -= 1) {
    arrayInvertida.push(array[i])
  }
  return arrayInvertida
}
