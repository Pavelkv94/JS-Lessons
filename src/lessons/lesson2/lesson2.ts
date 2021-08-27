console.log('lesson 2');

//! Lexical environment
// http://jsflow.org/docs/lex-env/

//! Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//! Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

//! Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

//! Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


//! Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function createSum(a: number) {
    return function sum(b: number) {
        return a + b
    }
}
createSum(3)(6)
//! Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0;
    return function () {
        return ++count
    }
}
const counter = makeCounter();
counter(); // 1
counter(); // 2
const counter2 = makeCounter();
counter2(); // 1
counter(); // 3


//! Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter2(startCount: number) {
    return {
        increase: () => { ++startCount },
        decrease: () => { return --startCount }, //то же самое что и выше
        reset: () => { startCount = 0; return startCount },
        set: (b: number) => { startCount = b; return startCount },
        getCount: () => startCount
    }
}

let MCounter = makeCounter2(5);
MCounter.increase(); //6
MCounter.decrease(); //4
MCounter.reset(); //0
MCounter.set(9); //9
MCounter.getCount(); //5


//! Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

//* тут происходит переполнение стека вызова при вызове 10000+ значения
function sumTo(n: number): number {
    if (n === 1) return n;
    return n + sumTo(n - 1)
}
sumTo(3);
//* таким образом не происходит переполнение(хвостовая рекурсия, в js не работает)
function sumTo2(n: number, acc: number): number {
    if (n === 1) return n;
    return sumTo2(n - 1, acc + n)
}
sumTo2(3, 0);

//рЕШЕНИЕ:
function superSum(n: number): any {     //прилетает значение
    if (n === 0) return 0;              //если равно 0 возвращаем 0
    if (n === 1) return (num: number) => num;       //если равно 1 возвращаем 1

    let argumens: number[] = [];            //создается пустой массив
    function helper(...args: number[]) {
        argumens = [...argumens, ...args];   //из замыкания берется аргуменс и перезаписывается и обьединяется с массивом аргс, с каждым вызовом добавляется новое значение
        if (argumens.length >= n) {             //если длина меньше заданной длины то добавляем
            return argumens.reduce((acc, number) => acc + number);
        } else {
            return helper
        }
    }
    return helper
}

superSum(0) //0
superSum(3)(2)(5)(3) //10
superSum(3)(2)(5, 3) //10
superSum(3)(2, 5, 3) //10
superSum(3)(2, 5)(3) //10
superSum(3)(2, 5)(3, 9) //10


//! Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//Напишите функцию factorial(n), которая вычисляет факторила чисел 1 + 2 + ... + n.
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n: number): number {
    return n <= 1 ? n : n * factorial(n - 1)
}
factorial(3)


//! Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => { };