let a = { name: 'Teo' };
let b = { name: 'Teo' };
let e = a;
a.name = 'x';

let c = 5;
let d = 5;

console.log(a == b);
console.log(c == d);
console.log(a == e);
console.log('e=', e);
