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
   case '1' : 
      alert('зима');
      return (yesno());
      break;
   case '2':
      alert('зима');
      return (yesno());
      break;   
   case '3':
      alert('весна');
      return (yesno());
      break;   
   case '4':
      alert('весна');
      return (yesno());
      break;   
   case '5':
      alert('весна');
      return (yesno());
      break;   
   case '6':
      alert('лето');
      return (yesno());
      break;   
   case '7':
      alert('лето');
      return (yesno());
      break;   
   case '8':
      alert('лето');
      return (yesno());
      break;   
   case '9':
      alert('осень');
      return (yesno());
      break;   
   case '10':
      alert('осень');
      return (yesno());
      break;   
   case '11':
      alert('осень');
      return (yesno());
      break;   
   case '12':
      alert('зима');
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

const n = [1, 5, 4, 10, 0, 3];
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
}