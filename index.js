// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function rand () {
    let mass = [];
    let random = 10;

    for (let i = 0; i < random; i++) {
        mass.push(Math.round(Math.random()*100));
    }
    console.log(mass);
}
rand();

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

function rand1 (min, max) {
    let mass1 = [];
    let random = 10;
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < random; i++) {
        mass1.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    console.log(mass1);
    return mass1;
}
rand1(10,40);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sort = rand1(10,40).sort((a, b) => a - b);
console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filter = rand1(10,40).filter(elem => elem % 2 === 0);
console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

//Спосіб 1
let map = rand1(10,40).map(elem => elem.toString());
console.log(map);

//Спосіб 2
let map2 = rand1(10,40).map(elem => elem + '');
console.log(map2);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userMax = new User(0,  'Max', 'Smith', 'maxsmith@gmail.com', 380664574575);
console.log(userMax);

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [
    new User(10, 'Darth', 'Vader', 'Vader@gmail.com', 7744854),
    new User(2, 'Luke', 'Skywalker', 'Skywalker@gmail.com', 7755477),
    new User(3, 'Leia', 'Organa', 'Organa@gmail.com', 7758745),
    new User(4, 'Han', 'Solo', 'Solo@gmail.com', 7735264),
    new User(1, 'Obi-Wan', 'Kenobi', 'Kenobi@gmail.com', 7798564),
    new User(6, 'C-3PO', '-', 'C-3PO@gmail.com', 7741257),
    new User(7, 'R2-D2', '-', 'R2-D2@gmail.com', 7778454),
    new User(5, 'Chewbacca', '-', 'Chewie@gmail.com', 7796584),
    new User(9, 'Yoda', '-', 'Yoda@gmail.com', 7710245),
    new User(8, 'Padmé', 'Amidala', 'Amidala@gmail.com', 7700215),

];
console.log(users);

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

let user = users.filter(function (a) {
    return a.id % 2 === 0;
}).sort(function (a, b) {
    return a.id - b.id;
});
console.log(user);