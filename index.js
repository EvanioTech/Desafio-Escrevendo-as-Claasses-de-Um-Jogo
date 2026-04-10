class Hero {
    constructor(nome,idade,tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }

    atacar() {
        if(this.tipo === "mago"){
            let ataque = "magia"
            console.log(`o ${this.tipo} atacou usando ${ataque}`)
        }
        else if(this.tipo === "guerreiro"){
            let ataque = "espada"
            console.log(`o ${this.tipo} atacou usando ${ataque}`)
        }
        else if(this.tipo === "monge"){
            let ataque = "artes marciais"
            console.log(`o ${this.tipo} atacou usando ${ataque}`)
        }
        else if(this.tipo === "ninja"){
            let ataque = "shuriken"
            console.log(`o ${this.tipo} atacou usando ${ataque}`)
        }
    }
}

let newHero = new Hero("Power", 255,"mago" )
let newHero2 = new Hero("Golias", 25,"guerreiro" )

newHero2.atacar()