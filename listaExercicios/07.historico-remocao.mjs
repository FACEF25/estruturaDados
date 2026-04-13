import Stack from './lib/Stack.mjs';

const navegacao = new Stack();

// Visitando páginas (Push)
console.log("Visitando: google.com");
navegacao.push("google.com");

console.log("Visitando: github.com");
navegacao.push("github.com");

console.log("Visitando: youtube.com");
navegacao.push("youtube.com");

console.log("\nPilha atual:", navegacao.print());

// Voltando páginas (Pop)
console.log("\nClicando no botão 'Voltar'...");
navegacao.pop(); // Remove youtube.com

console.log("Clicando no botão 'Voltar' novamente...");
navegacao.pop(); // Remove github.com

// Verificando o histórico de páginas fechadas
console.log("\n--- Relatório Final ---");
console.log("Página atual no topo:", navegacao.peek());
console.log("Histórico de abas fechadas:", navegacao.history());