import LinkedList from './lib/LinkedList.mjs';

const lista = new LinkedList();

// Montando lista: ( Item1, Item2, Item1, Item3, Item1 )
lista.insertTail("Item1");
lista.insertTail("Item2");
lista.insertTail("Item1");
lista.insertTail("Item3");
lista.insertTail("Item1");

console.log("--- Teste de Remoção de Todas as Ocorrências ---");
console.log("Lista antes da remoção: ", lista.print());

// Removendo todos os "Item1"
console.log("\nRemovendo todas as ocorrências de 'Item1'...");
lista.removeAll("Item1");

console.log("Lista após remoção:    ", lista.print());

// Verificação de segurança
console.log("Nova Cabeça (Head):", lista.peekHead()); // Deve ser Item2
console.log("Nova Cauda (Tail):", lista.peekTail());   // Deve ser Item3