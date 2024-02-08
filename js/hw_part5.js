// 1) Написати функцію, яка приймає масив і повертає індекс максимального елемента в масиві. Якщо максимальних елементів декілька(значення однакові) - виводить індекс останнього
// const arrNums = [1, 9, 5, 6, 7, 9, 4, 6,]; => індекс 5

arrNums = [1, 9, 5, 6, 7, 9, 4, 6, 9];

function findMaxIndex(arr) {
    // 
    // let maxIndex = 0;
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] >= arr[maxIndex]) {
    //         maxIndex = i;
    //     }
    // }

    const maxValue = Math.max(...arr);
    const maxIndex = arr.lastIndexOf(maxValue);
    
    return maxIndex;
}

const maxIndex = findMaxIndex(arrNums);

console.log(`Index: ${maxIndex}`);

console.log(`Index: ${arrNums.lastIndexOf(Math.max(...arrNums))}`);

// 2) Написати функцію, яка приймає масив і повертає  кількість максимальних(однакових) елементів
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => кількість  2

function countMaxValue(arr) {
    // 
    // let maxIndex = 0;
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] >= arr[maxIndex]) {
    //         maxIndex = i;
    //     }
    // }

    // const maxIndex = arr.lastIndexOf(maxValue);
    const maxValue = Math.max(...arrNums);
    
    return arr === maxValue;
}

const maxCount = arrNums.filter(countMaxValue);

console.log(`amount: ${maxCount.length}`);


// 3) Написати функцію, яка знаходить середнє арифметичне значення усіх переданих аргументів, якщо аргументів не має - повертає null

arrNumsMean = [1, 9, 5, 6, 7, 9, 4, 6, 9];

function arithmeticMean(args) {
    if (args.length === 0) {
        return null;
    }
    const sumCallback = function (accumulator, currentValue) {
        return accumulator + currentValue;
    }

    const sum = args.reduce(sumCallback)
    return Math.round(sum / args.length) ;
}

console.log(arithmeticMean(arrNumsMean));


// 4) Написати функцію, яка приймає масив і замінює усі максимальні значення в масиві на значення 0
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => [1, 0, 5, 6 , 7, 0, 4, 6]

// function replaceMaxWithZero1(arr) {
//     const maxVal = Math.max(...arr);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === maxVal) {
//             arr[i] = 0;
//         }
//     }

//     return arr;
// }
// const modifiedArr1 = replaceMaxWithZero1(arrNums);

// console.log(modifiedArr1);

function replaceMaxWithZero(arr) {

    const maxVal = Math.max(...arr);
    const modifiedArrStart = arr.map(function (item) {
        if (item === maxVal){
            return item = 0
        } else {
            return item
        }
    })

    return modifiedArrStart;
}
const modifiedArr = replaceMaxWithZero(arrNums);

console.log(modifiedArr);

// 5) Є массив [1,2,3,1,5,6,1,2,5], треба використовуючи цей масив створити новий, в якому будуть присутні тільки тільки ті значення які повторюються. Результат буде [1,2,5].
// Якщо в джерельному масиві усі значення унікальні, то створюєте новий пустий масив.

// const filtered = arrNums.filter((item, index) => arrNums.indexOf(item) === index);

const arrNumsU = [1,2,3,1,5,6,1,2,5];

console.log(`before: ${arrNumsU}`)

function findDuplicates(arr) {
    const uniqueValues = [];
    const duplicates = arr.filter(function (value) {
        if (uniqueValues.indexOf(value) === -1) {
            uniqueValues.push(value);
        } else {
            return true;
        }
    })

    return duplicates
}

const resultArray = findDuplicates(arrNumsU);

console.log(resultArray)

console.log(`after: ${resultArray}`)


// 6) Написати функцію стрілку, яка приймає безліч аргументів і повертає їх добуток.
const multiplyArguments = (...args) => {
    return args.reduce((item, index) => item * index, 1)
}

const result = multiplyArguments(2, 3, 4, 5)
 console.log(result)


//  7) Є масив чисел, треба написати функцію, яка повертає масив з двох елементів, які є мінімальним і максимальним значенням джерельного масиву.


function findMinMax(arr) {
    let maxNumber = Math.max(...arr);
    let minNumber = Math.min(...arr);

    const resultArray = [];

    resultArray.push(maxNumber, minNumber);
    
    return resultArray;
}
const inputArray = [1, 9, 5, 6, 7, 9, 4, 6,];
const resultMinMaxArray = findMinMax(inputArray);

console.log(resultMinMaxArray);




// 8) Переписати функцію, що нижче на функцію стрілку
// function askUser(quetion){
//   const userInput = confirm(quetion);
//   if(userInput){
//      return 'ok';
//   }
//   return 'error';
// }


const askUser = (question) => {
    const userInput = confirm(question);
    return userInput ? 'ok' : 'error';
};

const resultAsk = askUser('You ready?');
console.log(resultAsk);

