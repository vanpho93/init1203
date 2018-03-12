class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi.`);
    }
}

class Child extends Person {
    constructor(name, age, toy) {
        super(name, age);
        this.toy = toy;
    }

    sayHello() {
        super.sayHello();
        console.log('abcd');
    }

    play() {
        console.log('I am playing ' + this.toy);
    }
}

const teo = new Child('Teo', 10, 'Auto');
teo.play();
teo.sayHello();
console.log(teo);
