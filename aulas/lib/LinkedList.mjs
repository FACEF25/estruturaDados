class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

export default class LinkedList {
    #head // inicio da lista (cabeça)
    #tail // final da lista (cauda)
    #count //qtd de nodos da lista

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0;
    }

    //retorna se a lista encadeada esta vazia ou nao 
    get isEmpty() {
        return this.#count === 0
    }

    //retorna a qtd de elementos da lista
    get countElements() {
        return this.#count
    }

    //método de inserção na lista em qualquer posição 
    insert(position, val) {
        //cria nodo para armazenar o valor pretendido
        //criacao do node

        const inserted = new Node(val)

        //1 caso: se a lista tiver vazia
        if (this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted
        }
        //2 caso: insercao na primeira posição 
        else if (pos === 0) {
            inserted.next = this.#head
            this.#head = inserted
        }
        //3 caso: inserção no final da lista
        else if (pos >= this.#count) {
            this.#tail.next = inserted
            this.#tail = inserted
        }

        //4 caso: posição intermediaria
        else {
            let before = this.#head
            for (let i = 1; i < pos; i++) {
                before = before.next
            }
            let after = before.next;
            inserted.next = after;
            before.next = inserted;
        }
        this.#count++;
    }
    // metodo pra inserir na posição 
    insertHead(val) {
        this.insert(0, val);
    }

    //metodo pra inserir na ultima posicao(atalho)
    insertTail(val) {
        this.insert(this.#count, val)
    }

    //metodo pra remocao de um nodo na lista 
    remove(pos){
        //1 caso a lista esta vazia ou a posição for fora dos limites da lista 
        if (this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }
        let removed
        
    //2º caso: remoção do início da lista
    if (pos === 0) {
      removed = this.#head;

      this.#head = this.#head.next;

      if (this.#count === 1) {
        this.#tail = null;
      }
    }

    //3º caso: remoção de nodo intermediário ou final
    else {
      let before = this.#head;

      for (let i = 1; i < pos; i++) {
        before = before.next;
      }
      removed = before.next;
      let after = removed.next;

      before.next = after;
      if (pos === this.#count - 1) {
        this.#tail = before;
      }
    }
    this.#count--;
    return removed.data
  }

  removeHead(){
    return this.remove(0)
  }

  removeTail(){
    return this.remove(this.#count - 1)
  }

  indexOf(val){
    //1º caso: lista vazia
    if(this.isEmpty) {
      return -1
    }

    let node = this.#head

    for(let i = 0; i < this.#count; i++){
      if(node.data === val){
        return i
      }
      node = node.next
    }
    return -1
  }

 //metodo que retorna sem remover um nodo da lista de acordo com sua posição
 peek(pos){
    //1 caso:lista vazia ou posição fora dos limites 
    if (this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }

    //2 caso busca sequencial
    let node = this.#head
    for (let i = 0 ; i <pos; i++){
        node = node.next
    }
    return node.data
} 
//metodo para retornar (sem remover) o valor do primeiro nodo da lista (atalho)
peekHead(){
    return this.peek(0)
}
//metodo para retornar (sem remover) o valor do ultimo nodo da lista (atalho)
peekTail(){
    return this.peek(this.#count - 1)
}

//metodo para exibição da lista encadeada
print(){
    let output = '('
    let node = this.#head
    for (let i = 0; i< this.#count; i++){
        if (output !== '( '){
            output += ",";
        }
        output +=` [${i}] : ${node.data}`
        node = node.next
    }
    output += `) , count : ${this.#count}`
    return output
}
}