import Stack from "./lib/stack.mjs";

let frase = "Socorram-me, subi no onibus em Marrocos" // aibofobia   palindromo 
let pilha = new Stack();

for(let i = 0; i < frase.length; i++){
    pilha.push(frase.charAt(i))
}
console.log(pilha.print());
// Usaremos pra fazer a inversão de dados para descobrir se a frase sera igual 

let reverso = "";

while(!pilha.isEmpty){
    reverso += pilha.pop()
}

console.log("Palava Invertida");

console.log(reverso)