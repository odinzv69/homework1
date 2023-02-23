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
                            alert (' Установите программу на IOS по Ссылке');*/