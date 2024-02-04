// 1) Написати функцію, яка повертає об'єкт родина з властивостями, які мають вигляд:
// ключ - ім'я члена родини, а значення - хто це із членів родини
// (наприклад: Марія - мама, Артем - тато, Ігор - син)
// (мінімум родина з 3 осіб)
// Інформацію про особу запитувати у користувача.
// Вивести отриманий об'єкт за допомогою for..in


// function createFamily() {
//     const family = {};

//     const limit = 3;

//     for (let i = 0; i < limit; i++) {
//         const key = prompt('Input name:');
//         const value = prompt('Input state:');
//         family[key] = value;
//     }

//     for (const key in family) {
//         console.log(`${key} - ${family[key]}`);
//     }

//     // return family;
// }
// console.log(createFamily());


// 2) Написати функцію конструктор для об'єкта Квадрат:
// - сторона
// - метод для обчислення площі
// - метод для обчислення периметру.
// Для методів робити прототип

/**
 * Общислення площі та периметру квадрату
 * @param {number} side - Сторона квадрата
 */

function Square(side) {
    this.side = side
}

const areaSquarePtoto = {};
const areaPrPtoto = {};

areaSquarePtoto.areaSquare = function() {
    return `S = ${this.side ** 2}`;
}

areaPrPtoto.areaPr = function() {
    return `P = ${4 * this.side}`;
}

Square.prototype = areaSquarePtoto;
// Square.prototype = areaPrPtoto;


const square1 = new Square(4);
const square2 = new Square(4);

// console.log(square1.areaPr());
console.log(square2.areaSquare());



// 3) Написати функцію конструктор, яка створює об'єкт Товар з властивостями:  
// - назва,
// - ціна,
// - валюта,  
// - метод показати усю інформацію про товар
// - метод, який приймає параметром знижку і повертає нову ціну з урахуванням знижки
// Для методів робити прототип

/**
 *  функцію конструктор, яка створює об'єкт Товар з властивостями
 * @param {string} name - Назва товара
 * @param {number} price - Ціна товара
 * @param {string} currency - Валюта товара
 * @param {number} discount - Знижка товара (не обовязково)
 */
function Item (name, price, currency, discount) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.discount = discount;
}

const itemFullInfoPtoto = {};
const itemDiscountPtoto = {};

itemFullInfoPtoto.getFullInfo = function() {
    return `Info: ${this.name}: ${this.price}${this.currency}`
}

itemDiscountPtoto.getDiscount = function() {
    return `Info with Discount: ${this.name}: ${this.price - this.discount}${this.currency}. Discount = -${this.discount}`
}

Item.prototype = itemFullInfoPtoto;
Item.prototype = itemDiscountPtoto;


const item1 = new Item('laptop', 4000, '€');
const item2 = new Item('mouse', 100, '$',10);


// console.log(item1.getFullInfo());
console.log(item2.getDiscount());