// Задание 1.

console.log('Текст из script.js!');

// Задание 2.

// -1-
let num = 123;
console.log(num);

// -2-
let a = 5;
a = 7;
console.log(a);

// -3-
let b = 1 + 2 + 3;
console.log(b);

// -4-

// type 1 comment

/*
    type 2 comment
*/

// Задание 3.
/*
a. Все созданные переменные должны быть логично названы
b. Создайте переменную суммы и присвойте сумму чисел (c,d)
c. Создайте переменную разности и присвойте разность чисел 
(c,d)
d. Создайте переменную прозведения и присвойте произведение 
чисел (c,d)
e. Создайте переменную частного и присвойте деление чисел 
(c,d)
f. Выведите в консоль все созданные переменные
g. Сложите все созданные переменные и выведите результат в 
консоль
    
*/
const c = 10;
const d = 2;

let sum = c + d;
let dif = c - d;
let mult = c * d;
let quotient = c / d;

console.log(sum, dif, mult, quotient);
let totalSum = sum + dif + mult + quotient;
console.log(totalSum);



// Задание 5.

/*
1. Запишите в переменную a число 1.5, а в переменную b - число 0.75. 
Найдите сумму значений этих переменных и выведите ее на экран.
2. Создайте переменную a, запишите в нее какое-нибудь 
положительное или отрицательное число. Выведите на экран это 
число с обратным знаком.
*/

// -1-
a = 1.5;
b = 0.75;
sum = a + b;

console.log(sum);

// -2-
a = 2;
console.log(-a);

// Задание 6.

/*
1. Создайте строку с вашем именем и строку с вашей фамилией. 
Выведите эти данные в консоль
2. Создайте переменную с текстом 'java' и переменную с текстом 
'script'. С помощью этих переменных и операции сложения строк 
выведите в консоль строку 'javascript'.
3. Создайте переменную с текстом 'hello' и переменную с текстом 
'world'. С помощью этих переменных и операции сложения строк 
выведите в консоль строку 'hello world'.
*/

const firstName = 'Sherzod';
const lastName = 'Jumaev';

console.log(firstName, lastName);

let firstWord = 'java';
let secondWord = 'script';

console.log(firstWord + secondWord);

let hello = 'hello';
let world = ' world';

console.log(hello + world);

// parseFloat & parseInt

// case 1
let myNum = '9.0';

console.log(parseFloat(myNum));

if (parseFloat(myNum) - parseInt(myNum) > 0) {
    console.log('its float');
} else {
    console.log('its int');
}

// case 2
myNum = '9.1';

console.log(parseFloat(myNum));

if (parseFloat(myNum) - parseInt(myNum) > 0) {
    console.log('its float');
} else {
    console.log('its int');
}