// 1) Створити новий клас книга з полями: назва(рядок не менше 2 символів), автор(рядок не менше 2 символів), кількість сторінок(ціле додатнє число більше 10)
// Реалізувати методи: setter & getter  для кожного поля

class Book {
    constructor(name, author, pages) {
        this.bookName = name;
        this.bookAuthor = author;
        this.bookPages = pages;
    }

    set bookName(value) {
        try {
            if (typeof value === 'number') {
                throw new TypeError('name must be a string')
            }
            if (value.length <= 2) {
                throw new RangeError('name of at least 2 characters')
            }
        } catch (error) {
            console.log(error);
        }
        this._bookName = value;
    }

    get bookName() {
        return this._bookName;
    }

    set bookAuthor(value) {
        try {
            if (typeof value === 'number') {
                throw new TypeError('author must be a string');
            }
            if (value.length <= 2) {
                throw new RangeError('author of at least 2 characters');
            }
        } catch (error) {
            console.log(error);
        }
        this._bookAuthor = value;
    }

    get bookAuthor() {
        return this._bookAuthor;
    }

    set bookPages(value) {
        try {
            if (typeof value !== 'number') {
                throw new TypeError('pages must be number');
            }
            if (value < 10 || !Number.isInteger(value)) {
                throw new RangeError('pages must be positive and an integer greater than 10');
            }
        } catch (error) {
            console.log(error);
        }
        this._bookPages = value;
    }

    get bookPages() {
        return this._bookPages;
    }
    
}

const book1 = new Book('Test', 'Testovich', 11);

console.log('book1 >>', book1);


// 2) Створити новий клас RangeValidator, з полями from і to (from повинен бути менше за to)
// Тип данних для кожного поля - number
// Значення за замовчуванням - from=0 і to=10  
// Реалізувати методи: setter & getter  для кожного поля
// Реалізувати метод get range, який буде повертати масив з двома полями одразу
// Реалізувати метод validate, який приймає значення(number) і повертає true, якщо значення входить в діапазон, якщо не входить - повертає false

class RangeValidator {
    constructor(from = 0, to = 10) {
        try {
            if (typeof value !== 'number') {
                throw new TypeError('pages must be number');
            }
            if (value > 0 || !Number.isInteger(value)) {
                throw new RangeError('must be positive and an integer');
            }
            if (from >= to) {
                throw new Error('Invalid range: from should be less than to.');
            }
        } catch (error){
            console.log(error);
        }
        

        this.rangeFrom = from;
        this.rangeTo = to;
    }

    set from(value) {
        try {
            if (value < this.rangeTo) {
                this.rangeFrom = value;
            } else {
                throw new Error('From should be less than to.');
            }
        } catch (error){
            console.log(error);
        }
        
    }

    get from() {
        return this.rangeFrom;
    }

    set to(value) {
        if (value > this.rangeFrom) {
            this.rangeTo = value;
        } else {
            throw new Error('To should be greater than from.');
        }
    }

    get to() {
        return this.rangeTo;
    }

    get range() {
        return [this.rangeFrom, this.rangeTo];
    }

    validate(value) {
        return value >= this.rangeFrom && value <= this.rangeTo;
    }
}


const validator = new RangeValidator();
console.log(validator.range);

validator.from = 2;
validator.to = 8;
console.log(validator.range);

console.log(validator.validate(5)); 
console.log(validator.validate(12));



// 3) Створити новий клас BankAccount, який моделює простий банківський рахунок з можливістю внесення та зняття коштів.
// Поля: власник(рядок від 8 до 12 символів) і початковий баланс = 0.
// Реалізувати методи: setter & getter  для власника
// Метод, який вносить гроші на рахунок та метод, який знімає гроші з рахунку. Обидва методи приймають ціле додатнє число більше нуля в якості параметра.
// Якщо при знятті грошей з рахунку переданий аргумент більше ніж кількість грошей на рахунку - виводити повідомлення: "Для зняття (вказати знімаєму суму) суми не вистачає (вказати скільки не вистачає) на рахунку."  

class BankAccount {
    constructor(owner, balance = 0) {
        this.bankOwner = owner;
        this.bankBalance = balance;
    }

    get owner() {
        return this.bankOwner;
    }
    
    set owner(value) {
        try {
            if (typeof value === 'string' && value.length >= 8 && value.length <= 12) {
                this.bankOwner = value;
            } else {
                throw new Error('Invalid owner name. It should be a string between 8 and 12 characters.');
            }
        } catch (error) {
            console.log(error);
        }
    }

    deposit(amount) {
        try {
            if (amount > 0) {
                this.bankBalance += amount;
                console.log(`Deposited ${amount} into the account. New balance: ${this.bankBalance}`);
            } else {
                throw new Error('Invalid deposit amount. Amount should be a positive number.');
            }
        } catch (error) {
            console.log(error);
        }
    }

    withdraw(amount) {
        try {
            if (amount > 0) {
                if (amount <= this.bankBalance) {
                    this.bankBalance -= amount;
                    console.log(`Withdrawn ${amount} from the account. New balance: ${this.bankBalance}`);
                } else {
                    throw new Error(`Cannot withdraw ${amount}. Insufficient funds. Current balance: ${this.bankBalance}`);
                }
            } else {
                throw new Error('Invalid withdrawal amount. Amount should be a positive number.');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const account = new BankAccount('Bohdan');
console.log(account.owner);

account.deposit(100);
account.withdraw(50);
account.withdraw(80);