// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectangle = (a, b) => a * b;
console.log(rectangle(10, 20));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (radius) => Math.PI * Math.pow(radius, 2);
console.log(circle(10));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (radius, height) => 2 * Math.PI * radius * height;
console.log(cylinder(10, 10));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let itemsArr = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
};
itemsArr([1, 2, 3, 4, 5]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
let paragraph = (text) => {
    document.write(`<p>${text}</p>`);
};
paragraph('Привіт');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

let itemsUl1 = (text) => {
    document.write(`
                        <ul>
                            <li>${text}</li>
                            <li>${text}</li>
                            <li>${text}</li>
                        </ul>
                        `)
};
itemsUl1('елемент списку');

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
let itemsUl2 = (text, quantity) => {
    document.write('<ul>');
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};
itemsUl2('Привіт', 5);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
let itemsArray = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
};
itemsArray([1, 3.2, 'Влад', false]);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = (arr) => {
    for (const item of arr) {
        document.write(` <div>${item.id} ${item.name} ${item.age} </div>`);
    }
};
users([
    {id: 1, name: 'Влад', age: 26},
    {id: 2, name: 'Оля', age: 62},
    {id: 3, name: 'Коля', age: 16}
]);

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let minNumArr = (arr) => {
    let minNum = arr[0];
    for (const item of arr) {
        if (item < minNum) {
            minNum = item;
        }
    }
    return minNum
};
console.log(minNumArr([1,4,2,5,0]));
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let summa = 0;
    for (const arrElement of arr) {
        summa += arrElement
    }
    return summa
};

console.log(sum([1,2,3,4]));
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    if (index1 < arr.length && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }
    return 'Не правильно введені дані';
};
console.log(swap([1,2,3],0,1));
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let money;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            money = sumUAH / item.value;
        }
    }
    return money;
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
