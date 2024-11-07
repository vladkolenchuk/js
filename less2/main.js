// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['bla', 123, -99, 123123, 'mi', 5, 6767, 23.2323, 'okten', 'school'];
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9])


// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "Things Fall Apart",
    pageCount: 220,
    genre: "Historical fiction"
}
let book2 = {
    title: "Fairy tales",
    pageCount: 784,
    genre: "Historical fiction"
}
let book3 = {
    title: "The Divine Comedy",
    pageCount: 928,
    genre: "Poem"
}


//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let book4 = {
    title: "Things Fall Apart",
    pageCount: 220,
    genre: "Historical fiction",
    authors: [{
        name: "Chinua Achebe",
        age: 20
    }]
}
let book5 = {
    title: "Fairy tales",
    pageCount: 784,
    genre: "Historical fiction",
    authors: [{
        name: "Hans Christian Andersen",
        age: 30
    }]
}
let book6 = {
    title: "The Divine Comedy",
    pageCount: 928,
    genre: "Poem",
    authors: [{
        name: "Dante Alighieri",
        age: 40
    }]
}


//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: "Leanne Graham",
        username: "Bret",
        password: "harness"

    },

    {
        name: "Ervin Howell",
        username: "Antonette",
        password: "synergize"

    },

    {
        name: "Clementine Bauch",
        username: "Samantha",
        password: "interface"

    },

    {
        name: "Patricia Lebsack",
        username: "Karianne",
        password: "zero"

    },

    {
        name: "Chelsey Dietrich",
        username: "Kamren",
        password: "demarco"

    },

    {
        name: "Dennis Schulist",
        username: "Leopoldo_Corkery",
        password: "Considine"

    },

    {
        name: "Kurtis Weissnat",
        username: "Elwyn",
        password: "Howemouth"

    },
    {
        name: "Nicholas Runolfsdottir",
        username: "Maxime_Nienow",
        password: "MNie"

    },
    {
        name: "Glenna Reichert",
        username: "Delphine",
        password: "dayna123"

    },
    {
        name: "Clementina DuBuque",
        username: "Moriah.Stant",
        password: "turnpike"

    },

]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temp = [
    {
        day: 'Monday',
        morningTemp: 10,
        dayTemp: 20,
        nightTemp: 10
    },

    {
        day: 'Tuesday',
        morningTemp: 10,
        dayTemp: 20,
        nightTemp: 10
    },

    {
        day: 'Wednesday',
        morningTemp: 10,
        dayTemp: 20,
        nightTemp: 10
    },

    {
        day: 'Thursday',
        morningTemp: 10,
        dayTemp: 20,
        nightTemp: 10
    },

    {
        day: 'Friday',
        morningTemp: 10,
        dayTemp: 20,
        nightTemp: 10
    },

    {
        day: 'Saturday',
        morningTemp: 10,
        dayTemp: 20,
        nightTemp: 10
    },
    {
        day: 'Sunday',
        morningTemp: 10,
        dayTemp: 20,
        nightTemp: 10
    },


]


//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (+prompt('Введіть число') !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Яка хвилина?');
if (time >= 0 && time < 15) {
    console.log('Перша');
} else if (time >= 15 && time < 30) {
    console.log('Друга');
} else if (time >= 30 && time < 45) {
    console.log('Третя');
} else if (time >= 45 && time < 60) {
    console.log('Четверта');
} else {
    console.log('Неправильно введене число');
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Який день?');
if (day >= 1 && day < 10) {
    console.log('Перша');
} else if (day >= 10 && day < 20) {
    console.log('Друга');
} else if (day >= 20 && day < 31) {
    console.log('Третя');
} else {
    console.log('Неправильно введене число');
}
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


switch (+prompt('Який день переверити?')) {
    case 1:
        console.log('Лекція');
        break;
    case 2:
        console.log('Практика');
        break;
    case 3:
        console.log('Лекція');
        break;
    case 4:
        console.log('Практика');
        break;
    case 5:
        console.log('Лекція');
        break;
    case 6:
        console.log('Практика');
        break;
    case 7:
        console.log('Відпочинок');
        break;

    default:
        console.log('Неправильно введене число');

}

// #uwsz1RnTQJ1
// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно врахувати коли введені рівні числа.
let x = +prompt('Число перше')
let y = +prompt('Число друге')
if (x > y) {
    console.log('Максимальне число', x);
} else if (y > x) {
    console.log('Максимальне число', y);
} else if (x === y) {
    console.log('Числа рівні');
}

//  #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let xFalse = 5;
if (!xFalse) {
    xFalse = 'default';
}
console.log(xFalse)
//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('Не супер')
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('Не супер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('Не супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('Не супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('Не супер')
}


