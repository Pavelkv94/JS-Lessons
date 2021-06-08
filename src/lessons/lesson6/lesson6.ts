console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

interface ITest {
    yo: Function
}

class Test implements ITest {
    name: string

    constructor(name: string) {
        this.name = name
    }
    yo() { }
}
interface ITest2 {
    bye: Function
}
class Test2 extends Test implements ITest2 {
    private saas = 50;
    constructor(age: string) {
        super(age)
    }
    bye() { };
}

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudent {
    name: string
    surname: string
    groupNumber: number
    progress: number[]
    averageMark: number
}

class Student implements IStudent {
    name: string
    surname: string
    groupNumber: number
    progress: number[]
    averageMark: number

    constructor(name: string, surname: string, groupNumber: number, progress: number[]) {
        this.name = name;
        this.surname = surname;
        this.groupNumber = groupNumber;
        this.progress = progress
        this.averageMark = this.progress.reduce((sum: number, mark: number) => sum + mark) / this.progress.length
    }
    //*функция сортировки
    private static sortStudent(s1: IStudent, s2: IStudent) {
        if (s1.averageMark > s2.averageMark) {
            return 1
        } else if (s1.averageMark < s2.averageMark) {
            return -1
        } else return 0
    }
    //*упорядочим по возрастанию
    static sort(arr: Array<IStudent>) {
        const temp = [...arr]
        return temp.sort(this.sortStudent)
    }
    //* Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
    private static isAllMarksEqualFour(marks: number[]) {
        return marks.every(mark => mark === 4)
    }
    private static isAllMarksEqualFive(marks: number[]) {
        return marks.every(mark => mark === 5)
    }

    private static filterStudents(arr: Array<IStudent>) {
        const result: Array<IStudent> = [];
        arr.forEach(student => {
            if (this.isAllMarksEqualFive(student.progress) || this.isAllMarksEqualFour(student.progress)) {
                result.push(student);
            }
        });
        return result
    }
    //* вывод результатов 
    static promtGoodStudents(arr: Array<IStudent>) {
        this.filterStudents(arr).forEach(s => {
            console.log(`student good is ${s.surname}, from ${s.groupNumber} group`)
        })
    }
}
let students = [];
students.push(new Student('vaca', 'pupkin', 1, [1, 5, 2, 3, 3]))
students.push(new Student('gogi', 'qwe', 2, [4, 5, 4, 4, 4]))
students.push(new Student('gena', 'pkoza', 24, [1, 1, 1, 3, 3]))
students.push(new Student('ana', 'vafera', 444, [5, 5, 5, 5, 5]))

// console.log(students);
// console.log(Student.sort(students))
// Student.promtGoodStudents(students)


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

class TestTask2 {
    per1: number
    per2: number

    constructor(per1: number, per2: number) {
        this.per1 = per1;
        this.per2 = per2;
    }
}

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

interface ISeller {
    name: string
    surname: string
    adress: string
    cashNumber: number
}
class Seller implements ISeller {
    name: string
    surname: string
    adress: string
    cashNumber: number

    constructor(name: string, surname: string, adress: string, cashNumber: number) {
        this.name = name;
        this.surname = surname;
        this.adress = adress;
        this.cashNumber = cashNumber;
    }
    set setName(name: string) {
        this.name = name
    }
    get getName() {
        return this.name
    }
    promtAttributes() {

    }

}

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.
interface ICar {
    mark: string
    numberCyl: number
    power: number
}
class Car implements ICar {
    mark: string
    numberCyl: number
    power: number

    constructor(mark: string, numberCyl: number, power: number) {
        this.mark = mark;
        this.numberCyl = numberCyl;
        this.power = power;
    }

    drive() {
        console.log("Zoom!");
    }
}

interface IBigCar {
    weight: number
}
class BigCar extends Car implements IBigCar {
    weight: number

    constructor() {
        super("MAZ", 4, 250)
        this.weight = 500;
    }
}
const tesla = new Car('Audi', 8, 500)
console.log(tesla)
const maz = new BigCar()
console.log(maz)

// just a plug
export default () => {
};