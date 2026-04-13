/*
    1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    
    push(5)
    push(9)
    pop()
    push(3)
    push(8)
    pop()
    pop()
    push(6)
    push()
    push(2)
    pop()
    push(10)
    push(1)
    pop()
    pop()
    push(15)
    pop()
    pop()
    
*/
import Stack from "./lib/Stack.mjs"

let pilha = new Stack();

pilha.push(5)
pilha.push(9)
pilha.pop()
pilha.push(3)
pilha.push(8)
pilha.pop()
pilha.pop()
pilha.push(6)
pilha.push()
pilha.push(2)
pilha.pop()
pilha.push(10)
pilha.push(1)
pilha.pop()
pilha.pop()
pilha.push(15)
pilha.pop()
pilha.pop()

let stats = pilha.print();

console.log(stats);
