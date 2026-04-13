import Stack from './lib/Stack.mjs';

// Criando pilha de "Desfazer" com limite de 3 ações
const historicoUndo = new Stack(3);

console.log("--- Simulação: Editor de Texto (Buffer de Desfazer) ---");

// Realizando ações
console.log("Ação 1: Digitar 'Olá '");
historicoUndo.push("Digitar 'Olá '");

console.log("Ação 2: Digitar 'Mundo'");
historicoUndo.push("Digitar 'Mundo'");

console.log("Ação 3: Aplicar Negrito");
historicoUndo.push("Aplicar Negrito");

console.log("\nEstado da Pilha:", historicoUndo.print());

// Tentando a 4ª ação (Deve falhar)
console.log("\nAção 4: Mudar cor para Vermelho");
historicoUndo.push("Mudar cor para Vermelho");

// Desfazendo uma ação para liberar espaço
console.log("\n[Ctrl+Z] Desfazendo última ação...");
historicoUndo.pop();

console.log("Tentando Ação 4 novamente...");
historicoUndo.push("Mudar cor para Vermelho");

console.log("\nEstado Final da Pilha:", historicoUndo.print());