class FormaGeometrica{
    //criação de um atributo privado chamado base
    #base
    #altura
    #tipo

//    constructor(base, altura, tipo){
//        this.#base = base
//        this.#altura = altura
//        this.#tipo = tipo   
//    
//    }

    get base(){
        return this.#base
    }

    get altura(){
        return this.#altura
    }

    get tipo(){
        return this.#tipo
    }

    set base(valor){
        if (typeof valor != 'number' ||  valor <= 0 ){
            throw new Error ("ERRO: O valor da base precisa ser numérico e maior que 0 ")
        }
        this.#base = valor 
    }

  set altura(valor){
        if (typeof valor != 'number' ||  valor <= 0 ){
            throw new Error ("ERRO: O valor da altura precisa ser numérico e maior que 0 ")
        }
        this.#altura = valor 
    }

  set tipo(valor){
        if (!["R","T","E"].includes(valor.toUpperCase())){
            throw new Error ("ERRO: O tipo precisa ser R, T ou E, referenciando as formas geométricas Retangulo, Triangulo ou Elipse ")
        }
        this.#tipo = valor.toUpperCase()
    }

    calcArea(){
        switch(this.#tipo){
            case 'R':
                return this.#base * this.#altura
            case 'T': 
                return (this.#base * this.#altura) /2 
            case 'E':
                return (this.#base /2) * (this.#altura /2) * Math.PI
        }
    }

}

//instanciando a classe FormaGeometrica e atribuindo valores para os atributos base, altura e tipo
let forma1 = new FormaGeometrica()
let forma2 = new FormaGeometrica()


forma1.base = 10
forma1.altura = 5
forma1.tipo = "R"
console.log(`A área do retângulo é: ${forma1.calcArea()}`)  

forma2.base = 20
forma2.altura = 12
forma2.tipo = "R"
console.log(`A área do triangulo é: ${forma2.calcArea()}`)  