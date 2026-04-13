/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/

import Stack from "./lib/Stack.mjs";

const torreA =  new Stack();
const torreB =  new Stack();
const torreC =  new Stack();

//iniciar torre B
torreB.push(1);
torreB.push(2);
torreB.push(3);
torreB.push(4);

console.log("----- ANTES ------");
console.log("Torre A:", torreA.print());
console.log("Torre B:", torreB.print());
console.log("Torre C:", torreC.print());

//movimentações
torreC.push(torreB.pop());

torreA.push(torreB.pop());

torreA.push(torreC.pop());

torreC.push(torreB.pop());

torreB.push(torreA.pop());

torreC.push(torreA.pop());

torreC.push(torreB.pop());

torreA.push(torreB.pop());

torreA.push(torreC.pop());

torreB.push(torreC.pop());

torreB.push(torreA.pop());

torreA.push(torreC.pop());

torreC.push(torreB.pop());

torreA.push(torreB.pop());

torreA.push(torreC.pop());

//resultado
console.log("----- DEPOIS ------");
console.log("TorreA:", torreA.print());
console.log("TorreB:", torreB.print());
console.log("TorreC:", torreC.print());