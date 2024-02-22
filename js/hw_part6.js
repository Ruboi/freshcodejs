// 1) Написати функцію createAdder(n), яка повертає іншу функцію. Функція, що повертається, повинна вміти додавати переданий аргумент m зі значенням аргумента батьківської функції n і повертати отриманий результат.
// Приклад виклику:
// const  adder = createAdder(10);
// adder(2); //поверне 12 - до 10 + 2
// adder(5); //поверне 17 - до 12 + 5
// adder(10); //поверне 27 - до 17 + 10


function createAdder(n) {
    return function (m) {
        return n += m;
    };
}

const adder = createAdder(10);

console.log('result + 2 >>', adder(2));
console.log('result + 5 >>', adder(5));
console.log('result + 10 >>', adder(10));


// 2) Написати рекурсивну функцію, яка обчислює факторіал числа.
// Функція повина приймати тип данних: number або "bigint", і кидатися помилками.
// Викликати функцію, використовуючи конструкцію try...catch

function fact(n) {
    try {
        if (n === BigInt(n)) {
            n = Number(BigInt(n));
        }
        if (typeof n !== 'number') {
            throw new Error('n must be number value')
        }
        if (n < 0) {
            throw new Error('n must be positive value')
        }
        if (!Number.isInteger(n)) {
            throw new Error('n must be integer value')
        }

        if (n === 0) return 1;

        return n * fact(n - 1);

    } catch (error) {
        console.log(error);
    }
}

// try {
//     console.log('factorial >>', fact(5));
// } catch (error) {
//     console.log(error);
// }

console.log('factorial >>', fact(5n));




// 3) Написати рекурсивну функцію, яка приймає число і повертає рядок з вкладених пар круглих дужок.
// кількість пар дорівнює прийнятому аргументу.
// якщо число(аргумет) менше 1 - повертаємо лише одну пару круглих дужок
// Приклади виклику:
// //pairBrickets(4) => '(((())))'
// //pairBrickets(-4) => '()'
// //pairBrickets('qwe') => throw

// function pairBrickets(n) {
//     try {
//         if (typeof n !== 'number') {
//             throw new Error('n must be number value')
//         }


//         if (n <= 0) {
//             return '()';
//         }

//         const openBricket = '(';
//         const clodeBricket = ')';

//         let result = [];

//         for (let i = 0; i < n; i++) {
//             result.unshift(openBricket);
//             result.push(clodeBricket);
//         }



//         return result.join('');

//     } catch (error) {
//         console.log(error);
//     }
// }
// console.log('pair brickets >>', pairBrickets(2));

function pairBricketsRecursive(n) {
    try {
      if (typeof n !== 'number') {
        throw new TypeError('n must be a number value');
      }
    
      const addBrackets = count => (count <= 1) ? '()' : `(${addBrackets(count - 1)})`;
      
      return addBrackets(n);

    //   function addBrackets(count) {
    //     if (count <= 1) {
    //       return '()';
    //     }
    //     return '(' + addBrackets(count - 1) + ')';
    //   }
    } catch (error) {
      console.log(error);
    }
  }
  
  console.log('pair brackets recursive >>', pairBricketsRecursive(2));


// 4) Написати рекурсивну функцію, яка приймає два числа і повертає найбільший спільний дільник цих двох чисел
// // getDivider(24, 15) -> 3
// // getDivider(3, 3) -> 3
// // getDivider(7, 3) -> 1
// Алгоритм Евкліда дозволяє знайти НСД двох натуральних чисел.
// Суть алгоритму Евкліда – два числа порівнюють і від більшого віднімають менше до тих пір, поки числа не стануть рівними. Число, якому вони стануть рівними, і є їх найбільший спільний дільник.


// function findNsd(a, b) {
//     if (b > a) return findNsd(b, a);
// 	if (!b) return a;
// 	return findNsd(b, a % b);
// }

function findNsd(a, b) {
    while (a !== b) {
        if (a > b) a = a - b;
        else b = b - a;

    }
    return a;
}

console.log('НСД >>', findNsd(3, 3));



// 5) Є об'єкт:
// const user = {
//   id:1,
//   privateInfo:{
//     fname:"Brad",
//     sname:"Pitt",
//     bday:{
//       day:18,
//       month:12,
//       year:1963,
//     },
//     children:['Helen','Alex','Georg','Anna'],
//   },
//   contactInfo:{
//     phone:{
//       work:'123-12-45',
//       mobile:'005-002-003',
//     },
//     adress:{
//       town:'ZP',
//       street:'12Avenu',
//       house:45,
//     },
//     mail:'brad@gmail.com'
//   },
//   profession:'actor'
// }

// Створити змінні для року народження, імені другої дитини, робочого телефону.
// Одним рядком, використовуючи деструктуризацію.


const user = {
    id: 1,
    privateInfo: {
        fname: "Brad",
        sname: "Pitt",
        bday: {
            day: 18,
            month: 12,
            year: 1963,
        },
        children: ['Helen', 'Alex', 'Georg', 'Anna'],
    },
    contactInfo: {
        phone: {
            work: '123-12-45',
            mobile: '005-002-003',
        },
        adress: {
            town: 'ZP',
            street: '12Avenu',
            house: 45,
        },
        mail: 'brad@gmail.com'
    },
    profession: 'actor'
}
console.log('user >>', user);

const {
    privateInfo: {
        bday: { year },
        children: [cld1, cld2, cld3, cld4]
    },
    contactInfo: {
        phone: { work }
    }
} = user;

console.log('user Year >>', year);
console.log('user name child second >>', cld2);
console.log('user work phone >>', work);