// let result = 8;
// console.log(result); //2

// /*
// alert("Explicit content, parental revisory only!")

// prompt("How old are u", 18);

// if (8 > 9) {
//     console.log('smth wrong');
// } else {
//     console.log('everything ok');
// }
// */

// let userAnswer = prompt('Зимой и летом одним цветом');

// if (userAnswer === '') {
//     console.log('Empty');
// } else if (userAnswer == 'елка') {
//     alert('Верно!');
// } else {
//     alert('Не угадал');
// }

// (условие) ? ДА : НЕТ
// (userAnswer == "елка") ? alert('Верно!') : alert('Не угадал');
// or 
// alert((userAnswer.toLowerCase() == "елка") ? 'Верно!' : 'Не угадал');

// // let pass = Number(prompt('Enter password'));
// // pass = Number(pass);
// // if (pass === 123) {
// //     alert('Go further')
// // } else {
// //     alert('Can`t go further');
// // }

// let pass = Number(prompt('Enter password'));
// alert((pass === 123) ? 'Go further' : 'Can`t go further');

//  #FUNCTIONS

// let h = number => {  // if 1 parameter brackets can be skipped
//     return number + 1;
// }

// let h2 = () => {  // if no parameters brackets CAN`T be skipped
//     return number + 1;
// }

// let h3 = () => number + 1; // shorten to optimize 




// const f = (param = 5) => { //param = 5 -> default value
//     console.log(param);
// }
// f(); //5
// f(10); //10


// const sum1 = function (a, b) {
//     return a + b;
// }
// // or 
// const d = (a, b) => a + b; // better view

// function helloName(name) {
//     console.log(name);
// }

// helloName('Alex');


// let count = 5;

// function counter() {
//     return count++;
// }

// counter();
// counter();

// console.log(count);

// let age = Number(prompt('Сколько вам лет'));

// const lvlUpAge = () => age + 5;


// lvlUpAge();
// console.log(`Через 5 лет вам будет ${age + 5}`);

// const salary = (money) => {
//     money = money * 0.87;
//     return money * 0.75;
// }

// const userMoney = Number(prompt("Сколько ты зарабатываешь"))

// let monthlyCosts = salary(userMoney);
// console.log(`Для расходов можно использовать ${monthlyCosts}`);

// console.log(`На еду желательно потратить не более чем ${monthlyCosts * 0.3}`);

// function buy() {
//     alert('Поздравляем');
//     alert('Вы нажали на кнопку купить');
// }




// sayHello();

// function sayHello() {
//     return 5;
//     alert('Hello'); // func stops after return
// }

// hello2(); // can`t use VARIABLE before initialization
// const hello2 = () => {
//     alert('Hello2');
// }

// let userAnswer = prompt('Зимой и летом одним цветом');

// if (userAnswer === 'елка') {
//     console.log('Угадал');
// } else {
//     console.log('Не угадал');
// }

//let userAnswer2 = prompt('Сидит дед во 100 шуб одет, кто его раздевает, тот слезы проливает');

// if (userAnswer2 === 'лук') {
//     console.log('Угадал');
// } else {
//     console.log('Не угадал');
// }

function askQuestion(question, answer) {
    const userAnswer = prompt(question);

    if (userAnswer.toLowerCase() === answer) {
        console.log('Угадал');
    } else {
        console.log('Не угадал');
    }

}
function puzzle() {
    askQuestion('Сидит дед во 100 шуб одет, кто его раздевает, тот слезы проливает', 'лук');
    askQuestion('Зимой и летом одним цветом', 'елка');

}