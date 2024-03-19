// 1) Напишіть функцію, яка приймає рядок, що є селектором, і повертає один елемент, який відповідає селектору, або null, якщо такого елементу не має.

const loremEl = document.querySelector('.lorem');

function findEl(loremEl) {

}

// if(!loremEl){
//     console.log('none')
// } else {
//     console.log(loremEl);
// }

loremEl ? console.log(loremEl) : console.log('none');


// 2) Напишіть функцію, яка змінює колір тексту заголовку сторінки при кліці на нього.

const titlePage = document.querySelector('h1');

const titleColor = () => {
    // titlePage.style.color = 'green';
    titlePage.setAttribute('style', 'color: #ccc')
}

// titlePage.onclick = function () {
//     this.setAttribute('style', 'color: #ccc')
// }

titlePage.addEventListener('click', titleColor);


// 3) Напишіть функцію, яка змінює текст кнопки при кліці на неї з "Натисніть мене" на "Ви натиснули мене!". (textContent)

const clickMe = document.querySelector('.clickMe');

const clickChangeTxt = () => {
    // if (clickMe.textContent === 'Натисніть мене') {
    //     clickMe.textContent = 'Ви натиснули мене!';
    // } else {
    //     clickMe.textContent = 'Натисніть мене';
    // }

    clickMe.textContent = clickMe.textContent === 'Натисніть мене' ? 'Ви натиснули мене!' : 'Натисніть мене'
}


clickMe.addEventListener('click', clickChangeTxt);

// 4) Напишіть функцію, яка змінює значення атрибута src зображення на сторінці при наведенні на нього, при відведенні -  повертає перше зображення.

const hoverImg = document.querySelector('.change-img');

const imgSrc1 = 'https://images.pexels.com/photos/190340/pexels-photo-190340.jpeg?auto=compress&cs=tinysrgb&w=600';
const imgSrc2 = 'https://images.pexels.com/photos/6143369/pexels-photo-6143369.jpeg?auto=compress&cs=tinysrgb&w=600';

// console.log(hoverImg.getAttribute('src'))
// console.log(imgSrc1)

const hoverChangeImg = () => {
    hoverImg.setAttribute('src', hoverImg.getAttribute('src') === imgSrc1 ? imgSrc2 : imgSrc1);
}


hoverImg.addEventListener('mouseover', hoverChangeImg);


// 5) Напишіть функцію, яка додає атрибут target="_blank" до всіх посилань на сторінці.

const anchors = document.querySelectorAll('a');

// console.log(anchors)

for (var i = 0; i < anchors.length; i++) {
    anchors[i].setAttribute('target', '_blank');
}

// 6) Напишіть функцію, яка видаляє атрибут disabled з кнопки на сторінці при кліці на неї.

const clickDisabled = document.querySelector('.clickDisabled');
const removeDisabled = document.querySelector('.btnDisabled');

const clickRemoveDisabled = () => {
    removeDisabled.removeAttribute('disabled')
}

const clickAddDisabled = () => {
    removeDisabled.setAttribute('disabled', 'disabled')
}


clickDisabled.addEventListener('click', clickRemoveDisabled);

removeDisabled.addEventListener('click', clickAddDisabled);

// 7) Напишіть функцію, яка перевіряє, чи містить елемент з ідентифікатором "image" атрибут alt, і виводить "Так" або "Ні" в залежності від результату.


const altImg = document.querySelector('.image');

console.log(altImg.getAttribute('alt'))

altImg.getAttribute('alt') ? console.log('Так') : console.log('Ні');

// 8) Напишіть функцію, яка приховує елемент <div> з ідентифікатором "content" при завантаженні сторінки.

const hiddenContent = document.querySelector('.content');

hiddenContent.setAttribute('hidden', 'hidden');

// 9) Напишіть функцію, яка приховує всі елементи з класом "hidden" на сторінці при кліці на кнопці з написом "Приховати", яка має ідентифікатор "hidden-all".


const hiddenAllBtn = document.querySelector('.hidden-all');
const findHidden = document.querySelectorAll('.hidden');

// console.log(findHidden);

const clickHiddenAll = () => {
    hiddenAllBtn.textContent = hiddenAllBtn.textContent === 'Приховати' ? 'Показати' : 'Приховати';

    for (var i = 0; i < findHidden.length; i++) {
        findHidden[i].getAttribute('hidden') ? findHidden[i].removeAttribute('hidden') : findHidden[i].setAttribute('hidden', 'hidden');       
    }
}


hiddenAllBtn.addEventListener('click', clickHiddenAll);