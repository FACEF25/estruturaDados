import LinkedList from './lib/LinkedList.mjs';

const lista = new LinkedList();

// Montando a lista do exemplo
lista.insertTail("Item1");
lista.insertTail("Item2");
lista.insertTail("Item3");

console.log("--- Teste de Reversão de Lista ---");
console.log("Lista antes de inverter: ", lista.print());

// Executando a inversão
lista.reverse();

console.log("Lista após inversão:   ", lista.print());

// Teste adicional: Verificando se Head e Tail foram atualizados corretamente
console.log("\nConferência de extremidades:");
console.log("Nova Cabeça (Head):", lista.peekHead()); // Deve ser Item3
console.log("Nova Cauda (Tail):", lista.peekTail());   // Deve ser Item1