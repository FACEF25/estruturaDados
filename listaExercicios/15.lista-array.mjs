import LinkedList from './lib/LinkedList.mjs';

const lista = new LinkedList();

// Adicionando itens conforme o exemplo
lista.insertTail("Item1");
lista.insertTail("Item2");
lista.insertTail("Item3");

console.log("--- Teste: Lista para Array ---");

// Regra 2 e 3: Obtendo o array e imprimindo
const meuArray = lista.toArray();

console.log("Lista atual como array:", meuArray);

// Demonstração da utilidade: usando métodos de array
console.log("Array invertido via JS nativo:", meuArray.reverse());
console.log("Existe 'Item2' no array?", meuArray.includes("Item2"));