// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle(a, b) {
    return a * b
}

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(radius, height) {
    return 2 * Math.PI * radius * height
}

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function itemsArr(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function itemsUl1(text) {
    document.write(`
                        <ul>
                            <li>${text}</li>
                            <li>${text}</li>
                            <li>${text}</li>
                        </ul>
                        `)

}

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function itemsUl2(text, quantity) {
    document.write('<ul>');
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function itemsArray(arr) {

    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function users(arr) {
    for (const item of arr) {
        document.write(` <div>${item.id} ${item.name} ${item.age} </div>`);
    }
}

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function minNumArr(arr) {
    let minNum = arr[0];
    for (const item of arr) {
        if (item < minNum) {
            minNum = item;
        }
    }
    return minNum
}

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let summa = 0;
    for (const arrElement of arr) {
        summa += arrElement
    }
    return summa;
}

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    if (index1 < arr.length && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }
    return 'Не правильно введені дані';
}

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let money;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
           money = sumUAH / item.value;
        }
    }
    return money;
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));