import LinkedList from './lib/LinkedList.mjs';

const lista = new LinkedList();

// Inserindo dados com repetições (conforme o print do exercício)
lista.insertTail("Item1");
lista.insertTail("Item2");
lista.insertTail("Item1");
lista.insertTail("Item3");
lista.insertTail("Item1");

console.log("--- Teste de Contagem de Ocorrências ---");
console.log("Lista atual:", lista.print());

// Testando as contagens
const ocorrenciasItem1 = lista.countOccurrences("Item1");
const ocorrenciasItem2 = lista.countOccurrences("Item2");
const ocorrenciasInexistente = lista.countOccurrences("ItemX");

console.log(`Ocorrências de 'Item1': ${ocorrenciasItem1}`); // Esperado: 3
console.log(`Ocorrências de 'Item2': ${ocorrenciasItem2}`); // Esperado: 1
console.log(`Ocorrências de 'ItemX': ${ocorrenciasInexistente}`); // Esperado: 0