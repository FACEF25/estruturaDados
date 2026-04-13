/*
    No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in.
    A sequência inicial de passageiros é:

    * Passageiro A
    * Passageiro B
    * Passageiro C
    * Passageiro D
    * Passageiro E
    
    1-) Crie um objeto filaAero e insira os passageiros na fila corretamente.

    2-) Imprima a fila antes do início do embarque.

    3-) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Três novos passageiros fizeram check-in:

    * Passageiro F
    * Passageiro G
    * Passageiro H
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.

    8-) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.

    */

import Queue from './lib/Queue.mjs';

const filaAero = new Queue();

filaAero.enqueue('Passageiro A');
filaAero.enqueue('Passageiro B');
filaAero.enqueue('Passageiro C');
filaAero.enqueue('Passageiro D');
filaAero.enqueue('Passageiro E');

console.log("Fila antes do embarque:");
console.log(filaAero.print());

const embarcado1 = filaAero.dequeue();
console.log("Passageiro chamado para embarque:", embarcado1);

console.log("Fila depois do primeiro embarque:");
console.log(filaAero.print());

filaAero.enqueue('Passageiro F');
filaAero.enqueue('Passageiro G');
filaAero.enqueue('Passageiro H');

console.log("Fila depois dos novos check-ins:");
console.log(filaAero.print());

console.log("Próximo passageiro da fila:");
console.log("Comando: filaAero.peek()");
console.log("Nome:", filaAero.peek());

filaAero.dequeue();
console.log("Fila atualizada depois do segundo embarque:");
console.log(filaAero.print());