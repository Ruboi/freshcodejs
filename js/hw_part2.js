// 1) Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби. Зробити двома способами через while і for

// let userNumber = prompt('Input number > 15, < 35, % 6 ');
// let i = 1;
// const limit = 3;

// while (i < limit) {
//     if (!Number.isFinite(userNumber) || userNumber === '' || userNumber < 15 || userNumber > 35 || userNumber % 6 !== 0) {
//         userNumber = prompt('You entered incorrect number, please enter the correct number');
//     }
//     i++;
// }



// for (let userNumber = prompt('Input number > 15, < 35, % 6 '); i < limit && !Number.isFinite(userNumber) || userNumber === '' || userNumber < 15 || userNumber > 35 || userNumber % 6 !== 0; i++) {
   
//         userNumber = prompt('You entered incorrect number, please enter the correct number');
    
// }



// const passwordCorect = isPasswordCorect ? 'correct' : 'INcorrect';
// console.log(`Password ${passwordCorect}`);

// let userNumber = null;

// const limit = 3;
// let correntTry = 1;
// let isNumberCorect = false;
// debugger;
// do {
//     userNumber = prompt('Input number > 15, < 35, % 6').trim();
//     const NUMBER =  userNumber === '' || userNumber > 15 || userNumber < 35 || userNumber % 6 === 0;
//     isNumberCorect = userNumber === NUMBER;
// } while ( !isNumberCorect && correntTry++ < limit);

// if (isNumberCorect) {
//     console.log(userNumber);
// } else {
//     console.log('Number INcorrect');
// }




/********************************************************************************************************************** */
// 2) Написати гру: Вгадай число. Користувач намагається вгадати таємниче число. Ви виводите підказки: більше чи менше таємниче число.
// Гра триває доки користувач не вгадає. В кінці ви виводите за скільки спроб користувач вгадав таємниче число.

// const givenNumber = 3;
// let attemptCunter = 1;
// let inputNumber = null;
// debugger;
// while (true) {
//     let inputNumber = prompt('Введіть число'); 
    
//     switch (true) {
//         case inputNumber < givenNumber:
//             alert('Замале число!');
//             break;
//         case inputNumber > givenNumber:
//             alert('Завелике число!'); 
//             break;   
//         default:
//             alert('Вітаю вгадали число! ' + attemptCunter + ' спроби');
//             break;
//     }
//     attemptCunter++;
// }

// while (true) {
//     let inputNumber = prompt('Введіть число'); 

//     if (isNaN(inputNumber)) {
//         alert('Помилка ввода!');
//     } else if (inputNumber < givenNumber) {
//         alert('Замале число!')
//     }
//     else if (inputNumber > givenNumber) {
//         alert('Завелике число!')
//     } else {
//         alert('Вітаю вгадали число за ' + attemptCunter + ' спроби. Це число: ' + givenNumber);
//         break;
//     }
//     attemptCunter++;
// }


/********************************************************************************************************************** */
// 3) Користувач вводить вік (привести до числа), ви виводите класифікацію за віком:
// [0 - 2) baby
// [2 - 6) kinder
// [6 - 12) child
// [12 - 18) teenager
// [18 - 65) adult
// [65 - 100) oldmen
// [100 - 150) super!
// Якщо користувач ввів неправильне значення, вивести 404 try again - і попросити знову ввести вік, тобто починаєте з початку.
// Оберіть самі потрібну конструкцію



while (true) {
    const userAge = Number(prompt('Ваш вік:'));

    if (userAge <= 2) {
        console.log('baby');
        break;
    } else if (userAge > 2 && userAge <= 6) {
        console.log('kinder');
        break;
    } else if (userAge > 6 && userAge <= 12) {
        console.log('child');
        break;
    } else if (userAge > 12 && userAge <= 18) {
        console.log('teenager');
        break;
    } else if (userAge > 18 && userAge <= 65) {
        console.log('adult');
        break;
    } else if (userAge > 65 && userAge <= 100) {
        console.log('oldmen');
        break;
    } else if (userAge > 100 && userAge <= 150) {
        console.log('super!');
        break;
    } else {
        console.log('404 try again');
    }
}


// 5) Написати скрипт, який виводить числа (числа повинні бути парними і кратними 9) з діапазону від 0 до 100 у зворотньому порядку.
// Оберіть самі потрібну конструкцію

let minCout = 0;
let maxCout = 100;

while (minCout <= maxCout) {
    if (maxCout % 9 === 0) {
        console.log(maxCout);
    }
    maxCout -=2;
}


// 6) За допомогою цикла написати скрипт, який рахує ступень цілого числа.
// Врахувати, що ступень може бути позитивним, нулем, негативним.
// Не забути про результат який можна отримати безпечно! тобто для перебільшення безпечного цілого продумати що можна використати, щоб отримати коректне значення.

