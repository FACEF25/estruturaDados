import LinkedList from './lib/LinkedList.mjs';

const lista = new LinkedList();

// Inserções iniciais
lista.insertTail("Item1");
lista.insertTail("Item2");
lista.insertTail("Item3");

console.log("Lista atual:", lista.print());
console.log("Histórico de remoções:", lista.history().length > 0 ? lista.history() : "Nenhuma remoção ainda.");

// Remoção do Item2 (posição 1)
console.log("\n--- Removendo o elemento na posição [1] (Item2) ---");
lista.remove(1);

console.log("Lista após remoção:", lista.print());
console.log("Histórico de remoções:", lista.history());

// Mais uma remoção para testar o acúmulo
console.log("\n--- Removendo o primeiro elemento (Item1) ---");
lista.removeHead();

console.log("Histórico final:", lista.history());