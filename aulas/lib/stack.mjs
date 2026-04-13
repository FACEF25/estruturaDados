export default class Stack {
    #data // vetor privado

    constructor() {
        this.#data = []
    }

    //metodo de inserção no vetor 
    push(val){
        this.#data.push(val)
    }

    //metodo de remoção do vetor
    pop(){
        return this.#data.pop()

    }

    //metodo para consultar o topo da pilha
    peek(){
        return this.#data[0][this.#data.length - 1 ]
    }

    get isEmpty(){
        return this.#data.length === 0
    }

    print(){
        return JSON.stringify(this.#data)
    }
}