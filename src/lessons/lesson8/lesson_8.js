//! Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]
let a = str[0] //'f'

//! Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4
Number.prototype.plus = function (value) { return this + value }
Number.prototype.minus = function (value) { return this - value }

//! Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'
function str(a, b, c, d) {
	return `${b}${a}${c}${a}${d}`
}
//*либо 
function str2() {
	return [].slice.call(arguments, 1).join(arguments[0])
}

//! Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
	valueNode: 3,
	next: [{
		valueNode: 1,
		next: null
	},
	{
		valueNode: 3,
		next: null
	},
	{
		valueNode: 2,
		next: null
	},
	{
		valueNode: 2,
		next: [
			{
				valueNode: 1,
				next: null
			},
			{
				valueNode: 5,
				next: null
			}
		]
	}]
};
//* рекурсивное решение
function countBranches(tree) {
	let sum = 0;
	function helper(tr) {
		sum += tree.valueNode
		if (tree.next !== null) {
			tree.next.array.forEach(element => {
				helper(element)
			});
		}
	}
	helper(tree)
	return sum
}

//* решение циклом
function countBranches1(tree) {
	let arr = [tree];
	let sum = 0;
	let current;

	while (arr.length > 0) {
		current = arr.shift();
		sum += current.valueNode

		if (current.next !== null) {
			for (let i = 0; i < current.next.length; i++) {
				arr.push(current.next[i])
			}
		}
	}
}

//! Task 5
// исправить код, что бы работал правильно

// for (var i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 100);
// }

//* Заменить на let
for (let i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
}

//* Ввести переменную
for (var i = 0; i < 10; i++) {
	let t = i
	setTimeout(function () {
		console.log(t);
	}, 100);
}

//* через bind 
for (var i = 0; i < 10; i++) { setTimeout(console.log.bind(null, i), 100); };

//! Task 6
// Реализуйте функцию Foo, что бы все корректно работало

function Book(name, author) {
	this.name = name;
	this.author = author;
	return this;
}

//function Foo(Book, 'Учебник javascript', 'Петр Сергеев') 
function Foo(C, name, author) {
	return new C(name, author)
}
var book = Foo(Book, 'js', 'petr');
console.log(book.name);

//! Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5
//* через замыкание
function f(a, b) {
	if (b !== undefined) {
		return a + b
	} else {
		return function (b) {
			return a + b
		}
	}
}

//! Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 9

//* замыкание 
function fa(arg) {
	let sum = arg;
	return function rec(a) {
		if (arg !== undefined) {
			sum += a
			return rec;
		} else {
			return sum;
		}
	}
}

//! Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3

function one(arg) {
	if (typeof arg === 'function') {
		return arg(1);
	} else {
		return 1;
	}
}

function two(arg) {
	if (typeof arg === 'function') {
		return arg(2);
	} else {
		return 2;
	}
}

function five(arg) {
	if (typeof arg === 'function') {
		return arg(5);
	} else {
		return 5;
	}
}

function seven(arg) {
	if (typeof arg === 'function') {
		return arg(7);
	} else {
		return 7;
	}
}

function plus(arg) {
	return function (a) {
		return a + arg
	}
}
function minus(arg) {
	return function (a) {
		return a - arg
	}
}
//! Task 10
// Реализовать функцию сортировки массива пузырьком
function bubbleSort(array) {
	for (j = 0; j < array.length - 1; j++) { //-1 потому что array[i+1] выходит за пределы массива

		for (i = 0; i < array.length - 1; i++) {
			let temp = array[i + 1]
			if (array[i] > array[i + 1]) {
				array[i + 1] = array[i]
				array[i] = temp;
			}
		}
	}
	return array
}


//! Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.

//* 1. если длина нечетная то не закрыты
//* 2. брать первый и последний символ, если они закрываются то их вырезать
//*3. искать пары скобок
function check(str) {
	//создаем конфигурацию
	const config = {
		'(': ')',
		'{': '}',
		'[': "]"
	}
	//создаем рекурсивную функцию
	const helper = str => {
		if (str.length === 0) { return true }
		if (str.length % 2 !== 0) { return false }

		//проверка 
		const isOpenBrackets = char => Object.keys(config).includes(char) //config[char] !== undefined
		const getClosingBracket = char => config[har];

		for (let i = 0; i < str.length; i++) {
			if (isOpenBrackets(str[i]) && getClosingBracket(str[i]) === str[i + 1]) {
				let newString = `${str.slice(0, i)}${str.slice(i + 2)}`
				return helper(newString)
			}
		}
		return false
	}
	return helper(str)
}

//! Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
function unique(arr) {
	const res = {};
	arr.forEach(item => {
		res[item] = '';
	})
	return Object.keys(res).map(item => Number(item))
}

//! Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

function double(arr) {
	return arr.filter(t => t !== null).map(t => t * 2)
}
//! Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

//! Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

//! Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

function Bomb(message, delay) {
	this.message = message
	setTimeout(this.blowUp.bind(this), delay * 1000)
}

Bomb.prototype.blowUp = function () {
	console.log(this.message)
}

new Bomb('exposion', 5)

//! Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

//! Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
function isSorted(arr) {
	if (arr.length <= 1) return true;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) return false
	}
	return true
}
//! Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

//! Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

// Task 21
// Что выведет консоль?

Promise
	.resolve()
	.then(() => console.log(1))
	.then(() => console.log(2))
	.then(() => console.log(3));

Promise
	.resolve()
	.then(() => console.log(4))
	.then(() => console.log(5))
	.then(() => console.log(6));