/*
    ESTRUTURA DE DADOS LISTA ENCADEADA
    - A lista encadeada é uma estrutura de dados formada por unidades
      de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem duas partes: uma, que armazena a
      informação e outra que guarda o endereço do próximo nodo da sequência
    - A qualquer momento, temos um conhecimento apenas limitado de onde
      se encontram todos os nodos da lista. Sabemos apenas onde está o
      primeiro e o último nodo da sequência. Os nodos intermediários precisam
      ser encontrados partindo-se do primeiro e percorrendo a sequência
*/

/* Classe que representa a unidade de armazenamento da lista encadeada */
class Node {
    constructor(val) {
        this.data = val     // Informação relevante para o usuário
        this.next = null    // Ponteiro para o próximo nodo da sequência
    }
}

/* Classe que representa a estrutura de dados lista encadeada */
export default class LinkedList {

    #head       // Início da lista (cabeça)
    #tail       // Fim da lista (cauda)
    #count      // Quantidade de nodos da lista
    #historico //Historico de remocoes 


    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0   
        this.#historico = []     
    }

    // Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty() {
        return this.#count === 0
    }

    // Getter que retorna a quantidade de elementos da lista
    get count() {
        return this.#count
    }

    // Método para inserir em qualquer posição
    insert(pos, val) {

        // Cria o nodo para armazenar o valor pretendido
        const inserted = new Node(val)

        // 1º caso: a lista está vazia
        if(this.isEmpty) {
            this.#head = inserted   // 1º nodo
            this.#tail = inserted   // último nodo            
        }
        
        // 2º caso: lista não vazia, inserção na primeira posição
        else if(pos === 0) {
            // O sucessor do nodo inserido será o nodo que atualmente
            // ocupa a primeira posição da lista
            inserted.next = this.#head
            // O início da lista passa a ser o novo nodo inserido
            this.#head = inserted
        }

        // 3º caso: inserção no final da lista
        else if(pos >= this.#count) {
            // O atual último nodo da lista passa a apontar para o inserido
            this.#tail.next = inserted
            // O último nodo passa a ser o nodo inserido
            this.#tail = inserted
        }

        // 4º caso: posição intermediária
        else {
            // Nodo da posição ANTERIOR à de inserção
            let before = this.#head     // Começa pelo primeiro nodo
            
            // Percurso até a posição ANTERIOR à de inserção,
            // saltando de nodo em nodo por meio do ponteiro next
            for(let i = 1; i < pos; i++) before = before.next
            
            // Nodo da posição POSTERIOR à de inserção
            let after = before.next

            // O sucessor do nodo inserted passa a ser o nodo after
            inserted.next = after

            // O sucessor do nodo before passa a ser o nodo inserted
            before.next = inserted
        }

        this.#count++

    }

    // Método para inserção na primeira posição (atalho)
    insertHead(val) {
        this.insert(0, val)
    }

    // Método para inserção na última posição (atalho)
    insertTail(val) {
        this.insert(this.#count, val)
    }

    //metodo que retorna os elementos removidos
    history(){
        return this.#historico
    }

    // Método para remoção de um nodo na lista
    remove(pos) {

        // 1º caso: a lista está vazia ou a posição informada está
        // fora dos limites da lista
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined

        let removed

        // 2º caso: remoção do início da lista
        if (pos === 0) {
            removed = this.#head    // Marca o primeiro nodo para remoção
            // O início da lista passa a ser o nodo seguinte
            this.#head = this.#head.next

            // Atualizando o tail em caso de remoção do único nodo restante
            if(this.#count === 1) this.#tail = null
        }

        // 3º caso: remoção de nodo intermediário ou final
        else {
            let before = this.#head
            // Percorre a lista até a posição ANTERIOR à re remoção
            for(let i = 1; i < pos; i++) before = before.next

            // O nodo removido será o seguinte
            removed = before.next

            let after = removed.next
            
            // O nodo anterior ao removido passa a apontar para o nodo
            // posterior ao removido
            before.next = after

            // Atualiza o tail em caso de remoção do último nodo
            if(pos === this.#count - 1) this.#tail = before
        }

        // Decrementa contagem de nodos da lista
        this.#count--
        
        //adiciona o valor do nó removido ao historico
        this.#historico.push(removed.data)

        // Retorna a informação armazenada no nodo removido
        return removed.data
    }

    // Método para remover o primeiro nodo da lista (atalho)
    removeHead() {
        return this.remove(0)
    }

    // Método para remover o último nodo da lista (atalho)
    removeTail() {
        return this.remove(this.#count - 1)
    }

    // Método para verificar a posição da primeira ocorrência de um valor na lista
    // Retorna:
    // 1) Caso o valor exista, a posição onde ele foi encontrado
    // 2) Caso o valor não exista, -1
    indexOf(val) {

        // 1º caso: lista vazia
        if(this.empty) return -1

        let node = this.#head

        for(let i = 0; i < this.#count; i++) {
            // Se o nodo contém o valor procurado, retorna a posição do nodo
            if (node.data === val) return i
            node = node.next
        }

        // Se chegamos ao final da lista sem encontrar o valor, retornamos -1
        return -1
    }

    // Método que retorna (sem remover) um nodo da lista, de acordo com sua posição
    peek(pos) {

        // 1º caso: lista vazia ou posição fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined

        // 2º caso: busca sequencial
        let node = this.#head

        for(let i = 0; i < pos; i++) node = node.next

        return node.data
    }

    // Método para retornar (sem remover) o valor do primeiro nodo da lista (atalho)
    peekHead() {
        return this.peek(0)
    }

    // Método para retornar (sem remover) o valor do último nodo da lista (atalho)
    peekTail() {
        return this.peek(this.#count - 1)
    }

    // Exercício 2: Reversão da Lista
    reverse() {
        // Se a lista estiver vazia ou tiver apenas um elemento, não precisa inverter
        if (this.isEmpty || this.#count === 1) return;

        let prev = null;         // Nó anterior
        let current = this.#head; // Nó atual (começa na cabeça)
        let next = null;         // Auxiliar para não perder a referência do próximo

        // Inverte o tail e o head originais para a nova configuração final
        this.#tail = this.#head;

        while (current !== null) {
            next = current.next;  // Passo 1: Salva o próximo nó
            current.next = prev;  // Passo 2: Inverte o ponteiro (aponta para o de trás)
            
            // Passo 3: Move os ponteiros uma posição para frente
            prev = current;
            current = next;
        }

        // Passo 4: O último nó processado (prev) torna-se a nova cabeça
        this.#head = prev;
    }

    // Exercício 3: Contagem de Ocorrências
    countOccurrences(val) {
        let count = 0;
        let current = this.#head; // Começa pelo início da lista

        // Regra 1: Percorre toda a lista
        while (current !== null) {
            // Regra 2: Verifica se o valor do nó atual é o procurado
            if (current.data === val) {
                count++;
            }
            // Passa para o próximo nó
            current = current.next;
        }

        return count;
    }
    // Exercício 4: Remoção de Todas as Ocorrências
    removeAll(val) {
        if (this.isEmpty) return;

        let current = this.#head;
        let prev = null;

        while (current !== null) {
            if (current.data === val) {
                // Caso 1: O item a ser removido está na cabeça (head)
                if (current === this.#head) {
                    this.#head = current.next;
                    current = this.#head; // O novo current é a nova cabeça
                    
                    // Se a lista ficou vazia após essa remoção
                    if (this.#head === null) this.#tail = null;
                } 
                // Caso 2: O item está no meio ou no fim
                else {
                    prev.next = current.next;
                    
                    // Se removeu o último (tail), atualiza o ponteiro tail
                    if (current === this.#tail) {
                        this.#tail = prev;
                    }
                    
                    current = prev.next; // Move para o próximo sem alterar o prev
                }
                this.#count--;
            } else {
                // Não houve remoção, apenas movemos os ponteiros para frente
                prev = current;
                current = current.next;
            }
        }
    }

    // Exercício 5: Transformar Lista em Array
    toArray() {
        const result = []
        let node = this.#head // Começa pelo primeiro nó

        // Regra 1: Percorre a lista e adiciona os dados ao array na ordem correta
        while (node !== null) {
            result.push(node.data)
            node = node.next
        }

        return result
    }

    // Método para exibição da lista encadeada
    print() {
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            if (output !== '( ') output += ', '
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output += ` ), count: ${this.#count}`
        return output
    }
        
}