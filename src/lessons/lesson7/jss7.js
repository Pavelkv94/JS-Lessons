console.log("test");

let obj = { name: 'Eugen' }


class Test {
    callTest() {

    }
}
let t1 = new Test();
console.log(t1)
t1.__proto__.sayHi = function () {}
console.log('t1', t1)

let t2 = new Test();
console.log('t2', t2)
