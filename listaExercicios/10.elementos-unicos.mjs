import Deque from './lib/Deque.mjs';

// Criando um carrinho com limite de 3 itens únicos
const carrinho = new Deque(3);

console.log("Adicionando Smartphone...");
carrinho.insertBack("Smartphone");

console.log("Tentando adicionar Smartphone novamente (Duplicata)...");
carrinho.insertBack("Smartphone"); // Deve exibir erro de duplicata

console.log("Adicionando Fone e Carregador...");
carrinho.insertBack("Fone");
carrinho.insertBack("Carregador");

console.log("Tentando adicionar Capinha (Limite)...");
carrinho.insertBack("Capinha"); // Deve exibir erro de limite atingido

console.log("\nCarrinho Final:", carrinho.print());