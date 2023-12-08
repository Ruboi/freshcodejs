// function multiply(n2, n1 = 1) {
//     let power = 1;
//     for (n1; n1 <=n2; n1++) {
//         power *= n1;
//     }

//     return power;
// }

// console.log('multiply(4,2)', multiply(10))

// 1) Написати чисту функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач - це ще одна функція.

// function odd_event(inNumber) {
//     return inNumber % 2 === 0 ? "Odd" : "Even";
// }

// const userNumber = prompt('Ведіть число:');

// console.log(odd_event(userNumber));

// 2) Написати чисту функцію, яка приймає два аргументи і, 
// якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.


function comparison_types(a,b) {
    if (typeof a === typeof b) {
        if (a > b) {
            return a;
        } else if (a === b) {
            return null;
        }
    } else {
        return null;
    }
}

console.log(comparison_types('qwerty','qw'));


// 3) Написати функцію, яка запитує в користувача число з діапазону до тих пір, доки він його не введе.
// Функція брудна, приймає початок і кінець діапазону, а повертає виключно коректне число числового типу.



// let inputNumber = prompt('Введіть число від 1 до 10');
// // debugger;

// function findNumber(unknownNumber) {
//     const givenNumber = 3;
//     let attemptCunter = 1;

//     while (true) {
        
//         if (isNaN(unknownNumber) || unknownNumber === null) {
//             alert('Помилка ввода!');
//         } else if (unknownNumber < givenNumber) {
//             alert('Замале число!')
//         }
//         else if (unknownNumber > givenNumber) {
//             alert('Завелике число!')
//         } else {
//             alert('Вітаю вгадали число за ' + attemptCunter + ' спроби. Це число: ' + givenNumber);
//             break;
//         }
        
//         unknownNumber = prompt('Введіть число від 1 до 10');
//         attemptCunter++;

//         return unknownNumber;
//     }
// }

// alert(findNumber(inputNumber));


// 4) Написати чисту функцію, яка приймає два числа і перевіряє кратність першого другим (повертає булеве значення).

function isMultiplicityNumbers(a, b) {
    const result = a % b === 0;
    if (result) {
        return result;
    } else {
        return result;
    }
}

console.log(isMultiplicityNumbers(8,2));


// 5) Написати чисту функцію, яка перевіряє можливість існування трикутника. Функція приймає три числа - сторони трикутника, повертає булеве значення. Значення за замовчуванням 3,4,5.

function isTriangle(a, b, c) {
    // debugger;
    const result = a + b > c && b + c > a && a + c > b;
    if (result) {
        return result;
    } else {
        return result;
    }
}

console.log(isTriangle(3,4,5));


// 6) Написати чисту функцію, яка приймає число і повертає true, якщо число є простим, інакше - повертає false.

function isPrimeNumber(num) {
    if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

console.log(isPrimeNumber(2));


// 7) Напишіть функцію, яка генерує випадкове число в заданому діапазоні. Функція приймає два аргументи - мінімум і максимум діапазону, повертає ціле число. Діапазон за замовчуванням від 1 до 10 включно. Врахувати можливість виклику функції з неправильними параметрами, тобто, якщо максимум буде більше мінімума, - в цьому випадку міняти параметри місцями всередині функції.


function randomNumb(min = 1, max = 10) {
    const rand = min + Math.random() * (max + 1 - min);

    if (min > max) {
        min = max;
        max = min;
        return Math.floor(rand);
    } else {
        return Math.floor(rand);
    }
  }
  
  console.log(randomNumb(20, 10));


/*  8) Створіть функцію, яка конвертує валюту з гривень в долари та навпаки. 
Функція приймає три параметри: один обов'язковий - кількість грошей, які треба конвертувати, та два необов'язкові: курс та напрямок конвертації. 
Курс за замовчуванням = 36, напрямок true - гривні в долари. 
Якщо напрямок передати false - конвертація буде з доларів в гривні. 
Функція повертає рядок складений з кількості конвертованих грошей та сиволів позначаючих валюту.*/

function currencyConverter(amount, course = 36, direction = true) {
    let result = amount * course + "₴";

    if (!direction) {
        result = course * amount + "$";
    }

    return result;
}

console.log(currencyConverter(20,40,false));