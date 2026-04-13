import LinkedList from "./lib/LinkedList.mjs";

const lista = new LinkedList()

console.log
("A lista está vazia?" , + lista.isEmpty ? "Sim": "Não");

console.log(lista.print());

lista.insert(0, 'Fusca')
lista.insert(0,'Corcel')
lista.insert(2,'Diplomata')
lista.insert(2, 'Chevette')
lista.insert(4,'Uno')
lista.insert(3,'Sandero')
console.log(lista.print());
lista.insert(3,'T-CROSS')

console.log(lista.print());


lista.insertHead('Corolla')
lista.insertTail('Toro')

console.log(lista.print());

let removido = lista.remove(0)
console.log({removido});
console.log(lista.print());

let idxFusca = lista.indexOf("Fusca")
let idxSandero = lista.indexOf("Sandero")
let idxUno = lista.indexOf("Uno")
let idxNinguem = lista.indexOf("Ninguem")

console.log({idxFusca, idxUno, idxNinguem, idxSandero});

let pos0 = lista.peek(0)
let pos3 = lista.peek(3)
let pos7 = lista.peek(7)

log({pos0, pos3, pos7})



