function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        // console.log('Xin chao, toi la ' + this.name + ', ' + this.age + ' tuoi.');
        console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi.`);
    }
}

const teo = new Person('Teo', 10);
const ti = new Person('Ti', 20);
teo.sayHello();

// console.log(teo, ti);
