/*let a = 20;
alert(a);

let firstIphone = 2007;
alert(firstIphone);

let creatorJavascript = "Brendan Eich";
alert(creatorJavascript);

let x = 10;
let y = 2;
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);

let result = 2**5;
alert(result);

let A = 9;
let b = 2;
alert(A%b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

let age = prompt('сколько вам лет?');
alert(age);

const user = {
    name: String('Bob'),
    age: Number(19),
    isAdmin: Boolean(true),
}
user.cityOfResidence = String('Moscow');

let info = prompt('Какую информацию хотите узнать о пользователе?', 'user');
alert(user[info]);

let admin= String(prompt('Введите ваше имя'));
 alert(`Привет, ${admin} !`); 

  let password = prompt('Введите пароль');
 if (password === 'домашка') {
    alert('Пароль введен верно')
 } else{
    alert('Пароль введен неправильно')
 }

 let c = prompt('Введите число от 0 до 10');
 if(c > 0 && c < 10) {
 console.log("утверждение верно")
} else{
   console.log('утверждение неверно')
}

let d = 10;
let e = 120;
if (d>100 || e>100) {
   alert('верно')
} else {
   alert('неверно')
}

let a = Number ('2');
let b = Number ('3');
alert(a + b);


let monthNumber = prompt('напишите меесяц')

monthNumber = monthNumber.toLocaleLowerCase();

switch (monthNumber) {
   case 'январь' : 
      alert('зима');
      break;
   case 'февраль':
      alert('зима');
      break;   
   case 'март':
      alert('весна');
      break;   
   case 'апрель':
      alert('весна');
      break;   
   case 'май':
      alert('весна');
      break;   
   case 'июнь':
      alert('лето');
      break;   
   case 'июль':
      alert('лето');
      break;   
   case 'август':
      alert('лето');
      break;   
   case 'сентябрь':
      alert('осень');
      break;   
   case 'октябрь':
      alert('осень');
      break;   
   case 'ноябрь':
      alert('осень');
      break;   
   case 'декабрь':
      alert('зима');
      break;
   default: alert('Такого месяца нету)')
}

 let g = 2
 let scin = prompt ('Пожалуйста, введите любое число')
 let t = scin%g
 if (t === 0) {
   alert('число четное')
 } 
 else {
   alert('число нечетно')
 }

 let clientOS = prompt('здравствуйте, если вы пользуетесль ОС IOS то нажмите 0, если же вы пользуетесь Android то нажмите 1')

 if(
   clientOS === null ||
   clientOS === ''   ||
   clientOS > 1 ||
   clientOS < 0 ||
   (clientOS > 0 && clientOS < 1) ||
   isNaN (clientOS)){
      alert('Ощибка');
   } else + clientOS==1   ? alert ('Установите программу для Android по Ссылке') :
                            alert (' Установите программу на IOS по Ссылке');
 let hello = 0;
 while (hello < 2) {
    console.log('Привет');
    hello++;
  };
 
  let five = 1;
  while (five <= 5) {
    console.log(five);
    five++;
  };
 
  let two = 7;
    while (two <= 22) {
        console.log(two);
       two++;
  };

    const obj = {
      'Коля': '200',
     'Вася': '300',
      'Петя': '400'
  }

    for (let key in obj){
       console.log(`${key} — зарплата ${obj[key]} долларов`);
 }

   iteration_num = 0;
   for(let n = 1000;n > 50; n /= 2){
       console.log(iteration_num)
       iteration_num++;
 }

   for (let fri = 5; fri <= 31; fri += 7){
       alert(`Cегодня пятница, ${fri}-ое число. Необходимо подготовить отчет.`)
 }

 function min  () {
   let a = Number(prompt('Введите первую цифру'))
   let b = Number(prompt('Введите вторую цифру'))
   if (a > b) {
      alert(b)      
   } else if (a < b) {
      alert(a)
   } else {
      alert('это не цифра')
   }
}
min()

function big() {
   let min = Number(prompt('введите цифру'))
   if (min % 2 == 0) {
      alert('Четное число')
   } else if (min % 2 == 1){
      alert('Нечетное число')
   } else {
      alert('это не число')
   }
}
big();

function square () {
   let a = Number(prompt('введите цифру'))
   console.log(a**2)
}
square()

function root () {
   let a = Number(prompt('введите цифру'))
   console.log(Math.sqrt(a))
}
root()

function time() {
   let a = Number(prompt('Сколько тебе лет?'))
   if (a < 0) {
      alert('Вы ввели неправильное значение')
   } else if (a >= 0 && a <= 12) {
      alert('Привет, друг!')
   } else if (a >= 13) {
      alert('Добро пожаловать!')
   } else {
      alert('Вы ввели циру не так(')
   }
}
time()

function examination() {
   let a = Number(prompt('Введите первую цифру'))
   let b = Number(prompt('Введите вторую цифру'))
   if (isNaN(a) == true|| isNaN(b) == true) {
      alert('Одно или оба значения не являются числом')
   } else {
      alert(a * b)
   }
}
examination()

function cube() {
   let a = Number(prompt('Введите число'))
   if (isNaN(a) == false) {
      alert(`n в кубе равняется ${a**2}`)
   } else {
      alert('Переданный параметр не является числом')
   }
}
cube()*/

function Numberes() {
let monthNumber = (prompt('напиши номер месяц'))
switch (monthNumber) {
   case '1': 
   case '2':
   case '12':
      alert('зима');
      return (yesno());
      break;   
   case '3': 
   case '4':  
   case '5':
      alert('весна');
      return (yesno());
      break;   
   case '6': 
   case '7':  
   case '8':
      alert('лето');
      return (yesno());
      break;   
   case '9':  
   case '10': 
   case '11':
      alert('осень');
      return (yesno());
      break;   
   default: alert('ты ввел не число!');
   return (noyes());
}
}
function noyes() {
   let a = confirm('Хочешь продолжить игру?')
   if (a === true) {
      return (Numberes())
   } else {
      alert ('Тогда хорошего дня, жду тебя снова!')
   }
}

function yesno() {
   let a = confirm('Молодец! Хочешь продолжить игру?')
   if (a === true) {
      return (Numberes())
   } else {
      alert ('Тогда хорошего дня, жду тебя снова!')
   }
}

/*const n = [1, 5, 4, 10, 0, 3];
for (let i = -1; i < n.length; i++) {
	if (n[i] === 10) break;
	console.log(n[i + 1]);
};

const b = [1, 5, 4, 10, 0, 3];
console.log(b.indexOf(4));

let x = [1, 3, 5, 10, 20];
x = x.join(' ');
console.log(x);

const z = [
   [1, 1, 1],
   [1, 1, 1],
   [1, 1, 1]
]
console.log(z);

const v = [1, 1, 1];
v.push(2, 2, 2)
console.log(v);

let e = [9, 8, 7, 'a', 6, 5];
e = e.sort()
console.log(e.pop())
console.log(e);

let k = (prompt('введите цифру'))
const t = [9, 8, 7, 6, 5];
for (let i = 0; i < n.length; i++) {
   if (t[i] == k) {
   alert('подходит')
   } else {
      console.log('неподходит')
   }
}

let u = 'abcdef';
u = u.split('')
u = u.reverse()
u = u.join('')
console.log(u);

let o = [
   [1, 2, 3,],
   [4, 5, 6]
]
let r = [',']
o = o.join([r])
console.log(o)

let p = [9, 5, 6, 3, 1]
for (let i = 0; i < p.length; i++) {
   if (tax = p.map(el => el + p[i+1]))
   console.log(tax[i])
}*/

/*homework 7*/

let answer = 'js';
console.log(answer.toUpperCase());

let resultArr = [];
function regulars(regular, search) {
regular.forEach(element => {
   if (element.toLowerCase().startsWith(search.toLowerCase())) {
      resultArr.push(element);
   }
});
console.log(resultArr)
}
regulars(['audi', 'bmw', 'mersedes', 'lada', 'bently'], 'b')

let num = 32.58884;
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))

const numb = [52, 53, 49, 77, 21, 32];
let max = Math.max.apply(null, numb);
console.log(max)
let min = Math.min.apply(null, numb);
console.log(min)

console.log(Math.round(Math.random() * 10));

function getRandomArrNumbers(randomNumber) {
   let sixthArray = [];
   let arrLength = Math.floor(randomNumber / 2)
   for (let i = 0; i < arrLength; i++) {
       sixthArray.push(Math.round(Math.random() * randomNumber));
   }
   console.log(sixthArray);
}
/*getRandomArrNumbers(Number(prompt('Введите любое число')));*/

let seventhRandomValue = (maxValue, minValue) => {
   let seventhRandomResult = Math.round(Math.random() * (maxValue - minValue) + minValue);
   console.log(seventhRandomResult);
}
/*seventhRandomValue(Number(prompt('Введите любое число')), Number(prompt('Введите любое число, значение которого меньше, чем у первого числа')));*/

let currentDate = new Date();
console.log(currentDate);

let nineDate = new Date ("12 March 2023");
nineDate.setDate(nineDate.getDate() + 73);
console.log(nineDate);

let tenthDate = new Date();
function data(tenthDate) {
   const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота",];
   const month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря",];
   let date = tenthDate.getDate() + ' ' + month[tenthDate.getMonth()] + ' ' + tenthDate.getFullYear() + ' - это ' + days[tenthDate.getDay()] + ' ' + tenthDate.getHours() + ':' + tenthDate.getMinutes() + ':' + tenthDate.getSeconds();
   console.log(date);
}
data(tenthDate)


function game2() {
   let game = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];
   game = game.sort(() => Math.random() - 0.5);
   alert(game)
   let name = (prompt('Назови первый элемент списка'));
   name = name.toLocaleLowerCase()
   let name2 = (prompt('Назовите последний элемент списка'));
   name2 = name2.toLocaleLowerCase()
   if (name === game[0] && name2 === game[6]){
      alert('Все верно)')
      return (gameDop())
   } else if (name === game[0]){
      alert('Почти верно, можно и лучше!')
      return (gameDop())
   } else if (name2 === game[6]){
      alert('Почти верно, можно и лучше!')
      return (gameDop())
   } else {
      alert('Неправильно!')
      return (gameDop())
   }
}
function gameDop() {
   let a = confirm('Хочешь продолжить игру?')
   if (a === true) {
      return (game2())
   } else {
      alert ('Тогда хорошего дня, жду тебя снова!')
   }
}

//homework 8
//задание 1

function mult(getArr) {
   const res = getArr.reduce((acc, rec) => acc * rec)
   console.log(res)
}

function sum(getArr) {
   const res = getArr.reduce((acc, rec) => acc + rec)
   console.log(res)
}


function getNumberSumMult(getArr, callback) {
   callback(getArr)
}

getNumberSumMult([3, 4, 1, 9], sum);

//задание 2

function numberOver(a, b) {
	return a.age - b.age;
};

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
users.sort(numberOver);
console.log(users);

//задание 3

function reverse(arr1) {
   const rac = arr1.reverse();
   return arr1;
}

function stringOrNumber(arr) {
      for (let i = 0; i < arr.length; i++) {
         arr[i] *= 1;
         if (isNaN(arr[i]) && arr.splice(i, 1));
      } 
      return arr ;
   }


function each(arr, callback) {
   callback(arr)
}

const arr = [1, '4', false, 9, 'two'];
const arr1 = [1, '4', 9, 'two'];

each(arr1, reverse);
each(arr, stringOrNumber);


console.log(arr)
console.log(arr1)

//задание 4

const timer = (deadline) => {

   console.log(new Date());

   let time = deadline;
   const interval = setInterval(() => {
       time -= 3;
       console.log(new Date());
   }, 3000);

   setTimeout(() => {
       clearInterval(interval);
       console.log('30 секунд прошло')
   }, deadline * 1000)
};

const deadline = 30;
//timer(deadline);

//задание 5

function calling() {
   console.log('Звоню!')
};

function beeps(callback) {
   setTimeout(() => {
       console.log('Идут гудки...')
       callback()
   }, 1000);
}

function talk() {
   console.log('Разговор')
}

calling()
beeps(talk);