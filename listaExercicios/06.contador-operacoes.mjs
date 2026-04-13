import Queue from './lib/Queue.mjs';

// Criando a fila de atendimento
const filaAtendimento = new Queue();

// Clientes chegando (enqueue)
console.log("Chegando: João");
filaAtendimento.enqueue("João");

console.log("Chegando: Maria");
filaAtendimento.enqueue("Maria");

// Atendendo clientes (dequeue)
console.log(`Atendendo: ${filaAtendimento.dequeue()}`);
console.log(`Atendendo: ${filaAtendimento.dequeue()}`);

// Chegando mais um cliente
console.log("Chegando: Ana");
filaAtendimento.enqueue("Ana");

// Resultado final do contador
console.log("-------------------------------------------");
console.log(`Total de operações realizadas: ${filaAtendimento.getOperationCount()}`);
console.log(`Fila atual: ${filaAtendimento.print()}`);
