'use strict';

// 1) За допомогою дата-атрибутів реалізуйте інтерактивну шпаргалку для візуалізації властивості flex-direction. Приклад на зображенні.

const btnDirection = document.querySelectorAll('.flex-button');
const cntDirection = document.querySelector('.flex-content');


function clickDirection(e) {
    //remove/add class - is-active
    for (var itemBtm of btnDirection) {
        itemBtm.classList.remove('is-active');
    }
    e.target.classList.add('is-active');

    //remove/add flex-content
    let classBtnDirection = e.target.dataset.direction;
    console.log('e.targen.dataset >>', classBtnDirection);

    cntDirection.removeAttribute('class');
    cntDirection.classList.add('flex-content', classBtnDirection);
}

for (const btn of btnDirection) {
    btn.onclick = clickDirection;
}


// 2) Створіть простий список завдань, де кожне завдання має статус "виконано" або "не виконано". Кожен елемент списку повинен мати атрибут data-status, який вказує на статус завдання. Коли користувач клікає на елемент списку, його статус має змінюватися з "виконано" на "не виконано" або навпаки.
// Завдання зберігаються в масиві: tasks = [{title:'Clear room', woker: 'Alex'}, {title:'Clear kitchen', woker: 'Olga'},{title:'Breakfest', woker: 'Alex'},{title:'Bye dress', woker: 'Olga'}]

const tasks = [
    {
        title: 'Clear room',
        woker: 'Alex'
    },
    {
        title: 'Clear kitchen',
        woker: 'Olga'
    },
    {
        title: 'Breakfest',
        woker: 'Alex'
    },
    {
        title: 'Bye dress',
        woker: 'Olga'
    }
];

const todoList = document.querySelector('.todo-list');
const done = 'done';
const notDone = 'not done';

tasks.forEach(el => {
    const todoItem = createtodoItem(el);

    todoList.append(todoItem);

    // todoItem.onclick = completeTask;

    // function completeTask(e) {
    //     todoStatus.textContent = todoStatus.textContent === 'not done' ? 'done' : 'not done';
    //     const task = e.currentTarget;
    //     console.log(task)
    //     task.classList.toggle('done');
    // }
});

function createtodoItem({title, woker}) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.setAttribute('data-status', 'not done');

    const todoTitle = document.createElement('div');
    todoTitle.classList.add('todo-item--title');
    todoTitle.textContent = `${title}`;
    todoItem.append(todoTitle);

    const todoWoker = document.createElement('div');
    todoWoker.classList.add('todo-item--woker');
    todoWoker.textContent = `${woker}`;
    todoItem.append(todoWoker);

    const todoStatus = document.createElement('div');
    todoStatus.classList.add('todo-item--status');
    todoStatus.textContent = notDone;
    todoItem.append(todoStatus);

    return todoItem;
};


function clickItem(e) {
    e.currentTarget.classList.toggle('done');
    const childStatus = e.currentTarget.querySelector('.todo-item--status');
    childStatus.textContent = childStatus.textContent === notDone ? done : notDone;
    e.currentTarget.dataset.status =  e.currentTarget.dataset.status === notDone ? done : notDone;
    
}

const todoItemClk = document.querySelectorAll('.todo-item');

for (const btn of todoItemClk) {
    btn.onclick = clickItem;
}
