// 1) Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
// і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).
// Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу Товар.
// У фізичного товара додається властивість вага.
// У віртуального товара додається властивість розмір пам'яті.

class Products {
    constructor(name, costs, valute, numbr) {
        this.name = name;
        this.costs = costs;
        this.valute = valute;
        this.numbr = numbr;
    }

    returnInformation() {
        return `Назва - ${this.name}, Ціна - ${this.costs}, Валюта - ${this.valute}, Кількість - ${this.numbr}`;
    }

    buyProducts(numbr) {
        try {
            if (numbr <= 0) {
                throw new Error("Кількістьмає бути більше нуля");
            }
            const suma = this.costs * numbr;
            if (numbr <= this.numbr) {
                this.numbr -= numbr;
                return `Товар ${this.name} куплено. Cума ${suma} ${this.valute}`;
            } else {
                throw new Error(`Недостатня кількість товару - ${this.name}. Достатня кількість даного товару - ${this.numbr}`);
            }
        } catch (error) {
            return `Помилка:${error.message}`;
        }
    }
}

class physicalProducts extends Products {
    constructor(name, costs, valute, numbr, weight) {
        super(name, costs, valute, numbr);
        this._weight = weight;
    }

    returnInformation() {
        return `Назва - ${this.name}, Ціна - ${this.costs}, Валюта - ${this.valute}, Кількість - ${this.numbr}, Вага - ${this._weight}`;
    }
}

class virtualProducts extends Products {
    constructor(name, costs, valute, numbr, size) {
        super(name, costs, valute, numbr);
        this._size = size;
    }

    returnInformation() {
        return `Назва - ${this.name}, Ціна - ${this.costs}, Валюта - ${this.valute}, Кількість - ${this.numbr}, Розмір пам'яті - ${this._size}`;
    }
}

const physicalProducts1 = new physicalProducts(`Laptop`, 1150, `USD`, 10, 15.6);
const virtualProducts1 = new virtualProducts('Windows', 600, `USD`, 5, `60GB`);

console.log(physicalProducts1.returnInformation());
console.log(physicalProducts1.buyProducts(5));

console.log(virtualProducts1.returnInformation());
console.log(virtualProducts1.buyProducts(100));


// 2) Створити абстрактний клас Figeure3D з властивостю ім'я (string не пуста) і методом обчислити об'єм.
// Створити класи нащадки: сфера, куб, *циліндр.
// Створити функцію getVolume3DFigure, яка приймає будь яку 3d фігуру і повертає її об'єм.

function Figure3D(name) {
    if (this.constructor === Figure3D) {
        throw new Error("Can`t instantiate abstract class");
    }
    if (typeof name != 'string' || name.length === 0) {
        throw new Error("Name must be a non-empty string");
    }
    this.name = name;
}

Figure3D.prototype.getVolume = function () {
    throw new Error("Abstract method `getVolume` must be implemented in derived classes");
}

function Sphere(name, radius) {
    Figure3D.call(this, name);
    this.radius = radius;
}

Sphere.prototype = Object.create(Figure3D.prototype);
Sphere.prototype.constructor = Sphere;

Sphere.prototype.getVolume = function () {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
}

function Cube(name, sideLength) {
    Figure3D.call(this, name);
    this.sideLength = sideLength;
}

Cube.prototype = Object.create(Figure3D.prototype);
Cube.prototype.constructor = Cube;

Cube.prototype.getVolume = function () {
    return Math.pow(this.sideLength, 3);
}

function Cylinder(name, radius, height) {
    Figure3D.call(this, name);
    this.radius = radius;
    this.height = height;
}

Cylinder.prototype = Object.create(Figure3D.prototype);
Cylinder.prototype.constructor = Cylinder;

Cylinder.prototype.getVolume = function () {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
}

function getVolume3DFigure(figure) {
    try {
        if (figure instanceof Figure3D) {
            return figure.getVolume();
        } else {
            throw new Error("Invalide 3D figure");
        }
    } catch (error) {
        return `Помилка - ${error.message}`;
    }
}

const sphere = new Sphere('сфера', 5);
const cube = new Cube('куб', 3);
const cylinder = new Cylinder('циліндр', 4, 6);

console.log(getVolume3DFigure(sphere))
console.log(getVolume3DFigure(cube))
console.log(getVolume3DFigure(cylinder))
console.log(getVolume3DFigure("Invalide"));


// 3)Написати клас User(ім'я, прізвище, стать ) і клас Student(все, що має User і додатково рік вступу).
// За допомогою вбудованого об'єкту Date перевіряєте, щоб рік вступу був не більше за поточний рік.
// У студента буде метод, який повертає кількість років які начається студент, тобто курс.
// Якщо рік вступу дорівнює поточному року - то це 1 курс. Місяці і дні вступу не враховуємо.

class User {
    constructor(name, surname, sex) {
        this.name = name;
        this.surname = surname;
        this.sex = sex;
    }

    set name(value) {
        try {
            if (typeof value === 'number') {
                throw new TypeError('імя має бути рядком')
            }
            if (value.length <= 2) {
                throw new RangeError('імя мінімум з 2 символів')
            }
        } catch (error) {
            console.log(error);
        }
        this._name = value;
    }

    get name() {
        return this._name;
    }

    

    set surname(value) {
        try {
            if (typeof value === 'number') {
                throw new TypeError('прізвище має бути рядком')
            }
            if (value.length <= 2) {
                throw new RangeError('прізвище мінімум з 2 символів')
            }
        } catch (error) {
            console.log(error);
        }
        this._surname = value;
    }
    
    get surname() {
        return this._surname;
    }

    set sex(value) {
        try {
            if (value === 'men' || value === 'women') {
                this._sex = value;
            } else {
                throw new Error("Стать повинна бути 'чоловік' або 'жінка'.");
            }
        } catch (error) {
            console.log(error);
        }
        this._sex = value;
    }

    get sex() {
        return this._sex;
    }
}

class Student extends User {
    constructor(name, surname, sex, yearInt) {
        super(name, surname, sex);
        this.yearInt = yearInt;        
    }

    set yearInt(value) {
        try {
            if (typeof value !== 'number' || !Number.isInteger(value)) {
                throw new TypeError('рік має бути числом і цілим числом');
            }
        } catch (error) {
            console.log(error);
        }
        this._yearInt = value;
    }

    get syearIntx() {
        return this._yearInt;
    }
    

    takeCourses() {
        const nowYear = new Date().getFullYear();

        try {
            // console.log(this._yearInt)
            if (this._yearInt <= nowYear) {
                const resultYear = nowYear - this._yearInt + 1;
                if (resultYear <= 5 ){
                    return resultYear;
                } else {
                    throw new Error("Рік вступу не може бути пізніше ніж 5 років від поточного року.");
                }
            } else {
                throw new Error("Рік вступу не може бути пізніше поточного року і має бути числом.");
            }
        } catch (error) {
            console.error(`Помилка: ${error}`);
        }
    }
}


const student = new Student('Petro', 'Petrovich', "men", 2022);
console.log(student.takeCourses());
