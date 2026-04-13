/*
    ESTRUTURA DE DADOS FILA

    - Fila é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo
      no final da estrutura e a segunda no início da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são situações que envolvem o processamento de 
      tarefas por ordem de chegada.
*//*
    ESTRUTURA DE DADOS FILA (Modificada para o Exercício 1)
*/
export default class Queue {

    #data           // Vetor privado
    #operationCount // Variável privada para contagem (Regra 1)

    constructor() {
        this.#data = [] 
        this.#operationCount = 0 // Inicializa o contador em zero
    }

    // Método para inserção na fila
    enqueue(val) {
        this.#data.push(val)
        this.#operationCount++ // Incrementa a cada inserção
    }

    // Método para remoção da fila
    dequeue() {
        if (!this.isEmpty) {
            this.#operationCount++ // Incrementa a cada remoção bem-sucedida
            return this.#data.shift()
        }
        return undefined
    }

    // Método que retorna o total de operações (Regra 2)
    getOperationCount() {
        return this.#operationCount
    }

    // Método para consultar o início da fila sem remover o elemento
    peek() {
      return this.#data[0]
    }

    // Getter para informar se a fila está ou não vazia
    get isEmpty() {
      return this.#data.length === 0
    }

    // Método que imprime a fila
    print() {
      let output = '[ '
      for(let i = 0; i < this.#data.length; i++) {
        if(output !== '[ ') output += ', '
        output += `(${i}): ${this.#data[i]}`
      }
      return output + ' ]'
    }
}