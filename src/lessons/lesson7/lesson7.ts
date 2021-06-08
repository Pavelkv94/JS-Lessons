import './jss7'

console.log('Lesson 7');


// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//*Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal {
    name: string
    constructor(name: string = 'Cat') {
        this.name = name
    };
    walk() { console.log(`${this.name} walking`) };
    eat() { console.log(`${this.name} eating`) };
    sleep() { console.log(`${this.name} sleeping`) };
}

let a1 = new Animal()
console.log(a1.eat())
console.log(a1.walk())
console.log(a1.sleep())

//*Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают
class Monkey extends Animal {
    constructor(name: string = 'Monkey') {
        super(name)
    }
    roar() { console.log(`${this.name} roaring`) };
    climb() { console.log(`${this.name} climbing`) };
}
let m1 = new Monkey()
console.log(m1.climb())
console.log(m1.roar())

//*Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают
class Human extends Monkey {
    constructor(name: string = "Human") {
        super(name)
    }
    speak() { console.log(`${this.name} speaking`) };
    think() { console.log(`${this.name} thinking`) };
}

let h1 = new Human()
console.log(h1.think())
console.log(h1.speak())
//* Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


//! Task 05
// Используя метод Apply реализовать свой собственный метод bind

//@ts-ignore
Function.prototype.customBind = function (ctx, ...args) {
    //так как this просчитывается когда вызывается то сохраняем его в переменную
    const that = this;
    // const self = this;
    // const _this = this;
    return function (...args2: any) {
        return that.apply(ctx, [...args, ...args2])
        //return that.call(ctx, ...args, ...args2)
    }
}
//?Второй вариант без колл и апплай
//@ts-ignore
Function.prototype.customBind2 = function (ctx, ...args) {
    ctx.___someValue___ = this;
    return function (...args2: any) {
        return ctx.___someValue___(...args, ...args2)
    }
}



// just a plug
export default () => { };