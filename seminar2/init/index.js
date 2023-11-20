// Необходимо найти, установить и применить библиотеку, которая позволит
// избежать проблем со сложением и умножением чисел с плавающей запятой

// const np = require('number-precision');

// function calculateResultSum(purchases, discount) {
//     let total = purchases.reduce((acc, purchases) => acc += purchases, 0);

//     total = total * discount;//примняем скидку
//     return total;
// }
// //д.б результат 78.66
// const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
// //по факту получаем 78.66000000000001
// console.log("общая стоимость покупок:" + total + "рублей");

// const np = require('number-precision');
const { calculateResultSum } = require('./calculateResultSum');


// Найти библиотеку, которая поможет окрасить текст в терминале
// - Применить возможности библиотеки и окрасить сообщение о стоимости
// покупок красным, если стоимость больше 50 рублей и зеленым, если
// стоимость менее 50 рублей
const color = require('colors');



// function calculateResultSum(purchases, discount) {
//     let total = purchases.reduce((acc, purchases) => np.plus(acc + purchases), 0);

//     total = np.times(total, discount);//примняем скидку
//     return total;
// }
// //д.б результат 78.66
const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
//по факту получаем 78.66000000000001

console.log("общая стоимость покупок:" + total + "рублей");
console.log(total > 50 ? color.red(total) : color.green(total));