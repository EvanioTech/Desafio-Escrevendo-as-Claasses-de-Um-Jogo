# 🧙‍♂️ Desafio: Classes de um Jogo

## 📌 Descrição

Este projeto foi desenvolvido como parte de um desafio prático de programação, com o objetivo de aplicar conceitos fundamentais de JavaScript, como:

* Variáveis
* Operadores
* Estruturas de decisão
* Funções
* Classes e Objetos

---

## 🎯 Objetivo

Criar uma classe genérica que represente um herói de uma aventura, contendo:

### 🧩 Propriedades:

* `nome`
* `idade`
* `tipo` (ex: guerreiro, mago, monge, ninja)

### ⚔️ Método:

* `atacar()`

O método deve exibir a mensagem:

```
o {tipo} atacou usando {ataque}
```

Onde o tipo de ataque varia conforme o tipo do herói.

---

## 💻 Código Desenvolvido

```javascript
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
```

---

## 🚀 Saída

```
o guerreiro atacou usando espada
```

---

## 📚 Aprendizados

* Criação de classes em JavaScript
* Uso do `constructor`
* Manipulação de propriedades com `this`
* Estruturas condicionais (`if/else`)
* Instanciação de objetos com `new`

---

## 🛠️ Tecnologias Utilizadas

* JavaScript (ES6+)

---

## ✍️ Autor

Desenvolvido por **Matiaas**
