let result = 8;
console.log(result); //2

/*
alert("Explicit content, parental revisory only!")

prompt("How old are u", 18);

if (8 > 9) {
    console.log('smth wrong');
} else {
    console.log('everything ok');
}
*/

let userAnswer = prompt('Зимой и летом одним цветом');

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
alert((userAnswer.toLowerCase() == "елка") ? 'Верно!' : 'Не угадал');
