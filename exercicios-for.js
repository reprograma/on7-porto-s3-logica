const input = require('readline-sync')

// 1) crie uma função que receba uma string e devolva seu valor em letras maiúsculas, separadas por um espaço. Exemplo: 'banana' -> 'B A N A N A'

function modificaString(string){
  let stringModificada = ''
    for (let i = 0; i < string.length; i++) {
      stringModificada += string[i].toUpperCase() + ' '
  }
  return stringModificada
}

// 2) crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 

function soma(num) {
  let total = 0 
  for (let i = 0; i <= num; i++) {
    // total = total + i
    total += i
  }
  return total
}

// 3) crie um programa que pergunta seu nome. Depois que digitar o nome, o programa deverá responder 'Olá [nome]'.
// Enquanto digitar qualquer palavra, print o que foi digitado mas avise que, para sair, é só dizer 'Tchau'.
// O programa vai dizer 'Tchau [nome]' e finalizar.

function imprimeComandos() {

  let nome = input.question('digite seu nome: ')
  console.log(`Olá, ${nome}`)

  let texto = ''
  
  do {
    texto = input.question('digite algo ou "Tchau" para sair: ')
    console.log(`Você digitou: ${texto}`)
  } while (texto != 'Tchau')

  console.log(`Tchau, ${nome}!`)
}

// 4) crie uma função que receba dois números e exiba no console uma contagem regressiva entre eles, contando de dois em dois números. Por exemplo: recebendo o número inicial 20 e o final 0, a função deverá imprimir em sequência 20 18 16 14 12 10 8 6 4 2 0.

                            // 20        0
function contagemRegressiva(numInicial, numFinal) {
  for (let i = numInicial; i >= numFinal; i -= 2) {
    console.log(i)
  }
}

// 5) crie uma função que receba um número e imprima no console de 0 até o número informado. Além disso, cada vez que imprimir o número, informe se é par ou ímpar. Exemplo: recebendo 5, deve imprimir: "0 é par", "1 é ímpar", "2 é par", "3 é ímpar", "4 é par", "5 é ímpar". 

function imprimeParImpar(num) {
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      console.log(`${i} é par`)
    }
    else if (i % 2 === 0) {
      console.log(`${i} é par`)   
    }
    else {
      console.log(`${i} é ímpar`)
    }
  }
}

// 6) crie uma função que receba um número inteiro e imprima os números no console em ordem, de 1 até o número. Porém, para todos os números que forem múltiplos de 3, imprima na tela "banana" ao invés do número; para os números múltiplos de 5, imprima "biscoito". Para números múltiplos de 3 e 5, imprima "biscoito de banana". Exemplo, recebendo 15 o resultado será:
// 1
// 2
// banana
// 4
// biscoito
// banana
// 7
// 8
// banana
// biscoito
// 11
// banana
// 13
// 14
// biscoito de banana

function biscoitoBanana(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('biscoito de banana')
    } else if (i % 3 === 0 && i % 5 != 0) {
      console.log('banana')
    } else if (i % 5 === 0 && i % 3 != 0) {
      console.log('biscoito')
    } else {
      console.log(i)
    }
  }
}

// 7) crie uma função que receba um número positivo inteiro, itere de 1 ao número e some SOMENTE todos os números múltiplos de 3 OU 5. Por exemplo, recebendo 15, o valor retornado deverá ser 60, ou seja, a soma de todos os números múltiplos de 3 ou 5 entre 0 e 15 (3 + 5 + 6, etc).

                          //15
function somaTresOuCinco(num) { 
  let soma = 0          
                        //15
  for (let i = 0; i <= num; i++){
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i
    }
  }
  return soma
}

console.log(somaTresOuCinco(15))

// 8) altere a função acima para, ao invés de somar múltiplos de 5 ou 3, fazer isso com qualquer número de 1 a 9. Os números serão recebidos via parâmetro de função, por exemplo: `function somaMultiplos(num, multiplo1, multiplo2)` pode ser chamada com os valores `somaMultiplos(100, 2, 4) e verificar os números múltiplos de 2 e 4. Extra: antes de seguir com o cálculo, verificar se os números recebidos estão mesmo entre 1 e 9; caso não estejam, imprimir o aviso "informe múltiplos de 1 a 9" e encerrar o programa.

function somaMultiplos(num, multiplo1, multiplo2) {

  if ((multiplo1 < 1 || multiplo1 > 9) || (multiplo2 < 1 || multiplo2 > 9)) {
    return 'informe múltiplos de 1 a 9'
  }

  let soma = 0
  for (let i = 0; i <= num; i++) {
    if (i % multiplo1 === 0 || i % multiplo2 === 0) {
      soma += i
    }
  }
  return soma
}

// 9) crie uma função que receba um número qualquer devolva o seguinte padrão como resultado (inclusive com os espaços). Por exemplo, caso receba o número 5 como parâmetro:
// *
// **
// ***
// ****
// *****

function escadinha(num) {
  let estrela = ''
  for (let i = 0; i <= num; i++) {
    estrela += '*'
    console.log(estrela)
  }
}

escadinha(10)

// DESAFIO EXTRA: refaça o exercício acima, porém agora com o seguinte padrão:
//     *
//    **
//   ***
//  ****
// *****

function escadinhaContraria(num){
  let espacos = ''
  let estrelas = ''
  for (let i = 1; i <= num; i++){
    for (let j = 1; j <= num - i; j++){
        espacos += ' '            
    } 
    estrelas += '*'
    console.log(espacos + estrelas)
    espacos = ''
  }
}

// OUTRA OPÇÃO DE RESPOSTA, USANDO O MÉTODO .repeat() 
function escadinhaContraria(num){
  for(let i = 1; i <= num; i++){
    console.log(' '.repeat(num - i) + '*'.repeat(i))
  }
}