export default class Queue{
    #data //Vetor print  -- privado (#) -- só pode ser acessado dentro da classe 
    constructor(){
        this.#data = []
    }
    // metodo de inserção na fila
    enqueue(val){
        this.#data.push(val)
    }

    //metodo de remoção na fila 
    dequeue(){
        this.#data.shift
    }

    //metodo pra consultar o inicio da fila sem remover o elmento 
    peek(){
        return this.#data[0]
    }

    get isEmpty(){
        return this.#data.length === 0 
    }

    //metodo pra imprimir a fila(efeitos de depuração)
    print() {
        let output = '[ ';

        for(let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", ";
            }

            output += `(${i}): ${this.#data[i]}`;
        }

        return output + " ]";
    }
}

         
          

    