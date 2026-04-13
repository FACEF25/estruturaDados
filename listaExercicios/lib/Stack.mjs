export default class Stack {

    #data // vetor privado
    #removidos //vetor privador
    #capacidade //vetor privado

    constructor(){
        this.#data = []
        this.#removidos = []
        this.capacidade = limit
    }

// Método para inserção (Modificado para Regra 2)
    push(val) {
        if (this.#data.length >= this.#capacidade) {
            console.error(`ERRO: Limite de ${this.#capacidade} ações atingido. Remova algo para continuar.`);
            return; // Impede a inserção
        }
        this.#data.push(val);
    }

    //método para remoção do valor
    pop(){
        if (this.isEmpty) return undefined

        const elementoRemovido =this.#data.pop
        this.#removidos.push(elementoRemovido)//armazena no historico
        return elementoRemovido
    }

    get tamanho() {
        return this.#data.length;
    }
    // Método para retornar o histórico (Regra 2)
    history() {
        return this.#removidos
    }

    //método para consultar o topo da pilha
    peek(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0
    }
    
    print(){
        return JSON.stringify(this.#data)
    }

}
