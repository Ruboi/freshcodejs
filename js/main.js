/*Завдання на змінні та типи данних:
1) Створити змінні для слідуючих значень (самі значення у дужках):
вік людини (23),
значення, яке вказує чи повнолітня людина(true),
назва мови програмування (С++),
значення, яке вказує на наявність у людини домашньої тварини - точно не має - самі поміркуйте яке це значення!
Залогувати значення змінної та тип значення в консолі.*/

const userAge = 23;
const isLegalAge = true;
const langProg = 'C++';
const isPet = false;

console.log(typeof userAge, ':>> ', userAge);
console.log(typeof isLegalAge, ':>> ', isLegalAge);
console.log(typeof langProg, ':>> ', langProg);
console.log(typeof isPet, ':>> ', isPet);


/*Завдання на оператори:
2) Переробіть код, використовуючи оператори присвоєння, інкремент і декремент
let number = 456;
//код нижче треба змінити
number = number +6
number = number +1
number = number /2
number = number -3
number = number -1
number = number %4
number = number +'qwerty'*/

let number = 456;
number += 6;
number ++;
number /= 2;
number -= 3;
number --;
number %= 4;
number += 'qwerty';

console.log('number :>> ', number);

// 3) Створити дві змінні зі значеннями 45 і 12 і виконати з ними всі аріфметичні операції з логуванням операції і результату в консоль.

const num1 = 45;
const num2 = 12;

console.log(num1 + ' + ' + num2 + ' :>> ', num1 + num2);
console.log(num1 + ' - ' + num2 + ' :>> ', num1 - num2);
console.log(num1 + ' * ' + num2 + ' :>> ', num1 * num2);
console.log(num1 + ' / ' + num2 + ' :>> ', num1 / num2);
console.log(num1 + ' % ' + num2 + ' :>> ', num1 % num2);
console.log(num1 + ' ** ' + num2 + ' :>> ', num1 ** num2);

/*4) Користувач вводить ім'я. Ви виводите модальне вікно(alert) з  привітанням з користувачем по імені.
Наприклад, користувач ввів Влад - ви виводите: Привіт, Влад!*/

const nameUser = prompt('Ведіть імя:');

alert('Привіт, ' + nameUser + '!');

// 5) Обчислити площу кола, при відомому радіусі. Значення радіуса вводить користувач. 
// Значення перевіряєм, щоб це було додатнє число не більше 100. - S = πr2

const circleRadius = Number(prompt('Ведіть радіус кола:'));


if (circleRadius < 100 && circleRadius > 0) {
    const circleArea = Math.PI * circleRadius ** 2;
    console.log('площа кола :>> ', Math.round(circleArea));
    console.log('площа кола :>> ', circleArea);
} else {
    console.log('Ви ввели не вірне число - меньше 1 і більше 100');
}

// 6) Якщо значення змінної number позитивне - виводимо "positive", якщо дорівнює 0 - "zero",  інакше - "negative"

const numberType = -1;

if (numberType > 0) {
    console.log('positive')
} else if (numberType === 0){
    console.log('zero')
} else {
    console.log('negative')
}

// 7) Є дві змінні(типу число) - num1 і num2. Якщо num1>num2 - вивести результат віднімання, інакше - вивести результат множення

const num11 = 5;
const num22 = 10;

if (num11 >= num22) {
    const result = num11 - num22;
    console.log(result)
} else {
    const result = num11 * num22;
    console.log(result)
}

// 8) Є дві змінні. Вивести "yes", якщо змінні мають однаковий тип, в іншому випадку "no".

const typeInp1 = 5;
const typeInp2 = '10';

if (typeof typeInp1 === typeof typeInp2) {
    console.log('yes')
} else {
    console.log('no')
}

// 9) Якщо значення змінної, яку ввів користувач, кратно(тобто ділиться без остачі) на 7 і одночасно кратно 3 - виводимо "you win!", інакше - "you loose"

const userNumber = Number(prompt('Ведіть число яке ділиться на 7 та 3:'));

if (userNumber % 7 === 0 &&  userNumber % 3 === 0) {
    console.log('you win!');
} else {
    console.log('you loose =((');
}