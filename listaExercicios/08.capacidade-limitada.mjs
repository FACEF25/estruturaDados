import Deque from './lib/Deque.mjs';

// Criando um Deque com limite de 5 elementos (Regra 3)
const deckEstacionamento = new Deque(5);

// Tentando inserir 5 elementos (dentro do limite)
deckEstacionamento.insertBack("Carro A");
deckEstacionamento.insertBack("Carro B");
deckEstacionamento.insertFront("Carro C");
deckEstacionamento.insertBack("Carro D");
deckEstacionamento.insertFront("Carro E");

console.log("\nEstado atual:", deckEstacionamento.print());

// Tentando inserir o 6º elemento (deve falhar)
console.log("\nTentando inserir o 6º carro...");
deckEstacionamento.insertBack("Carro F");

// Removendo um para abrir espaço e tentando de novo
console.log("\nSaindo um carro da frente:", deckEstacionamento.removeFront());
console.log("Tentando inserir o 'Carro F' novamente...");
deckEstacionamento.insertBack("Carro F");

console.log("\nEstado final:", deckEstacionamento.print());
console.log("Total de itens agora:", deckEstacionamento.size);