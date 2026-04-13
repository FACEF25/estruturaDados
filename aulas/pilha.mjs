// let pilha = []


// pilha[0] = 8 
// pilha[1] = 3
// pilha[2] = 5

// console.log(pilha)


import Stack from "./lib/stack.mjs";

let pilha = new Stack()

console.log(pilha.print());
console.log("Esta vazia?",pilha.getIsEmpty);

pilha.push(35)
pilha.push(37)
pilha.push(39)


console.log(pilha.print());
console.log("Esta vazia?",pilha.getIsEmpty);

let removido = pilha.pop()
console.log({removido},pilha.print());
